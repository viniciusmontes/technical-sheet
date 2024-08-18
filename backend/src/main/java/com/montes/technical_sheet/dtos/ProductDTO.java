package com.montes.technical_sheet.dtos;

import com.montes.technical_sheet.entities.Product;

public class ProductDTO {
    private Long id;
    private String name;
    private Double price;
    private TechnicalSheetDTO technicalSheet;

    public ProductDTO() {}

    public ProductDTO(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.price = product.getPrice();
        this.technicalSheet = product.getTechnicalSheet() != null ? new TechnicalSheetDTO(product.getTechnicalSheet())
                : null;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }

    public TechnicalSheetDTO getTechnicalSheet() {
        return technicalSheet;
    }

}
