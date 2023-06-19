package com.shium.recipebook.controller;

import com.shium.recipebook.exception.UserNotFoundException;
import com.shium.recipebook.model.User;
import com.shium.recipebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/api/v1/user/create")
    User createNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping(path="/api/v1/user/getUsers")
    Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping(path = "/api/v1/user/{ID}")
    User getUserById(@PathVariable Long ID) {
        return userRepository.findById(ID)
                .orElseThrow(() -> new UserNotFoundException(ID));
    }
}
