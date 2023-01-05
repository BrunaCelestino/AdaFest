package br.com.ada.adafest.controller;

import br.com.ada.adafest.model.Ingresso;
import br.com.ada.adafest.service.IngressoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IngressoController {

    private final IngressoService ingressoService;

    public IngressoController(IngressoService ingressoService) {
        this.ingressoService = ingressoService;
    }

    @PostMapping("/ingressos")
    public Ingresso salvar(@RequestBody Ingresso ingresso) {
        return ingressoService.salvar(ingresso);
    }

    @GetMapping("/ingressos")
    public List<Ingresso> listar() {
        return ingressoService.listar();
    }

    @GetMapping("/ingressos/{id}")
    public Ingresso buscarPorId(@PathVariable Long id) {
        return ingressoService.buscarPorId(id);
    }

    @GetMapping("/ingressos/usuario/{id}")
    public List<Ingresso> buscarPorUsuarioId(@PathVariable Long id) {
        return ingressoService.buscarPorUsuarioId(id);
    }
}
