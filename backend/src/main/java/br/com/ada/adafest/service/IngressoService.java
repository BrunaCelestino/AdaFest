package br.com.ada.adafest.service;

import br.com.ada.adafest.model.Ingresso;
import br.com.ada.adafest.model.Usuario;
import br.com.ada.adafest.repository.IngressoRepository;
import br.com.ada.adafest.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class IngressoService {

    @Autowired
    private IngressoRepository ingressoRepository;



    public Ingresso salvar(Ingresso Ingresso) {
        return ingressoRepository.save(Ingresso);
    }

    public List<Ingresso> listar() {
        return (List<Ingresso>) ingressoRepository.findAll();
    }

    public Ingresso buscarPorId(Long id) {
        return ingressoRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    public List<Ingresso> buscarPorUsuarioId(Long usuarioId) {
        Iterable<Ingresso> eventList = ingressoRepository.findAll();
        List<Ingresso> Ingressos = new ArrayList<>();
        eventList.forEach(Ingresso -> {
            if (Ingresso.getUsuario().getId() == usuarioId) {
                Ingressos.add(Ingresso);
            }
        });
        return Ingressos;
    }
}
