package com.nebula.nebula.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nebula.nebula.model.Book;
import com.nebula.nebula.repository.BookRepository;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    private final String uploadDir = "./uploads/";

    public Book saveBook(String title, String author, MultipartFile file) throws IOException {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("File is required");
        }
    
        String fileName = System.currentTimeMillis() + "-" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        Files.createDirectories(filePath.getParent());
        Files.write(filePath, file.getBytes());
    
        Book book = new Book(null, title, author, fileName);
        book.setImageUrl("/uploads/" + fileName);
    
        return bookRepository.save(book);
    }
    

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
    public Book updateBook(Long id, String title, String author, MultipartFile file) throws IOException {
        Book book = bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
        book.setTitle(title);
        book.setAuthor(author);
    
        if (file != null && !file.isEmpty()) {
            // Delete old file if it exists
            if (book.getImageUrl() != null) {
                Path oldFilePath = Paths.get(uploadDir + book.getImageUrl().substring("/uploads/".length()));
                Files.deleteIfExists(oldFilePath);
            }
    
            String fileName = System.currentTimeMillis() + "-" + file.getOriginalFilename();
            Path filePath = Paths.get(uploadDir + fileName);
            Files.createDirectories(filePath.getParent());
            Files.write(filePath, file.getBytes());
            book.setImageUrl("/uploads/" + fileName);
        }
    
        return bookRepository.save(book);
    }
    

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}

