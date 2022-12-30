package br.com.ada.adafest.repository;
import br.com.ada.adafest.model.Evento;
import org.springframework.data.repository.CrudRepository;

public interface EventoRepository extends CrudRepository<Evento, Long> {

}