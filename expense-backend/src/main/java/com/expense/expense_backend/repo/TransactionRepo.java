package com.expense.expense_backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expense.expense_backend.model.Transaction;

@Repository
public interface TransactionRepo extends JpaRepository<Transaction, String>{
    public Transaction getByTransactionId(String transactionId);
}
