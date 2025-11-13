package com.expense.expense_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.expense.expense_backend.service.FileService;

@RestController
@CrossOrigin(origins = "*")
public class FileController {
    
    @Autowired
    FileService fileService;
    
    @PostMapping("/upload-image")
    public ResponseEntity<String> uploadImage (@RequestParam("file") MultipartFile file){
        try{
            fileService.uploadImage(file);
            return ResponseEntity.ok("File uploaded successfully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("File upload failed: " + e.getMessage());
        }
    }
}
