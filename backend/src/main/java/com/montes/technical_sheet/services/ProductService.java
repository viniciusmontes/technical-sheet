package com.montes.technical_sheet.services;

import com.montes.technical_sheet.dtos.ProductDTO;
import com.montes.technical_sheet.entities.Product;
import com.montes.technical_sheet.repositories.ProductRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Transactional
    public List<ProductDTO> findAll() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(x -> new ProductDTO(x)).toList();
    }

    public Optional<ProductDTO> findById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.map(x -> new ProductDTO(product.get()));
    }

    @Transactional
    public ProductDTO save(ProductDTO productDTO) {
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setPrice(productDTO.getPrice());
        product = productRepository.save(product);
        return new ProductDTO(product);
    }

    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }

}
