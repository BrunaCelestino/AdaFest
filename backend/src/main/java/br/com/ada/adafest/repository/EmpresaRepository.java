package br.com.ada.adafest.repository;

import br.com.ada.adafest.model.Empresa;
import org.springframework.data.repository.CrudRepository;

public interface EmpresaRepository extends CrudRepository<Empresa, Long> {
}
