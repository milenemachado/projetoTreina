package com.curriculo.springapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.curriculo.springapi.model.Formacao;

public interface FormacaoRepository extends JpaRepository <Formacao,Integer>{
    @Query("SELECT f FROM tb_formacao f WHERE f.curso Like CONCAT('%',:curso,'%')")
    List<Formacao> buscarCurso(@Param("curso") String curso);
}
