package br.com.ada.adaflix.service;

import br.com.ada.adaflix.model.Evento;
import br.com.ada.adaflix.model.Usuario;
import br.com.ada.adaflix.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioService {

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


}
