package com.example.employer.Entity;

import com.example.employer.Dto.EmployerRequestTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Table(name = "employer")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Employer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "first_Name")
    private String firstName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    public Employer(EmployerRequestTO employerRequestTO) {
        this.firstName = employerRequestTO.firstName();
        this.email = employerRequestTO.email();
        this.phone = employerRequestTO.phone();
    }
}
