package com.curriculo.springapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.curriculo.springapi.dto.Atributos;
import com.curriculo.springapi.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {

    Optional<Usuario> findByEmail(@Param("email") String email);

    @Query(value = "SELECT u.id, u.nome, u.email, u.foto_base64, e.cep, e.logradouro, e.bairro, e.numero, e.cidade, e.uf,d.ddd,t.telefone,rs.github,rs.instagram,rs.linkedin,rs.whatsapp, f.curso, f.fim, f.grau, f.inicio FROM tb_usuario u \n" + //
                "INNER JOIN tb_usuario_endereco ue ON u.id = ue.id_usuario \n"+
                "INNER JOIN tb_endereco e ON ue.id_endereco = e.id \n"+
                "INNER JOIN tb_usuario_telefone ut ON u.id = ut.id_usuario\n"+
                "INNER JOIN tb_telefone t ON ut.id_telefone = t.id\n"+
                "INNER JOIN tb_ddd d ON t.id_ddd = d.id\n"+
                "INNER JOIN tb_usuario_redesocial ur ON u.id = ur.id_usuario\n"+
                "INNER JOIN tb_redesocial rs ON ur.id_rede_social = rs.id\n"+
                "INNER JOIN tb_usuario_formacao uf ON u.id = uf.id_usuario\n"+
                "INNER JOIN tb_formacao f ON uf.id_formacao = f.id\n" + //
                "WHERE u.id = (SELECT MAX(u.id) FROM tb_usuario u)",nativeQuery = true)
    List<Atributos> buscarPessoa();

    @Query(value = "SELECT u.id, u.nome, u.email, u.foto_base64, e.cep, e.logradouro, e.bairro, e.numero, e.cidade, e.uf,d.ddd,t.telefone,rs.github,rs.instagram,rs.linkedin,rs.whatsapp, xp.atividade,xp.fim,xp.inicio,xp.tipo FROM tb_usuario u \n"+
    "INNER JOIN tb_usuario_endereco ue ON u.id = ue.id_usuario \n"+
    "INNER JOIN tb_endereco e ON ue.id_endereco = e.id \n"+
    "INNER JOIN tb_usuario_telefone ut ON u.id = ut.id_usuario \n"+
    "INNER JOIN tb_telefone t ON ut.id_telefone = t.id  \n"+
    "INNER JOIN tb_ddd d ON t.id_ddd = d.id \n"+
    "INNER JOIN tb_usuario_redesocial ur ON u.id = ur.id_usuario \n"+
    "INNER JOIN tb_redesocial rs ON ur.id_rede_social = rs.id  \n"+
    "INNER JOIN tb_usuario_experiencia ux ON u.id = ux.id_usuario \n"+
    "INNER JOIN tb_experiencia xp ON ux.id_experiencia = xp.id \n"+
    "WHERE u.id = (SELECT MAX(u.id) FROM tb_usuario u)",nativeQuery = true)
    List<Atributos> buscarPessoaExperiencia();
}
