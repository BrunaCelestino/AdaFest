package br.com.ada.adafest.controller;

import br.com.ada.adafest.model.Usuario;
import br.com.ada.adafest.service.UsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
    public class UsuarioController {

        private final UsuarioService usuarioService;

        public UsuarioController(UsuarioService usuarioService) {
            this.usuarioService = usuarioService;
        }

        @PostMapping("/usuarios")
        public Usuario salvar(@RequestBody Usuario usuario) {
            return usuarioService.salvar(usuario);
        }

        @GetMapping("/usuarios")
        public List<Usuario> listar() {
            return usuarioService.listar();
        }

    @GetMapping("/usuarios/{id}")
    public Usuario buscarPorId(@PathVariable Long id) {
        return usuarioService.buscarPorId(id);
    }

    @GetMapping("/usuarios/filtrar")
    public List<Usuario> buscarPorParametros(@RequestParam String nome) {
        return usuarioService.buscarPorNome(nome);
    }

    @GetMapping("/usuarios/usuario")
    public List<Usuario> buscarPorEmail(@RequestParam String email) {
        return usuarioService.buscarPorEmail(email);
    }
    }

