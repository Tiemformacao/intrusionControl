package com.intrusionControl.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intrusionControl.demo.entities.Usuario;
import com.intrusionControl.demo.services.UsuarioService;

@RestController
@RequestMapping("api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	//Endpoint para autenticar um usuário

	@PostMapping("/login")
	public ResponseEntity<?> autenticarUsuario(@RequestBody Usuario usuario) {
	    return usuarioService.findByLogin(usuario.getLogin())
	        .map(user -> {
	            if (user.getSenha().equals(usuario.getSenha())) {
	                return ResponseEntity.ok(user);
	            } else {
	                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Senha incorreta");
	            }
	        })
	        .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado"));
	}

	
	// Endpoint para salvar um novo usuário (apenas para admin adicionar manualmente)
	@PostMapping
	public ResponseEntity<Usuario> salvarUsuario(@RequestBody Usuario usuario) {
		Usuario novoUsuario = usuarioService.saveUsuario(usuario);
		return ResponseEntity.status(HttpStatus.CREATED).body(novoUsuario);	
	}
	
	
	// Endpoint para obter os dados de um usuário específico
	@GetMapping("/{login}")
	public ResponseEntity<Usuario> obterUsuarioPorLogin(@PathVariable String login) {
	    return usuarioService.findByLogin(login)
	            .map(user -> ResponseEntity.ok(user))
	            .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}

	
	
}
