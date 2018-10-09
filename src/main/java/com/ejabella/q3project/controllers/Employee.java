package com.ejabella.q3project.controllers;

import com.ejabella.q3project.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class Employee {


    private final EmployeeRepository employeeRepository;

    @Autowired
    public Employee(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @RequestMapping(value = "/employee", method = RequestMethod.GET)
    @CrossOrigin
    public Iterable<com.ejabella.q3project.domain.Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @RequestMapping(value = "/employee/{id}", method = RequestMethod.GET)
    @CrossOrigin
    public Optional<com.ejabella.q3project.domain.Employee> getEmployee(@PathVariable int id) {
        return employeeRepository.findById(id);
    }

}
