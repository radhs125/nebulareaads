package com.nebula.nebula.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nebula.nebula.model.UserBook;
import com.nebula.nebula.model.Login;
import com.nebula.nebula.repository.UserBookRepository;

import java.util.List;

@Service
public class UserBookService {

    @Autowired
    private UserBookRepository userBookRepository;

    public UserBook addUserBook(UserBook userBook) {
        return userBookRepository.save(userBook);
    }

    public List<UserBook> getUserBooks(Login user) {
        return userBookRepository.findByUser(user);
    }

    public void deleteUserBook(Long id) {
        userBookRepository.deleteById(id);
    }
}
