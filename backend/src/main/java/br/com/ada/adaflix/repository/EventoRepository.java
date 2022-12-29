package br.com.ada.adaflix.repository;
import br.com.ada.adaflix.model.Evento;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EventoRepository extends CrudRepository<Evento, Long> {

}