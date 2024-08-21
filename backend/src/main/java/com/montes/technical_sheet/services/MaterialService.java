package com.montes.technical_sheet.services;

import com.montes.technical_sheet.dtos.MaterialDTO;
import com.montes.technical_sheet.entities.Material;
import com.montes.technical_sheet.repositories.MaterialRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaterialService {

    @Autowired
    private MaterialRepository materialRepository;

    @Transactional
    public List<MaterialDTO> findAll() {
        List<Material> materials = materialRepository.findAll();
        return materials.stream().map(x -> new MaterialDTO(x)).toList();
    }

    public Optional<MaterialDTO> findById(Long id) {
        Optional<Material> material = materialRepository.findById(id);
        return material.map(x -> new MaterialDTO(material.get()));
    }

    @Transactional
    public MaterialDTO save(MaterialDTO materialDTO) {
        Material material = new Material();
        material.setName(materialDTO.getName());
        material.setUnitMeasurement(materialDTO.getUnitMeasurement());
        material.setCost(materialDTO.getCost());

        material = materialRepository.save(material);

        return new MaterialDTO(material);
    }

    public void deleteById(Long id) {
        materialRepository.deleteById(id);
    }

}
