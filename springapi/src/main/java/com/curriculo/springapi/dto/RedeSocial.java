package com.curriculo.springapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RedeSocial {
    
    private int id;
    private String github;
    private String linkedin;
    private String instagram;
    private String whatsapp;
}
