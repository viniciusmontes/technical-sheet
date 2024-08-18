package com.montes.technical_sheet.dtos;

import com.montes.technical_sheet.entities.MaterialQuantity;

public class MaterialQuantityDTO {
    private Long materialId;
    private Double quantity;
    private Double costUsed;

    public MaterialQuantityDTO() {

    }

    public MaterialQuantityDTO(MaterialQuantity materialQuantity) {
        this.materialId = materialQuantity.getMaterial().getId();
        this.quantity = materialQuantity.getQuantity();
        this.costUsed = materialQuantity.getTotalCost();
    }

    public Long getMaterialId() {
        return materialId;
    }

    public Double getQuantity() {
        return quantity;
    }

    public Double getCostUsed() {
        return costUsed;
    }

}
