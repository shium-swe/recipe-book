package com.shium.recipebook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.shium.recipebook.model.User;


public interface UserRepository extends JpaRepository<User, Long> { }
