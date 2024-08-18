package com.montes.technical_sheet.dtos;

import java.util.List;

import com.montes.technical_sheet.entities.TechnicalSheet;

public class TechnicalSheetDTO {
    private Long id;
    private List<MaterialQuantityDTO> materials;
    private Double totalCost;

    public TechnicalSheetDTO() {
    }

    public TechnicalSheetDTO(TechnicalSheet technicalSheet) {
        this.id = technicalSheet.getId();
        this.materials = technicalSheet.getMaterialQuantities().stream()
                .map(MaterialQuantityDTO::new)
                .toList();
        this.totalCost = technicalSheet.getTotalCost();
    }

    public Long getId() {
        return id;
    }

    public List<MaterialQuantityDTO> getMaterials() {
        return materials;
    }

    public Double getTotalCost() {
        return totalCost;
    }
}
