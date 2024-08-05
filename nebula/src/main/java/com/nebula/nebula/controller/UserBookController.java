package com.nebula.nebula.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nebula.nebula.model.UserBook;
import com.nebula.nebula.model.Login;
import com.nebula.nebula.service.UserBookService;
import com.nebula.nebula.service.LoginService;

import java.util.List;

@RestController
@RequestMapping("/userbooks")
@CrossOrigin(origins = "http://localhost:3000")
public class UserBookController {

    @Autowired
    private UserBookService userBookService;

    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseEntity<?> addUserBook(@RequestBody UserBook userBook, @RequestParam String username) {
        Login user = loginService.findByUsername(username);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }
        userBook.setUser(user);
        UserBook newUserBook = userBookService.addUserBook(userBook);
        return ResponseEntity.ok(newUserBook);
    }

    @GetMapping("/{username}")
    public ResponseEntity<List<UserBook>> getUserBooks(@PathVariable String username) {
        Login user = loginService.findByUsername(username);
        if (user == null) {
            return ResponseEntity.badRequest().body(null);
        }
        List<UserBook> userBooks = userBookService.getUserBooks(user);
        return ResponseEntity.ok(userBooks);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserBook(@PathVariable Long id) {
        userBookService.deleteUserBook(id);
        return ResponseEntity.ok().build();
    }
}
