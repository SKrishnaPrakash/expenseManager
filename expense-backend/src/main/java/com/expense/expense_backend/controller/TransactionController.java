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

import com.expense.expense_backend.dto.TransactionRequest;
import com.expense.expense_backend.dto.TransactionResponse;
import com.expense.expense_backend.service.TransactionService;

@RestController
@CrossOrigin(origins = "*")
public class TransactionController {
    
    @Autowired
    private TransactionService transactionService;

    @GetMapping("/transactions")
    public List<TransactionResponse> getTransactions(){
        return transactionService.getTransaction();
    }

    @GetMapping("/transaction/{transactionId}")
    public TransactionResponse getTransactions(@PathVariable String transactionId){
        return transactionService.getTransaction(transactionId);
    }

    @PostMapping("/transaction")
    public ResponseEntity<TransactionResponse> addTransaction(@RequestBody TransactionRequest transaction){
        TransactionResponse savedTransaction = transactionService.addTransaction(transaction);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTransaction);
    }

    @PostMapping("/transactions/category/{categoryId}")
    public List<TransactionResponse> getTransactionsByCategory(@PathVariable String categoryId){
        return transactionService.getTransactionsByCategoryId(categoryId);
    }
}
