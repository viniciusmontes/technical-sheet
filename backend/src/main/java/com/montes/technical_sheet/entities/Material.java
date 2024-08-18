package com.montes.technical_sheet.entities;

import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_material")
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String unitMeasurement;
    private Double cost;

    public Material() {
    }

    @OneToMany(mappedBy = "material", cascade = CascadeType.ALL)
    private Set<MaterialQuantity> materialQuantities;

    public Material(Long id, String name, String unitMeasurement, Double cost) {
        this.id = id;
        this.name = name;
        this.unitMeasurement = unitMeasurement;
        this.cost = cost;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUnitMeasurement() {
        return unitMeasurement;
    }

    public void setUnitMeasurement(String unitMeasurement) {
        this.unitMeasurement = unitMeasurement;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public Set<MaterialQuantity> getMaterialQuantities() {
        return materialQuantities;
    }

    public List<TechnicalSheet> getTechnicalSheet() {
        return materialQuantities.stream().map(x -> x.getTechnicalSheet()).toList();
    }

}
