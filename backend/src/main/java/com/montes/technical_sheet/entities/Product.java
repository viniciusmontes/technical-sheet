package com.montes.technical_sheet.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;

    @OneToOne
    @JoinColumn(name = "technical_sheet_id")
    private TechnicalSheet technicalSheet;

    public Product() {
    }

    public Product(String name, Double price, TechnicalSheet technicalSheet) {
        this.name = name;
        this.price = price;
        this.technicalSheet = technicalSheet;
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

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public TechnicalSheet getTechnicalSheet() {
        return technicalSheet;
    }

    public void setTechnicalSheet(TechnicalSheet technicalSheet) {
        this.technicalSheet = technicalSheet;
    }
}
