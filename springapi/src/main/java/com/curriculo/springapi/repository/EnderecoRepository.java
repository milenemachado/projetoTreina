package com.curriculo.springapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.curriculo.springapi.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Integer> {
    
    @Query("SELECT e FROM tb_endereco e WHERE e.cep = :cep AND e.logradouro = :logradouro AND e.bairro = :bairro AND e.numero = :numero AND e.cidade = :cidade AND e.uf = :uf")
    List<Endereco> buscarEnderecos(@Param("cep") String cep, @Param("logradouro") String logradouro, @Param("bairro") String bairro, @Param("numero") String numero, @Param("cidade") String cidade, @Param("uf") String uf);
}
