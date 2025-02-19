package com.curriculo.springapi.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curriculo.springapi.model.Telefone;
import com.curriculo.springapi.repository.TelefoneRepository;
import com.curriculo.springapi.Service.Service;

@RestController
@RequestMapping("/telefone")
public class TelefoneController {
    
    @PostMapping
    public ResponseEntity<Telefone> createTelefone(@RequestBody Telefone telefone) {
        return Service.cadastrarTelefone(telefone,telefoneRepository);
    }
    @Autowired
    private TelefoneRepository telefoneRepository;
}
