package com.montes.technical_sheet.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_material_quantity")
public class MaterialQuantity {

    @EmbeddedId
    private MaterialQuantityPK id = new MaterialQuantityPK();

    @ManyToOne
    @MapsId("material")
    @JoinColumn(name = "material_id")
    private Material material;

    @ManyToOne
    @MapsId("technicalSheet")
    @JoinColumn(name = "technical_sheet_id")
    private TechnicalSheet technicalSheet;

    private Double quantity;

    public MaterialQuantity() {
    }

    public MaterialQuantity(Material material, TechnicalSheet technicalSheet, Double quantity) {
        id.setMaterial(material);
        id.setTechnicalSheet(technicalSheet);
        this.quantity = quantity;
    }

    public MaterialQuantityPK getId() {
        return id;
    }

    public void setId(MaterialQuantityPK id) {
        this.id = id;
    }

    public Material getMaterial() {
        return material;
    }

    public void setMaterial(Material material) {
        this.material = material;
    }

    public TechnicalSheet getTechnicalSheet() {
        return technicalSheet;
    }

    public void setTechnicalSheet(TechnicalSheet technicalSheet) {
        this.technicalSheet = technicalSheet;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public Double getTotalCost() {
        return this.material.getCost() * this.quantity;
    }
}
