package br.com.ada.adafest.service;

import br.com.ada.adafest.model.Empresa;
import br.com.ada.adafest.repository.EmpresaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmpresaService {

    private final EmpresaRepository empresaRepository;

    public EmpresaService(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    public Empresa salvar(Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    public List<Empresa> listar() {
        return (List<Empresa>) empresaRepository.findAll();
    }

    public Empresa buscarPorId(Long id) {
        return empresaRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    public List<Empresa> buscarPorNome(String nome) {
        Iterable<Empresa> empresaList = empresaRepository.findAll();
        List<Empresa> empresas = new ArrayList<>();
        empresaList.forEach(empresa -> {
            if (empresa.getNome().toUpperCase().contains(nome.toUpperCase())) {
                empresas.add(empresa);
            }
        });
        return empresas;
    }

    public List<Empresa> buscarPorEmail(String email) {
        Iterable<Empresa> empresaList = empresaRepository.findAll();
        List<Empresa> empresas = new ArrayList<>();
        empresaList.forEach(empresa -> {
            if (empresa.getEmail().equals(email)) {
                empresas.add(empresa);
            }
        });
        return empresas;
    }
}
