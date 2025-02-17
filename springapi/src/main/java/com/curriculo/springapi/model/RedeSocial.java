package com.curriculo.springapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "tb_redesocial")
public class RedeSocial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "github", unique=true, nullable = true)
    private String github;

    @Column(name = "linkedin", unique=true, nullable =true)
    private String linkedin;

    @Column(name = "instagram", unique=true, nullable = true)
    private String instagram;

    @Column(name = "whatsapp", unique=true, nullable = true)
    private String whatsapp;
}
