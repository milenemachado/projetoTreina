package com.curriculo.springapi.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.curriculo.springapi.model.Usuario;
import com.curriculo.springapi.repository.UsuarioRepository;
import com.curriculo.springapi.dto.Atributos;
@RestController
@RequestMapping("/pessoa")
public class QueryController {
    
    @GetMapping
    public ResponseEntity<List<Atributos>> getQuery() {
        
        return ResponseEntity.status(HttpStatus.OK).body(usuarioRepository.buscarPessoa());
    }

    @Autowired
    private UsuarioRepository usuarioRepository;
}
