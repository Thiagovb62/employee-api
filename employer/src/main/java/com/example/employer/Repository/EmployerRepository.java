package com.example.employer.Repository;

import com.example.employer.Entity.Employer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployerRepository extends JpaRepository<Employer, Long> {

    @Query("SELECT e FROM Employer e WHERE e.email LIKE %:email%")
    Employer findByEmail(String email);
}
