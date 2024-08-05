package com.nebula.nebula.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nebula.nebula.model.UserBook;
import com.nebula.nebula.model.Login;

import java.util.List;

@Repository
public interface UserBookRepository extends JpaRepository<UserBook, Long> {
    List<UserBook> findByUser(Login user);
}
