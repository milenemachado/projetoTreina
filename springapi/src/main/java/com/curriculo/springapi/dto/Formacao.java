package com.curriculo.springapi.dto;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Formacao {
    
    private int id;
    private String curso;
    private String grau;
    private LocalDate inicio;
    private LocalDate fim;
}
