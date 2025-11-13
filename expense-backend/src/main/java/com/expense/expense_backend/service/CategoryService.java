package com.expense.expense_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.expense.expense_backend.model.Category;
import com.expense.expense_backend.repo.CategoryRepo;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepo categoryRepo;

    public List<Category> getAllCategory() {
        return categoryRepo.findAll();
    }

    public Category addCategory(Category category){
        return categoryRepo.save(category);
    }
}
