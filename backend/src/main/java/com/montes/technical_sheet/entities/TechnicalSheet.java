package com.montes.technical_sheet.entities;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_technical_sheet")
public class TechnicalSheet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "id.technicalSheet", cascade = CascadeType.ALL)
    private Set<MaterialQuantity> materialQuantities = new HashSet<>();

    public TechnicalSheet() {
    }

    public TechnicalSheet(Set<MaterialQuantity> materialQuantities) {
        this.materialQuantities = materialQuantities;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<MaterialQuantity> getMaterialQuantities() {
        return materialQuantities;
    }

    public void setMaterialQuantities(Set<MaterialQuantity> materialQuantities) {
        this.materialQuantities = materialQuantities;
    }

    public Double getTotalCost() {
        return materialQuantities.stream()
                .mapToDouble(MaterialQuantity::getTotalCost)
                .sum();
    }
}
