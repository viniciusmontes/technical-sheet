package com.montes.technical_sheet.repositories;

import com.montes.technical_sheet.entities.TechnicalSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechnicalSheetRepository extends JpaRepository<TechnicalSheet, Long> {
}
