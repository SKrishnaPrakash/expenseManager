package com.expense.expense_backend.dto;

import java.time.LocalDate;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
public class TransactionRequest {
    private String source;
    private Double amount;
    private LocalDate transactionDate;
    private String transactionCategory;
}
