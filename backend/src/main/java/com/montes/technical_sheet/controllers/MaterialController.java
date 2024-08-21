package com.montes.technical_sheet.controllers;

import com.montes.technical_sheet.dtos.MaterialDTO;
import com.montes.technical_sheet.services.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/materials")
public class MaterialController {

    @Autowired
    private MaterialService materialService;

    @GetMapping
    public ResponseEntity<List<MaterialDTO>> getAllMaterials() {
        List<MaterialDTO> materials = materialService.findAll();
        return ResponseEntity.ok(materials);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MaterialDTO> findById(@PathVariable Long id) {
        Optional<MaterialDTO> materialDTO = materialService.findById(id);
        return materialDTO.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<MaterialDTO> create(@RequestBody MaterialDTO materialDTO) {
        MaterialDTO saveMaterialDTO = materialService.save(materialDTO);
        return ResponseEntity.ok(saveMaterialDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MaterialDTO> update(@PathVariable Long id, @RequestBody MaterialDTO materialDTO) {
        if (!materialService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        MaterialDTO updatedMaterial = materialService.save(materialDTO);
        return ResponseEntity.ok(updatedMaterial);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        if (!materialService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        materialService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
