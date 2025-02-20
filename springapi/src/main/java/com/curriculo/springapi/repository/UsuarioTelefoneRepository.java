package com.curriculo.springapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.curriculo.springapi.model.UsuarioTelefone;

public interface UsuarioTelefoneRepository extends JpaRepository<UsuarioTelefone, Integer> {
    
}
