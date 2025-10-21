package com.expense.expense_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense.expense_backend.dto.TransactionRequest;
import com.expense.expense_backend.mapper.TransactionMapper;
import com.expense.expense_backend.model.Transaction;
import com.expense.expense_backend.repo.TransactionRepo;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepo transactionRepo;
    @Autowired
    private TransactionMapper transactionMapper;

    public List<Transaction> getTransaction(){
        
        return transactionRepo.findAll();
    }

    public Transaction getTransaction(String transactionId){
        return transactionRepo.getByTransactionId(transactionId);
    }

    public Transaction addTransaction(TransactionRequest transaction){
        Transaction entity = this.transactionMapper.toEntity(transaction);
        return transactionRepo.save(entity);
    }
    
}
