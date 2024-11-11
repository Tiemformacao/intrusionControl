package com.intrusionControl.demo.controllers;

import com.intrusionControl.demo.entities.Faccao;
import com.intrusionControl.demo.services.FaccaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/faccoes")
@CrossOrigin(origins = "*")
public class FaccaoController {

    @Autowired
    private FaccaoService faccaoService;

    // Endpoint para listar todas as facções
    @GetMapping
    public List<Faccao> findAll() {
        return faccaoService.findAll();
    }

    // Endpoint para buscar uma facção por ID
    @GetMapping("/{id}")
    public Optional<Faccao> findById(@PathVariable Long id) {
        return faccaoService.findById(id);
    }

    // Endpoint para salvar uma nova facção
    @PostMapping
    public Faccao save(@RequestBody Faccao faccao) {
        return faccaoService.save(faccao);
    }

    // Endpoint para atualizar uma facção
    @PutMapping("/{id}")
    public Faccao update(@PathVariable Long id, @RequestBody Faccao faccao) {
        return faccaoService.update(id, faccao);
    }

    // Endpoint para deletar uma facção por ID
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        faccaoService.delete(id);
    }
}