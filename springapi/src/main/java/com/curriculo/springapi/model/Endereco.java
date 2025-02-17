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
@Entity(name = "tb_endereco")
public class Endereco {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="cep",nullable = false,length = 8)
    private String cep;

    @Column(name = "Logradouro",nullable = false,length = 100)
    private String logradouro;

    @Column(name = "bairro",nullable = false,length = 100)
    private String bairro;

    @Column(name="numero",nullable = false)
    private String numero;

    @Column(name = "cidade", nullable=false , length = 45)
    private String cidade;

    @Column(name = "UF", nullable = false, length = 2)
    private String uf;

}
