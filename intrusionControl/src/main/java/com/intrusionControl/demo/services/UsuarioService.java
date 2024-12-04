//package com.intrusionControl.demo.services;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.intrusionControl.demo.entities.Usuario;
//import com.intrusionControl.demo.repositories.UsuarioRepository;
//
//@Service
//public class UsuarioService {
//	
//	@Autowired
//	private UsuarioRepository usuarioRepository;
//	
//	// Método para encontrar usuário por login
//	public Optional<Usuario> findByLogin(Usuario login) {
//		return Optional.ofNullable(usuarioRepository.findByLogin(login));
//	}
//	
//	// Método para salvar um novo usuário (usado para definir manualmente no banco)
//    public Usuario saveUsuario(Usuario usuario) {
//        return usuarioRepository.save(usuario);
//    }
//
//}
////