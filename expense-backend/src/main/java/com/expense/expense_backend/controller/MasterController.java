package com.expense.expense_backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.expense.expense_backend.service.MasterService;

public class MasterController {

    @Autowired
    private MasterService masterService;
    
    @GetMapping("/validateMaster")
    public Object validateMaster(@RequestBody Map<String, String> masterInputParam){
        Object masterResponse = masterService.getMasterData(masterInputParam.get("tableName"), masterInputParam.get("showColumn"), masterInputParam.get("keyColumn"), masterInputParam.get("keyValue"));
        return masterResponse;
    }

}
