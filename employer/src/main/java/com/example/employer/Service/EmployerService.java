package com.example.employer.Service;

import com.example.employer.Dto.EmployerRequestTO;
import com.example.employer.Dto.EmployerResponseTO;
import com.example.employer.Entity.Employer;
import com.example.employer.Repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class EmployerService {

    @Autowired
    private EmployerRepository employerRepository;

    public EmployerRequestTO save(@RequestBody EmployerRequestTO employerRequestDTO) {
        Employer checkEmployer = employerRepository.findByEmail(employerRequestDTO.email());
        if (checkEmployer != null) {
            throw new RuntimeException("Employer already exists");
        }
        Employer employer = new Employer(employerRequestDTO);
        employerRepository.save(employer);
        return employerRequestDTO;
    }
    public List<EmployerResponseTO> listAllEmployers(){
        return employerRepository.findAll().stream().map(EmployerResponseTO::new).toList();
    }
    public EmployerRequestTO updateEmployer(@PathVariable Long id , @RequestBody EmployerRequestTO employerRequestDTO){
        Employer employerResponseTO = employerRepository.findById(id).orElseThrow(() -> new RuntimeException("Employer not found"));
        employerResponseTO.setFirstName(employerRequestDTO.firstName());
        employerResponseTO.setEmail(employerRequestDTO.email());
        employerResponseTO.setPhone(employerRequestDTO.phone());
        employerRepository.save(employerResponseTO);
        return employerRequestDTO;
    }
    public Void deleteEmployer(Long id){
        employerRepository.deleteById(id);
        return null;
    }
}
