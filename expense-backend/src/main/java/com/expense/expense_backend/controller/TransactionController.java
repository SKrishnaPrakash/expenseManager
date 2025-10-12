package com.expense.expense_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.expense.expense_backend.model.Transaction;
import com.expense.expense_backend.service.TransactionService;

@RestController
@CrossOrigin(origins = "*")
public class TransactionController {
    
    @Autowired
    private TransactionService transactionService;

    @GetMapping("/transactions")
    public List<Transaction> getTransactions(){
        return transactionService.getTransaction();
    }

    @GetMapping("/transaction/{transactionId}")
    public Transaction getTransactions(@PathVariable String transactionId){
        return transactionService.getTransaction(transactionId);
    }

    @PostMapping("/transaction")
    public ResponseEntity<Transaction> addTransaction(@RequestBody Transaction transaction){
        Transaction savedTransaction = transactionService.addTransaction(transaction);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTransaction);
    }
}
