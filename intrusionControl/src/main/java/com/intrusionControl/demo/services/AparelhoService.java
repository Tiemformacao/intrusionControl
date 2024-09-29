package com.intrusionControl.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.intrusionControl.demo.DTO.AparelhoDTO;
import com.intrusionControl.demo.entities.Aparelho;
import com.intrusionControl.demo.repositories.AparelhoRepository;

//SERVICE É TODA A LÓGICA DO NEGÓCIO;

@Service
public class AparelhoService {
	
	@Autowired
    private AparelhoRepository aparelhoRepository;
	
	
	//Buscar todos os dados da tabela Aparelho. Vai vir cada aparelho e seus dados/características;
	@Transactional(readOnly = true)
	public List<AparelhoDTO> findAll() {
		List<Aparelho> result = aparelhoRepository.findAll();
		return result.stream().map(x -> new AparelhoDTO(x)).toList();
	}
	
	//Buscar por id;
	//Pode, aqui, fazer tratamento de exceção. Por exemplo para um id que não existe;
	@Transactional(readOnly = true)
	public AparelhoDTO findById(String id) {
        Aparelho result = aparelhoRepository.findById(id).get();
        AparelhoDTO dto = new AparelhoDTO(result);
        return dto;
    }

    public Aparelho save(Aparelho aparelho) {
        return aparelhoRepository.save(aparelho);
    }

    public void deleteById(String id) {
    	aparelhoRepository.deleteById(id);
    }
}
