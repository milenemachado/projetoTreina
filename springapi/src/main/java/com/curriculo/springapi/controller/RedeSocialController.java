package com.curriculo.springapi.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curriculo.springapi.model.RedeSocial;
import com.curriculo.springapi.repository.RedeSocialRepository;
import com.curriculo.springapi.Service.Service;

@RestController
@RequestMapping("/redesocial")
public class RedeSocialController {
    
    @PostMapping
    public ResponseEntity<RedeSocial> createEndereco(@RequestBody RedeSocial redeSocial) {
        return Service.cadastrarRede(redeSocial,redeSocialRepository);
    }

    @Autowired
    private RedeSocialRepository redeSocialRepository;
}
