package com.intrusionControl.demo.controllers;


import com.intrusionControl.demo.entities.Irmao;
import com.intrusionControl.demo.services.IrmaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/irmaos")
@CrossOrigin(origins = "*")
public class IrmaoController {

    @Autowired
    private IrmaoService irmaoService;

    // Endpoint para listar todos os irmãos
    @GetMapping
    public List<Irmao> findAll() {
        return irmaoService.findAll();
    }

    // Endpoint para buscar um irmão por ID
    @GetMapping("/{id}")
    public Optional<Irmao> findById(@PathVariable Long id) {
        return irmaoService.findById(id);
    }

    // Endpoint para salvar um novo irmão
    @PostMapping
    public Irmao save(@RequestBody Irmao irmao) {
        return irmaoService.save(irmao);
    }

    // Endpoint para atualizar um irmão
    @PutMapping("/{id}")
    public Irmao update(@PathVariable Long id, @RequestBody Irmao irmao) {
        return irmaoService.update(id, irmao);
    }

    // Endpoint para deletar um irmão por ID
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        irmaoService.delete(id);
    }
}
