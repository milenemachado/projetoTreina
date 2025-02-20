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

import com.curriculo.springapi.model.UsuarioExperiencia;
import com.curriculo.springapi.repository.UsuarioExperienciaRepository;
import com.curriculo.springapi.Service.Service;

@RestController
@RequestMapping("/usuarioexperiencia")
public class UsuarioExperienciaController {

    @PostMapping
    public ResponseEntity<UsuarioExperiencia> save(@RequestBody UsuarioExperiencia usuarioexperiencia){
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioexperienciaRepository.save(usuarioexperiencia));
    }

    @Autowired
    private UsuarioExperienciaRepository usuarioexperienciaRepository;
    
}
