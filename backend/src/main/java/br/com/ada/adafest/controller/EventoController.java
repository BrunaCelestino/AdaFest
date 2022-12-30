package br.com.ada.adafest.controller;

import br.com.ada.adafest.model.Evento;
import br.com.ada.adafest.service.EventoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventoController {

    private final EventoService eventoService;

    public EventoController(EventoService eventoService) {
        this.eventoService = eventoService;
    }

    @PostMapping("/eventos")
    public Evento salvar(@RequestBody Evento evento) {
        return eventoService.salvar(evento);
    }

    @GetMapping("/eventos")
    public List<Evento> listar() {
        return eventoService.listar();
    }

    @GetMapping("/eventos/{id}")
    public Evento buscarPorId(@PathVariable Long id) {
        return eventoService.buscarPorId(id);
    }

    @GetMapping("/eventos/filtrar")
    public List<Evento> buscarPorParametros(@RequestParam String nome) {
        return eventoService.buscarPorNome(nome);
    }
}
