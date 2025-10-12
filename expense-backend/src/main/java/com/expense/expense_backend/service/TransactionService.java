package com.expense.expense_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense.expense_backend.model.Transaction;
import com.expense.expense_backend.repo.TransactionRepo;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepo transactionRepo;

    public List<Transaction> getTransaction(){
        return transactionRepo.findAll();
    }

    public Transaction getTransaction(String transactionId){
        return transactionRepo.getByTransactionId(transactionId);
    }

    public Transaction addTransaction(Transaction transaction){
        return transactionRepo.save(transaction);
    }
    
}
