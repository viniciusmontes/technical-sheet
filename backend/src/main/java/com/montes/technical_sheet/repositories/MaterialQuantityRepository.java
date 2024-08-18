package com.montes.technical_sheet.repositories;

import com.montes.technical_sheet.entities.MaterialQuantity;
import com.montes.technical_sheet.entities.MaterialQuantityPK;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialQuantityRepository extends JpaRepository<MaterialQuantity, MaterialQuantityPK> {
}
