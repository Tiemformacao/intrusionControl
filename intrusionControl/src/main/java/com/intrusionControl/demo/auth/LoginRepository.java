package com.intrusionControl.demo.auth;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;




public interface LoginRepository extends JpaRepository<Usuario, Long>{

	public Optional<Usuario> findByUsername(String login);
	
}
