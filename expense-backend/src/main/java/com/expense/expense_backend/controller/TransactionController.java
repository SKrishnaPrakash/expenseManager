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
import com.expense.expense_backend.model.Transaction;
import com.expense.expense_backend.service.TransactionService;

@RestController
@CrossOrigin(origins = "*")
public class TransactionController {
    
    @Autowired
    private TransactionService transactionService;

    @GetMapping("/transactions")
    public List<TransactionResponse> getTransactions(){
        List<Transaction> transactions = transactionService.getTransaction();
        return transactions.stream().map(t -> {
            TransactionResponse response = new TransactionResponse();
            response.setTransactionId(t.getTransactionId());
            response.setSource(t.getSource());
            response.setAmount(t.getAmount());
            response.setDate(t.getDate());
            response.setTransactionCategory(t.getTransactionCategory() != null ? t.getTransactionCategory().getCategoryId() : null);
            return response;
        }).toList();
    }

    @GetMapping("/transaction/{transactionId}")
    public TransactionResponse getTransactions(@PathVariable String transactionId){
        List<Transaction> transactions = transactionService.getTransaction();
        return transactions.stream().map(t -> {
            TransactionResponse response = new TransactionResponse();
            response.setTransactionId(t.getTransactionId());
            response.setSource(t.getSource());
            response.setAmount(t.getAmount());
            response.setDate(t.getDate());
            response.setTransactionCategory(t.getTransactionCategory() != null ? t.getTransactionCategory().getCategoryId() : null);
            return response;
        }).filter(response -> response.getTransactionId().equals(transactionId)).findFirst().orElse(null);
    }

    @PostMapping("/transaction")
    public ResponseEntity<Transaction> addTransaction(@RequestBody TransactionRequest transaction){
        Transaction savedTransaction = transactionService.addTransaction(transaction);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTransaction);
    }
}
