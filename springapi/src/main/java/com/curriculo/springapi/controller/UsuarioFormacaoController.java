package com.curriculo.springapi.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curriculo.springapi.model.UsuarioFormacao;
import com.curriculo.springapi.repository.UsuarioFormacaoRepository;
import com.curriculo.springapi.Service.Service;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/usuarioformacao")
public class UsuarioFormacaoController {
    
    @PostMapping
    public ResponseEntity<UsuarioFormacao> save(@RequestBody UsuarioFormacao usuarioFormacao) {
        return Service.cadastroFormacao(usuarioFormacao,usuarioFormacaoRepository);
    }

    @Autowired
    private UsuarioFormacaoRepository usuarioFormacaoRepository;
}
