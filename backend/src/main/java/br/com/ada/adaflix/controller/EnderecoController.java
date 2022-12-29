package br.com.ada.adaflix.controller;

import br.com.ada.adaflix.model.Endereco;
import br.com.ada.adaflix.service.EnderecoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class EnderecoController {
    private final EnderecoService enderecoService;
    public EnderecoController(EnderecoService enderecoService) {
        this.enderecoService = enderecoService;
    }

    @PostMapping("/enderecos")
    public Endereco salvar(@RequestBody Endereco endereco) {
        return enderecoService.salvar(endereco);
    }

    @GetMapping("/enderecos")
    public List<Endereco> listar() {
        return enderecoService.listar();
    }

    @GetMapping("/enderecos/{id}")
    public Endereco buscarPorId(@PathVariable Long id) {
        return enderecoService.buscarPorId(id);
    }

    @GetMapping("/enderecos/filtrar")
    public List<Endereco> buscarPorParametros(@RequestParam String cep) {
        return enderecoService.buscarPorCEP(cep);
    }
}
