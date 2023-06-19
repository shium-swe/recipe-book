package com.shium.recipebook.model;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @SequenceGenerator(name="user_sequence", sequenceName = "user_sequence", allocationSize=1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    private Long id;
    // @Column(nullable = false)
    private String firstName;
    // @Column(nullable = false)
    private String lastName;
    // @Column(nullable = false, unique = true)
    private String email;
    // @Column(nullable = false)
    private String password;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
