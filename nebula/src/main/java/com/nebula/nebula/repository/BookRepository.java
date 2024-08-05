package com.nebula.nebula.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nebula.nebula.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}

