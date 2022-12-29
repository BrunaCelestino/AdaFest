package br.com.ada.adaflix.service;

import br.com.ada.adaflix.model.Evento;
import br.com.ada.adaflix.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

//    public EventoService(EventoRepository eventoRepository) {
//        this.eventoRepository = eventoRepository;
//    }

    public Evento salvar(Evento evento) {
        return eventoRepository.save(evento);
    }

    public List<Evento> listar() {
        return (List<Evento>) eventoRepository.findAll();
    }

    public Evento buscarPorId(Long id) {
        return eventoRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    public List<Evento> buscarPorNome(String nome) {
        Iterable<Evento> eventList = eventoRepository.findAll();
        List<Evento> eventos = new ArrayList<>();
        eventList.forEach(evento -> {
            if (evento.getNome().toUpperCase().contains(nome.toUpperCase())) {
                eventos.add(evento);
            }
        });
        return eventos;
    }
}
