package com.expense.expense_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String categoryId;
    private String categoryName;
    private String imagePath;
    private String categoryType;
    private boolean deleteFlag = false;
    
}
