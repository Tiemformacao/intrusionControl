package com.intrusionControl.demo.repositories;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.intrusionControl.demo.entities.Grupo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface GrupoRepository extends JpaRepository <Grupo, Long> {

	// Exemplo de método personalizado para buscar grupos por facção
	Page<Grupo> findByFaccaoId(Long faccaoId, Pageable pageable);
    
    // Exemplo de método personalizado para buscar grupos por irmão
	Page<Grupo> findByIrmaoId(Long irmaoId, Pageable pageable);

    @Query("SELECT g FROM Grupo g ORDER BY g.removido ASC, g.dataCriacao DESC")
    List<Grupo> findAllOrderedByCreationDate();
    
    //Buscar grupo por área
    List<Grupo> findByAreaContainingIgnoreCase(String area);
    
    //Buscar grupo por nome do grupo
    List<Grupo> findByNomeGrupoContainingIgnoreCase(String nomeGrupo);
}
