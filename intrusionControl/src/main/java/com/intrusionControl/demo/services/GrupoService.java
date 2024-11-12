package com.intrusionControl.demo.services;

import com.intrusionControl.demo.entities.Grupo;
import com.intrusionControl.demo.repositories.GrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class GrupoService {

    @Autowired
    private GrupoRepository grupoRepository;

    // Método para salvar um novo grupo
    public Grupo save(Grupo grupo) {
        return grupoRepository.save(grupo);
    }

    // Método para buscar todos os grupos
    public List<Grupo> findAll() {
        return grupoRepository.findAllOrdered();
    }

    // Método para buscar um grupo por ID
    public Optional<Grupo> findById(Long id) {
        return grupoRepository.findById(id);
    }

    // Método para atualizar um grupo
    public Grupo update(Long id, Grupo grupoDetails) {
        Optional<Grupo> optionalGrupo = grupoRepository.findById(id);
        if (optionalGrupo.isPresent()) {
            Grupo grupo = optionalGrupo.get();
            grupo.setNomeGrupo(grupoDetails.getNomeGrupo());
            grupo.setArea(grupoDetails.getArea());
            grupo.setFaccao(grupoDetails.getFaccao());
            grupo.setIrmao(grupoDetails.getIrmao());
            return grupoRepository.save(grupo);
        }
        throw new RuntimeException("Grupo não encontrado com o ID: " + id);
    }

    // Método para deletar um grupo
    public void delete(Long id) {
        grupoRepository.deleteById(id);
    }
 
    
    public Grupo marcarComoRemovido(Long id) {
        Optional<Grupo> optionalGrupo = grupoRepository.findById(id);
        if (optionalGrupo.isPresent()) {
            Grupo grupo = optionalGrupo.get();
            grupo.setRemovido(true);  // Marcar como removido
            return grupoRepository.save(grupo);
        }
        throw new RuntimeException("Grupo não encontrado com o ID: " + id);
    }

}
