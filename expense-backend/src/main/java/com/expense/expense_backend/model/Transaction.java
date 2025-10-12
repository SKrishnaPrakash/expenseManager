package com.expense.expense_backend.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String transactionId;
    private String transactionCategory;
    private String source;
    private Double amount;
    private LocalDate date;

}
