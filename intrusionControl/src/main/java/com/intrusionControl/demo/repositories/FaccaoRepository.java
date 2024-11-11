package com.intrusionControl.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.intrusionControl.demo.entities.Faccao;

public interface FaccaoRepository extends JpaRepository <Faccao, Long>{
	
	// Você pode adicionar métodos de consulta customizados aqui, se necessário

}
