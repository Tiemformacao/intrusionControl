package com.intrusionControl.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intrusionControl.demo.DTO.AparelhoDTO;
import com.intrusionControl.demo.services.AparelhoService;

@RestController
@RequestMapping(value = "/aparelho")
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
}
