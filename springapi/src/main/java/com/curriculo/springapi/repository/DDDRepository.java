package com.curriculo.springapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.curriculo.springapi.model.DDD;

public interface DDDRepository extends JpaRepository<DDD,Integer> {
    @Query("SELECT d FROM tb_ddd d WHERE d.ddd = :ddd")
    List<DDD> buscarDDD(@Param("ddd") String ddd);
}
