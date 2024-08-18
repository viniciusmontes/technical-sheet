package com.montes.technical_sheet.controllers;

import com.montes.technical_sheet.dtos.TechnicalSheetDTO;
import com.montes.technical_sheet.services.TechnicalSheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/technicalSheets")
public class TechnicalSheetController {

    @Autowired
    private TechnicalSheetService technicalSheetService;

    @GetMapping
    public ResponseEntity<List<TechnicalSheetDTO>> findAll() {
        List<TechnicalSheetDTO> technicalSheets = technicalSheetService.findAll();
        return ResponseEntity.ok(technicalSheets);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TechnicalSheetDTO> findById(@PathVariable Long id) {
        Optional<TechnicalSheetDTO> technicalSheetDTO = technicalSheetService.findById(id);
        return technicalSheetDTO.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TechnicalSheetDTO> create(@RequestBody TechnicalSheetDTO technicalSheetDTO) {
        TechnicalSheetDTO savedTechnicalSheet = technicalSheetService.save(technicalSheetDTO);
        return ResponseEntity.ok(savedTechnicalSheet);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TechnicalSheetDTO> update(@PathVariable Long id,
            @RequestBody TechnicalSheetDTO technicalSheetDTO) {
        if (!technicalSheetService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        TechnicalSheetDTO updatedTechnicalSheet = technicalSheetService.save(technicalSheetDTO);
        return ResponseEntity.ok(updatedTechnicalSheet);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        if (!technicalSheetService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        technicalSheetService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
