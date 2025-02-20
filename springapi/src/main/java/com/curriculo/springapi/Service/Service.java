package com.curriculo.springapi.Service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import com.curriculo.springapi.controller.UsuarioRedeSocialController;
import com.curriculo.springapi.image.Image;
import com.curriculo.springapi.model.Endereco;
import com.curriculo.springapi.model.Usuario;
import com.curriculo.springapi.model.RedeSocial;
import com.curriculo.springapi.model.Telefone;
import com.curriculo.springapi.model.DDD;
import com.curriculo.springapi.model.UsuarioEndereco;
import com.curriculo.springapi.model.UsuarioTelefone;
import com.curriculo.springapi.model.UsuarioRede;
import com.curriculo.springapi.model.Formacao;
import com.curriculo.springapi.model.UsuarioFormacao;
import com.curriculo.springapi.repository.UsuarioRedeSocialRepository;
import com.curriculo.springapi.repository.UsuarioRepository;
import com.curriculo.springapi.repository.EnderecoRepository;
import com.curriculo.springapi.repository.RedeSocialRepository;
import com.curriculo.springapi.repository.DDDRepository;
import com.curriculo.springapi.repository.TelefoneRepository;
import com.curriculo.springapi.repository.UsuarioEnderecoRepository;
import com.curriculo.springapi.repository.UsuarioTelefoneRepository;
import com.curriculo.springapi.repository.FormacaoRepository;
import com.curriculo.springapi.repository.UsuarioFormacaoRepository;

public class Service {
    
    public static ResponseEntity<Usuario> verificaEmail(Usuario usuario, UsuarioRepository usuarioRepository){
        if(usuarioRepository.findByEmail(usuario.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        };
        usuario.setCaminho(Image.saveImageFromBase64(usuario.getFoto()));
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(usuario));
    }

    public static ResponseEntity<Endereco>  cadastrarEndereco(Endereco endereco, EnderecoRepository enderecoRepository){
        if(enderecoRepository.buscarEnderecos(endereco.getCep(), endereco.getLogradouro(), endereco.getBairro(), endereco.getNumero(), endereco.getCidade(), endereco.getUf()).size() > 0) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        } else if (endereco.getUf().length() > 2 || endereco.getUf().length() < 2){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(enderecoRepository.save(endereco));
    }

    public static ResponseEntity<RedeSocial> cadastrarRede(RedeSocial redeSocial, RedeSocialRepository redeSocialRepository){
        boolean Github = VerficarURL.isValidUrl(redeSocial.getGithub());
        boolean Instagram = VerficarURL.isValidUrl(redeSocial.getInstagram());
        boolean Linkedin = VerficarURL.isValidUrl(redeSocial.getLinkedin());
        if(!(Github) && !(Instagram) && !(Linkedin)){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }else if (redeSocialRepository.buscarRedesSocial(redeSocial.getGithub(), redeSocial.getInstagram(), redeSocial.getLinkedin(), redeSocial.getWhatsapp()).size() > 0){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(redeSocialRepository.save(redeSocial));
    }

    public static ResponseEntity<DDD> cadastrarDDD(DDD ddd, DDDRepository dddRepository){
        if (dddRepository.buscarDDD(ddd.getDdd()).size()>0){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(dddRepository.save(ddd));
    }

    public static ResponseEntity<Telefone> cadastrarTelefone(Telefone telefone, TelefoneRepository telefoneRepository){
        if (telefoneRepository.buscarNumero(telefone.getTelefone()).size()>0){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(telefoneRepository.save(telefone));
    }
    public static ResponseEntity<List<Formacao>> cadastrarFormacao( List<Formacao> formacao, FormacaoRepository formacaoRepository){
        for (Formacao formacao1 : formacao) {
            if (formacaoRepository.buscarCurso(formacao1.getCurso()).size()>0){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }
        }
        List<Formacao> formacoes = formacaoRepository.saveAll(formacao);
        return ResponseEntity.status(HttpStatus.CREATED).body(formacoes);
    }

    public static ResponseEntity<UsuarioEndereco> cadastroMoradia(UsuarioEndereco usuarioEndereco, UsuarioEnderecoRepository usuarioEnderecoRepository){
        
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioEnderecoRepository.save(usuarioEndereco));
    }

    public static ResponseEntity<UsuarioTelefone> cadastroTelefone(UsuarioTelefone usuarioTelefone, UsuarioTelefoneRepository usuarioTelefoneRepository){
        
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioTelefoneRepository.save(usuarioTelefone));
    }

    public static ResponseEntity<UsuarioRede> cadastroRede(UsuarioRede usuarioRede, UsuarioRedeSocialRepository usuarioRedeSocialRepository){
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRedeSocialRepository.save(usuarioRede));
    }

    public static ResponseEntity <UsuarioFormacao> cadastroFormacao(UsuarioFormacao usuarioFormacao, UsuarioFormacaoRepository usuarioFormacaoRepository){
        
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioFormacaoRepository.save(usuarioFormacaoRepository.save(usuarioFormacao)));
    } 
}
