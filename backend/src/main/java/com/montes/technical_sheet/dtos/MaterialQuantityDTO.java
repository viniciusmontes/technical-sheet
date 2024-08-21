package com.montes.technical_sheet.dtos;

import com.montes.technical_sheet.entities.MaterialQuantity;

public class MaterialQuantityDTO {
    private Long materialId;
    private String materialName;
    private Double materialCost;
    private String unitMeasurement;
    private Double quantity;
    private Double costUsed;

    public MaterialQuantityDTO() {

    }

    public MaterialQuantityDTO(MaterialQuantity materialQuantity) {
        this.materialId = materialQuantity.getMaterial().getId();
        this.materialName = materialQuantity.getMaterial().getName();
        this.unitMeasurement = materialQuantity.getMaterial().getUnitMeasurement();
        this.materialCost = materialQuantity.getMaterial().getCost();
        this.quantity = materialQuantity.getQuantity();
        this.costUsed = materialQuantity.getTotalCost();
    }

    public Long getMaterialId() {
        return materialId;
    }

    public String getMaterialName() {
        return materialName;
    }

    public String getUnitMeasurement() {
        return unitMeasurement;
    }

    public Double getMaterialCost() {
        return materialCost;
    }

    public Double getQuantity() {
        return quantity;
    }

    public Double getCostUsed() {
        return costUsed;
    }

}
