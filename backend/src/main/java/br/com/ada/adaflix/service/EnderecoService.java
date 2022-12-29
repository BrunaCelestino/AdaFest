package br.com.ada.adaflix.service;

import br.com.ada.adaflix.model.Empresa;
import br.com.ada.adaflix.model.Endereco;
import br.com.ada.adaflix.repository.EnderecoRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EnderecoService {
    private final EnderecoRepository enderecoRepository;

    public EnderecoService(EnderecoRepository enderecoRepository) {
        this.enderecoRepository = enderecoRepository;
    }

    public Endereco salvar(Endereco endereco) {
        return enderecoRepository.save(endereco);
    }

    public List<Endereco> listar() {
        return (List<Endereco>) enderecoRepository.findAll();
    }

    public Endereco buscarPorId(Long id) {
        return enderecoRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    public List<Endereco> buscarPorCEP(String cep) {
        Iterable<Endereco> enderecoList = enderecoRepository.findAll();
        List<Endereco> enderecos = new ArrayList<>();
        enderecoList.forEach(endereco -> {
            if (endereco.getCep().toUpperCase().contains(cep.toUpperCase())) {
                enderecos.add(endereco);
            }
        });
        return enderecos;
    }
}
