package com.curriculo.springapi.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curriculo.springapi.model.UsuarioTelefone;
import com.curriculo.springapi.repository.UsuarioTelefoneRepository;
import com.curriculo.springapi.Service.Service;

@RestController
@RequestMapping("/usuariotelefone")
public class UsuarioTelefoneController {
    
    @PostMapping
    public ResponseEntity<UsuarioTelefone> create(@RequestBody UsuarioTelefone usuarioTelefone) {
        return Service.cadastroTelefone(usuarioTelefone, usuarioTelefoneRepository);
    }

    @GetMapping
    public ResponseEntity<List<UsuarioTelefone>> numero() {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioTelefoneRepository.findAll());
    }

    @Autowired
    private UsuarioTelefoneRepository usuarioTelefoneRepository;
    
}
