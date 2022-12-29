package br.com.ada.adaflix.controller;

import br.com.ada.adaflix.model.Empresa;
import br.com.ada.adaflix.service.EmpresaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmpresaController {

    private final EmpresaService empresaService;

    public EmpresaController(EmpresaService empresaService) {
        this.empresaService = empresaService;
    }

    @PostMapping("/empresas")
    public Empresa salvar(@RequestBody Empresa empresa) {
        return empresaService.salvar(empresa);
    }

    @GetMapping("/empresas")
    public List<Empresa> listar() {
        return empresaService.listar();
    }

    @GetMapping("/empresas/{id}")
    public Empresa buscarPorId(@PathVariable Long id) {
        return empresaService.buscarPorId(id);
    }

    @GetMapping("/empresas/filtrar")
    public List<Empresa> buscarPorParametros(@RequestParam String nome) {
        return empresaService.buscarPorNome(nome);
    }

}
