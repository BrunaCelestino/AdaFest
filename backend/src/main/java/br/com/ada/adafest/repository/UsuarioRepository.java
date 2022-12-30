package br.com.ada.adafest.repository;

import br.com.ada.adafest.model.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
}
