package com.curriculo.springapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.curriculo.springapi.model.RedeSocial;

public interface RedeSocialRepository extends JpaRepository <RedeSocial,Integer> {
    @Query("SELECT rs FROM tb_redesocial rs WHERE rs.github = :github OR rs.instagram = :instagram OR rs.linkedin = :linkedin OR rs.whatsapp = :whatsapp")
    List<RedeSocial> buscarRedesSocial(@Param("github") String github, @Param("instagram") String instagram, @Param("linkedin") String linkedin, @Param("whatsapp") String whatsapp);
}
