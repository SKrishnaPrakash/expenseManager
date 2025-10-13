package com.expense.expense_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

@Service
public class MasterService {
    
    @Autowired
    private EntityManager entityManager;

    public Object getMasterData(String tableName, String showColumn, String keyColumn, String keyValue) {
        String sql = String.format("SELECT %s, %s FROM %s WHERE %s = :keyValue", showColumn, keyColumn, tableName, keyColumn);
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("keyValue", keyValue);

        try {
            Object result = query.getSingleResult();
            return result;
        } catch (Exception e) {
            return null;
        }
    } 
}
