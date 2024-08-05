package com.nebula.nebula.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nebula.nebula.model.Login;


@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {
    Login findByUsername(String username);
    Login findByEmail(String email);
}
