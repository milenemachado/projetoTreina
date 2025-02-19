package com.curriculo.springapi.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curriculo.springapi.model.UsuarioEndereco;
import com.curriculo.springapi.repository.UsuarioEnderecoRepository;
import com.curriculo.springapi.Service.Service;

@RestController
@RequestMapping("/usuarioendereco")
public class UsuarioEnderecoController {
    
    @PostMapping
    public ResponseEntity<UsuarioEndereco> createEndereco(@RequestBody UsuarioEndereco usuarioEndereco) {
        return Service.cadastroMoradia(usuarioEndereco,usuarioEnderecoRepository);
    }
    @Autowired
    private UsuarioEnderecoRepository usuarioEnderecoRepository;
}
