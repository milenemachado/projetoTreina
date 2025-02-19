package com.curriculo.springapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    
    private int id;
    private String nome;
    private String email;
    private String foto_base64;
    private String caminho;
}
