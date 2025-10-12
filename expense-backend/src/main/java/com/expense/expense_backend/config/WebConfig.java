package com.expense.expense_backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
        registry.addResourceHandler("/images/**")
            .addResourceLocations("file:C:/Users/krishnse/ExpenseManager/expense-front/public/public_images");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173")
            .allowedMethods("*");
    }

}
