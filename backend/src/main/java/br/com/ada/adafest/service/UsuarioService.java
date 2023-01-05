package br.com.ada.adafest.service;

import br.com.ada.adafest.model.Usuario;
import br.com.ada.adafest.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Usuario salvar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listar() {
        return (List<Usuario>) usuarioRepository.findAll();
    }
    public Usuario buscarPorId(Long id) {
        return usuarioRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }
    public List<Usuario> buscarPorNome(String nome) {
        Iterable<Usuario> usuarioList = usuarioRepository.findAll();
        List<Usuario> usuarios = new ArrayList<>();
        usuarioList.forEach(usuario -> {
            if (usuario.getNome().toUpperCase().contains(nome.toUpperCase())) {
                usuarios.add(usuario);
            }
        });
        return usuarios;
    }

    public List<Usuario> buscarPorEmail(String email) {
        Iterable<Usuario> usuarioList = usuarioRepository.findAll();
        List<Usuario> usuarios = new ArrayList<>();
        usuarioList.forEach(usuario -> {
            if (usuario.getEmail().equals(email)) {
                usuarios.add(usuario);
            }
        });
        return usuarios;
    }

}
