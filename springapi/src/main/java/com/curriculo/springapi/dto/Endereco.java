package com.curriculo.springapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Endereco {
    
    private int id;
    private String cep;
    private String logradouro;
    private String bairro;
    private String numero;
    private String cidade;
    private String uf;
}
