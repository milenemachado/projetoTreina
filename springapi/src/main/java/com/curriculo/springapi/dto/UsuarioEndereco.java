package com.curriculo.springapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioEndereco {
    
    private int id;
    private int id_usuario;
    private int id_endereco;
}
