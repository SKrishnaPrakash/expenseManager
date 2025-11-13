package com.expense.expense_backend.mapper;

import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import com.expense.expense_backend.dto.TransactionRequest;
import com.expense.expense_backend.dto.TransactionResponse;
import com.expense.expense_backend.model.Transaction;
import com.expense.expense_backend.repo.CategoryRepo;

@Mapper(componentModel = "spring")
public abstract class TransactionMapper {

    @Autowired
    protected CategoryRepo categoryRepo;

    @Mapping(target = "transactionId", ignore = true)
    @Mapping(target = "transactionCategory", ignore = true)
    public abstract Transaction toEntity(TransactionRequest transactionRequest);

    @AfterMapping
    protected void setCategory(TransactionRequest transactionRequest, @MappingTarget Transaction transaction) {
        // if request provided a category id, fetch and set the Category entity
        if (transactionRequest == null) return;
        String catId = transactionRequest.getTransactionCategory();
        if (catId == null) return;
        transaction.setTransactionCategory(categoryRepo.findById(catId).orElse(null));
    }

    @Mapping(target = "transactionCategory", source = "transactionCategory.categoryId")
    public abstract TransactionResponse toResponse(Transaction transaction);
}
