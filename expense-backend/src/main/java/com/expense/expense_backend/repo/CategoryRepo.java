package com.expense.expense_backend.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expense.expense_backend.model.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, String>{
    public Category findByCategoryId(String categoryId);
}
