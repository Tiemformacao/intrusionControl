package com.intrusionControl.demo.controllers;


import com.intrusionControl.demo.entities.Grupo;
import com.intrusionControl.demo.services.GrupoService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;


@RestController
@RequestMapping("/api/grupos")
@CrossOrigin(origins = "*")
public class GrupoController {

    @Autowired
    private GrupoService grupoService;

    // Endpoint para listar todos os grupos
    @GetMapping
    public List<Grupo> findAll() {
        return grupoService.findAll();
    }

    // Endpoint para buscar um grupo por ID
    @GetMapping("/{id}")
    public Optional<Grupo> findById(@PathVariable Long id) {
        return grupoService.findById(id);
    }

    // Endpoint para salvar um novo grupo
    @PostMapping
    public Grupo save(@RequestBody Grupo grupo) {
        return grupoService.save(grupo);
    }

    // Endpoint para atualizar um grupo
    @PutMapping("/{id}")
    public Grupo update(@PathVariable Long id, @RequestBody Grupo grupo) {
        return grupoService.update(id, grupo);
    }

    // Endpoint para deletar um grupo por ID
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        grupoService.delete(id);
    }
    
    
    @PutMapping("/{id}/remover")
    public Grupo marcarComoRemovido(@PathVariable Long id) {
        return grupoService.marcarComoRemovido(id);
    }
    
    
    @GetMapping("/paginado")
    public Page<Grupo> listarGruposPaginados(@RequestParam(defaultValue = "0") int pagina,
                                             @RequestParam(defaultValue = "20") int tamanho) {
        return grupoService.listarGruposPaginados(pagina, tamanho);
    }
    
    
    @GetMapping("/faccao/{faccaoId}")
    public Page<Grupo> buscarPorFaccao(@PathVariable Long faccaoId,
                                       @RequestParam(defaultValue = "0") int pagina,
                                       @RequestParam(defaultValue = "20") int tamanho) {
        return grupoService.buscarPorFaccao(faccaoId, pagina, tamanho);
    }

    @GetMapping("/irmao/{irmaoId}")
    public Page<Grupo> buscarPorIrmao(@PathVariable Long irmaoId,
                                      @RequestParam(defaultValue = "0") int pagina,
                                      @RequestParam(defaultValue = "20") int tamanho) {
        return grupoService.buscarPorIrmao(irmaoId, pagina, tamanho);
    }
    
    
    //Endpoint para buscar grupo por área
    @GetMapping("/buscar-por-area")
    public List<Grupo> buscarPorArea(@RequestParam String area) {
        return grupoService.buscarPorArea(area);
    }


}