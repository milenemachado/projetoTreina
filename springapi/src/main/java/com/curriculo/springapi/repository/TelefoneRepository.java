package com.curriculo.springapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.curriculo.springapi.model.Telefone;

public interface TelefoneRepository extends JpaRepository<Telefone,Integer> {
    
    @Query("SELECT t FROM tb_telefone t WHERE t.telefone = :numero")
    List<Telefone> buscarNumero(@Param("telefone") String numero);

}
