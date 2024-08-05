package com.nebula.nebula.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.nebula.nebula.model.Book;
import com.nebula.nebula.service.BookService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public ResponseEntity<String> addBook(@RequestParam("title") String title,
                                        @RequestParam("author") String author,
                                        @RequestParam("image") MultipartFile file) throws IOException {
        if (title == null || title.isEmpty() || author == null || author.isEmpty() || file.isEmpty()) {
            return ResponseEntity.badRequest().body("Missing required parameters");
        }

        Book book = bookService.saveBook(title, author, file);
        return ResponseEntity.ok("Book added successfully: " + book.getId());
    }


    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id,
                                            @RequestParam("title") String title,
                                            @RequestParam("author") String author,
                                            @RequestParam(value = "image", required = false) MultipartFile file) throws IOException {
        Book book = bookService.updateBook(id, title, author, file);
        return ResponseEntity.ok(book);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }
}
