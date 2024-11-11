package com.intrusionControl.demo.repositories;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.intrusionControl.demo.entities.Grupo;


public interface GrupoRepository extends JpaRepository <Grupo, Long> {

	// Exemplo de método personalizado para buscar grupos por facção
    List<Grupo> findByFaccaoId(Long faccaoId);
    
    // Exemplo de método personalizado para buscar grupos por irmão
    List<Grupo> findByIrmaoId(Long irmaoId);

}
