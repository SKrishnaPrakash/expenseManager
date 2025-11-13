package com.expense.expense_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense.expense_backend.dto.TransactionRequest;
import com.expense.expense_backend.dto.TransactionResponse;
import com.expense.expense_backend.mapper.TransactionMapper;
import com.expense.expense_backend.model.Transaction;
import com.expense.expense_backend.repo.TransactionRepo;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepo transactionRepo;
    @Autowired
    private TransactionMapper transactionMapper;

    public List<TransactionResponse> getTransaction(){
        List<Transaction> transactions = transactionRepo.findAll();
        return transactions.stream().map(t -> {
            return transactionMapper.toResponse(t);
        }).toList();
    }

    public TransactionResponse getTransaction(String transactionId){
        Transaction transaction = transactionRepo.getByTransactionId(transactionId);
        return transactionMapper.toResponse(transaction);
    }

    public TransactionResponse addTransaction(TransactionRequest transaction){
        Transaction entity = transactionMapper.toEntity(transaction);
        Transaction savedTransaction = transactionRepo.save(entity);
        return transactionMapper.toResponse(savedTransaction);
    }

    public List<TransactionResponse> getTransactionsByCategoryId(String categoryId){
        List<Transaction> transactions = transactionRepo.findByTransactionCategory_CategoryId(categoryId);
        return transactions.stream().map(t -> {
            return transactionMapper.toResponse(t);
        }).toList();
    }
    
}
