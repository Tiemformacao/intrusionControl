package com.intrusionControl.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intrusionControl.demo.DTO.AparelhoDTO;
import com.intrusionControl.demo.services.AparelhoService;

@RestController
@RequestMapping(value = "/aparelho")
@CrossOrigin(origins = "*")
public class AparelhoController {
	
	@Autowired
	private AparelhoService aparelhoService;
	
	//Retornar todos os dados;
	@GetMapping
	public List<AparelhoDTO> findAll() {
		List<AparelhoDTO> result = aparelhoService.findAll();
		return result;
	}
	
	//Retornar por id;
	@GetMapping(value = "/{id}")
	public AparelhoDTO findById(@PathVariable String id) {
		AparelhoDTO result = aparelhoService.findById(id);
		return result;
	}
	
	// Inserir novo Aparelho (POST)
    @PostMapping
    public ResponseEntity<AparelhoDTO> create(@RequestBody AparelhoDTO dto) {
        AparelhoDTO createdAparelho = aparelhoService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAparelho); // Return 201 Created with the new Aparelho
    }

	
	// Atualizar Aparelho (PUT)
    @PutMapping(value = "/{id}")
    public ResponseEntity<AparelhoDTO> update(@PathVariable String id, @RequestBody AparelhoDTO dto) {
        AparelhoDTO updatedAparelho = aparelhoService.update(id, dto);
        return ResponseEntity.ok().body(updatedAparelho); // Retorna 200 OK com o Aparelho atualizado
    }

    // Deletar Aparelho (DELETE)
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        aparelhoService.delete(id);
        return ResponseEntity.noContent().build(); // Retorna 204 No Content após deletar
    }
}
