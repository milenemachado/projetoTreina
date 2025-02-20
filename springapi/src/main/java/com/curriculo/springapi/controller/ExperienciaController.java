package com.curriculo.springapi.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curriculo.springapi.model.Experiencia;
import com.curriculo.springapi.repository.ExperienciaRepository;

@RestController
@RequestMapping("/experiencia")
public class ExperienciaController {
    
    @PostMapping
    public ResponseEntity<List<Experiencia>> createExperiencia(@RequestBody List<Experiencia> experiencia) {
        return ResponseEntity.status(HttpStatus.CREATED).body(experienciaRepository.saveAll(experiencia));
    }

    @Autowired
    private ExperienciaRepository experienciaRepository;
}
