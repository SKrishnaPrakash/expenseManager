package com.expense.expense_backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expense.expense_backend.model.TransactionCategoryView;

public interface TransactionCategoryViewRepo extends JpaRepository<TransactionCategoryView, String> {
    public List<TransactionCategoryView> findByCategoryId(String categoryId);
    public List<TransactionCategoryView> findByCategoryType(String categoryType);
}
