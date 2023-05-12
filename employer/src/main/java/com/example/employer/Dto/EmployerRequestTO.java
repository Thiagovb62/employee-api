package com.example.employer.Dto;

import com.example.employer.Entity.Employer;
public record EmployerRequestTO(
        String firstName,
        String email,
        String phone) {
}
