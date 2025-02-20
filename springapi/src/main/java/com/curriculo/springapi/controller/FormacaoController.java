package com.curriculo.springapi.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curriculo.springapi.model.Formacao;
import com.curriculo.springapi.repository.FormacaoRepository;
import com.curriculo.springapi.Service.Service;

@RestController
@RequestMapping("/formacao")
public class FormacaoController {
    
    @PostMapping
    public ResponseEntity<List<Formacao>> createFormacao(@RequestBody List<Formacao> formacao) {
        
        return Service.cadastrarFormacao(formacao, formacaoRepository);
    }

    @GetMapping
    public ResponseEntity<List<Formacao>> getAllFormacoes() {
        return ResponseEntity.ok(formacaoRepository.findAll());
    }

    @Autowired
    private FormacaoRepository formacaoRepository;
}
