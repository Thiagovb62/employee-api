package com.example.employer.Controller;

import com.example.employer.Dto.EmployerRequestTO;
import com.example.employer.Dto.EmployerResponseTO;
import com.example.employer.Service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employer")
public class EmployerController {

    @Autowired
    private EmployerService employerService;
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/list")
    public List<EmployerResponseTO> listAllEmployers(){
        return employerService.listAllEmployers();
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/save")
    public EmployerRequestTO save(@RequestBody EmployerRequestTO employerRequestDTO){
        return employerService.save(employerRequestDTO);
    }
}
