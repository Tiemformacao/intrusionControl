package com.intrusionControl.demo.services;

import com.intrusionControl.demo.entities.Irmao;
import com.intrusionControl.demo.repositories.IrmaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IrmaoService {

	@Autowired
    private IrmaoRepository irmaoRepository;

    // Método para listar todos os irmãos
    public List<Irmao> findAll() {
        return irmaoRepository.findAll();
    }

    // Método para buscar um irmão por ID
    public Optional<Irmao> findById(Long id) {
        return irmaoRepository.findById(id);
    }

    // Método para salvar um novo irmão
    public Irmao save(Irmao irmao) {
        return irmaoRepository.save(irmao);
    }

    /// Método para atualizar um irmão
    public Irmao update(Long id, Irmao irmao) {
        Optional<Irmao> existingIrmao = irmaoRepository.findById(id);
        if (existingIrmao.isPresent()) {
            Irmao updatedIrmao = existingIrmao.get();
            updatedIrmao.setNomeIrmao(irmao.getNomeIrmao());
            return irmaoRepository.save(updatedIrmao);
        } else {
            throw new RuntimeException("Irmão não encontrado com o ID: " + id);
        }
    }
    // Método para deletar um irmão por ID
    public void delete(Long id) {
        irmaoRepository.deleteById(id);
    }


}
