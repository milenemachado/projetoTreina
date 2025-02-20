package com.curriculo.springapi.model;
import java.time.LocalDate;

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
@Entity(name = "tb_formacao")

public class Formacao {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "inicio", nullable = false)
    private LocalDate inicio;

    @Column(name = "fim" ,nullable = false)
    private LocalDate fim;

    @Column(name = "curso", nullable = false)
    private String curso;

    @Column(name = "grau", nullable = false)
    private String grau;
}
