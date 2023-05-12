package com.example.employer.Dto;

import com.example.employer.Entity.Employer;

public record EmployerResponseTO(
        Long id,
        String firstName,
        String email,
        String phone) {
    public EmployerResponseTO(Employer employer) {
       this(employer.getId(), employer.getFirstName(), employer.getEmail(), employer.getPhone());
    }

}
