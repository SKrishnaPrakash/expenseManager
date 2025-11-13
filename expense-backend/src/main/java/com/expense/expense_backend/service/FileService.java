package com.expense.expense_backend.service;

import java.io.File;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileService {

    public void uploadImage(MultipartFile file) throws Exception {
        String targetDir = "../expense-front/public/public_images/";
        File targetDirFile = new File(targetDir);
        if (!targetDirFile.exists()) {
            targetDirFile.mkdirs();
        }
        File targetFile = new File(targetDir + file.getOriginalFilename());
        file.transferTo(targetFile);
    }
}
