package com.intrusionControl.demo.services;

import com.intrusionControl.demo.entities.Faccao;
import com.intrusionControl.demo.repositories.FaccaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FaccaoService {

    @Autowired
    private FaccaoRepository faccaoRepository;

    // Método para listar todas as facções
    public List<Faccao> findAll() {
        return faccaoRepository.findAll();
    }

    // Método para buscar uma facção por ID
    public Optional<Faccao> findById(Long id) {
        return faccaoRepository.findById(id);
    }

    // Método para salvar uma nova facção
    public Faccao save(Faccao faccao) {
        return faccaoRepository.save(faccao);
    }

 // Método para atualizar uma facção
    public Faccao update(Long id, Faccao faccao) {
        Optional<Faccao> existingFaccao = faccaoRepository.findById(id);
        if (existingFaccao.isPresent()) {
            Faccao updatedFaccao = existingFaccao.get();
            updatedFaccao.setNome(faccao.getNome());
            return faccaoRepository.save(updatedFaccao);
        } else {
            throw new RuntimeException("Facção não encontrada com o ID: " + id);
        }
    }
    // Método para deletar uma facção por ID
    public void delete(Long id) {
        faccaoRepository.deleteById(id);
    }
    
}