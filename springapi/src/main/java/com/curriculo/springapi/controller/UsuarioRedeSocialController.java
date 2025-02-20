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

import com.curriculo.springapi.model.UsuarioRede;
import com.curriculo.springapi.repository.UsuarioRedeSocialRepository;
import com.curriculo.springapi.Service.Service;

@RestController
@RequestMapping("/usuariorede")
public class UsuarioRedeSocialController {
    
    @PostMapping 
    public ResponseEntity<UsuarioRede> cadastroRede(@RequestBody UsuarioRede usuarioRede) {
        
        return Service.cadastroRede(usuarioRede, usuarioRedeSocialRepository);
    }

    @Autowired
    private UsuarioRedeSocialRepository usuarioRedeSocialRepository;
    
}
