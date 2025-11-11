package com.expense.expense_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense.expense_backend.model.TransactionCategoryView;
import com.expense.expense_backend.repo.TransactionCategoryViewRepo;

@Service
public class TransactionCategoryViewService {

    @Autowired
    private TransactionCategoryViewRepo viewRepo;

    public List<TransactionCategoryView> getAllTransactionCategoryViews() {
        return viewRepo.findAll();
    }

    public List<TransactionCategoryView> getTransactionCategoryViewsByCategoryId(String categoryId) {
        return viewRepo.findByCategoryId(categoryId);
    }

    public List<TransactionCategoryView> getTransactionCategoryViewsByCategoryType(String categoryType) {
        return viewRepo.findByCategoryType(categoryType);
    }
}
