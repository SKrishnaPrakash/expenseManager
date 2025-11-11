package com.expense.expense_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.expense.expense_backend.model.TransactionCategoryView;
import com.expense.expense_backend.service.TransactionCategoryViewService;

@RestController
@CrossOrigin(origins = "*")
public class TransactionCategoryViewController {
    
    @Autowired
    private TransactionCategoryViewService viewService;
    
    @GetMapping("/transaction-category-views")
    public List<TransactionCategoryView> getAllTransactionCategoryViews() {
        return viewService.getAllTransactionCategoryViews();
    }

    @GetMapping("/transaction-category-views/category/{categoryId}")
    public List<TransactionCategoryView> getTransactionCategoryViewsByCategoryId(@PathVariable Long categoryId) {
        return viewService.getTransactionCategoryViewsByCategoryId(categoryId);
    }

    @GetMapping("/transaction-category-views/type/{categoryType}")
    public List<TransactionCategoryView> getTransactionCategoryViewsByCategoryType(@PathVariable String categoryType) {
        return viewService.getTransactionCategoryViewsByCategoryType(categoryType);
    }
    
}
