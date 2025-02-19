package com.curriculo.springapi.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curriculo.springapi.model.Endereco;
import com.curriculo.springapi.repository.EnderecoRepository;
import com.curriculo.springapi.Service.Service;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {

    @PostMapping
    public ResponseEntity<Endereco> criarEndereco(@RequestBody Endereco endereco) {
        
        return Service.cadastrarEndereco(endereco, enderecoRepository);
    }

    @GetMapping
    public ResponseEntity<List<Endereco>> buscarEndereco() {
        return ResponseEntity.status(HttpStatus.OK).body(enderecoRepository.findAll());
    }

    @Autowired
    private EnderecoRepository enderecoRepository;
}
