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

import com.curriculo.springapi.model.DDD;
import com.curriculo.springapi.repository.DDDRepository;
import com.curriculo.springapi.Service.Service;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/ddd")
public class DDDController {
    
    @PostMapping
    public ResponseEntity<DDD> createEndereco(@RequestBody DDD ddd) {
        return Service.cadastrarDDD(ddd,dddRepository);
    }

    @GetMapping
    public ResponseEntity<List<DDD>> ddd() {
        return ResponseEntity.status(HttpStatus.OK).body(dddRepository.findAll());
    }
    
    
    @Autowired
    private DDDRepository dddRepository;
}
