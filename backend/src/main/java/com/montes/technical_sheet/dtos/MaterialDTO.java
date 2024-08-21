package com.montes.technical_sheet.dtos;

import java.util.Set;

import com.montes.technical_sheet.entities.Material;

public class MaterialDTO {

    private Long id;
    private String name;
    private String unitMeasurement;
    private Double cost;

    public MaterialDTO() {
    }

    private Set<MaterialQuantityDTO> materialQuantities;

    public MaterialDTO(Material entity) {
        id = entity.getId();
        name = entity.getName();
        unitMeasurement = entity.getUnitMeasurement();
        cost = entity.getCost();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUnitMeasurement() {
        return unitMeasurement;
    }

    public Double getCost() {
        return cost;
    }

    public Set<MaterialQuantityDTO> getMaterialQuantities() {
        return materialQuantities;
    }

}
