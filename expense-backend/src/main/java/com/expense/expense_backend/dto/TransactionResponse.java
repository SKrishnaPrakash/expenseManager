package com.expense.expense_backend.dto;

import java.time.LocalDate;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class TransactionResponse {
    private String transactionId;
    private String source;
    private Double amount;
    private LocalDate date;
    private String transactionCategory;
}
