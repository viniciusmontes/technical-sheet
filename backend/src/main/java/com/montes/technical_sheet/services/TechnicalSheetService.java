package com.montes.technical_sheet.services;

import com.montes.technical_sheet.dtos.MaterialQuantityDTO;
import com.montes.technical_sheet.dtos.TechnicalSheetDTO;
import com.montes.technical_sheet.entities.TechnicalSheet;
import com.montes.technical_sheet.repositories.TechnicalSheetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TechnicalSheetService {

    @Autowired
    private TechnicalSheetRepository technicalSheetRepository;

    public List<TechnicalSheetDTO> findAll() {
        List<TechnicalSheet> technicalSheets = technicalSheetRepository.findAll();
        return technicalSheets.stream().map(TechnicalSheetDTO::new).toList();
    }

    public Optional<TechnicalSheetDTO> findById(Long id) {
        Optional<TechnicalSheet> technicalSheet = technicalSheetRepository.findById(id);
        return technicalSheet.map(TechnicalSheetDTO::new);
    }

    public TechnicalSheetDTO save(TechnicalSheetDTO technicalSheetDTO) {
        TechnicalSheet technicalSheet = new TechnicalSheet();
        technicalSheet.getMaterialQuantities().clear();
        for (MaterialQuantityDTO mQ : technicalSheetDTO.getMaterials()) {
            technicalSheetDTO.getMaterials().add(mQ);
        }
        technicalSheet = technicalSheetRepository.save(technicalSheet);
        return new TechnicalSheetDTO(technicalSheet);
    }

    public void deleteById(Long id) {
        technicalSheetRepository.deleteById(id);
    }
}
