package com.ejabella.q3project.controllers;

import com.ejabella.q3project.domain.Employee;
import com.ejabella.q3project.domain.Endorsement;
import com.ejabella.q3project.repository.EmployeeRepository;
import com.ejabella.q3project.repository.EndorsementRepository;
import com.ejabella.q3project.service.EndorsementDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
public class EndorsementController {

    private final EndorsementRepository endorsementRepository;
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EndorsementController(EndorsementRepository endorsementRepository, EmployeeRepository employeeRepository) {
        this.endorsementRepository = endorsementRepository;
        this.employeeRepository = employeeRepository;
    }

    @CrossOrigin
    @RequestMapping(value = "/endorsement", method = RequestMethod.GET)
    public Iterable<Endorsement> getAllEndorsements() {
        return endorsementRepository.findAll();
    }

    @RequestMapping(value = "/endorsement/{endorsementId}/{employeeId}", method = RequestMethod.PATCH)
    @CrossOrigin
    public Endorsement incrementEndorsement(@PathVariable int endorsementId, @PathVariable int employeeId) {
        Endorsement endorsement = endorsementRepository.findById(endorsementId).orElse(null);
        Employee employee = employeeRepository.findById(employeeId).orElse(null);
        endorsement.setCount(endorsement.getCount() + 1);
        endorsementRepository.save(endorsement);
        employee.setPoints(employee.getPoints()+10);
        employeeRepository.save(employee);
        return endorsement;
    }

    @CrossOrigin
    @RequestMapping(value = "/endorsement", method = RequestMethod.POST)
    public Endorsement createEndorsement(@RequestBody EndorsementDTO endorsementDTO) {
        Endorsement endorsement = new Endorsement();
        endorsement.setCount(1);
        endorsement.setType(endorsementDTO.getEndorsement());
        endorsement.setEmployee(employeeRepository.findById(endorsementDTO.getEmployeeId()).orElse(null));
        endorsementRepository.save(endorsement);
        Employee employee = employeeRepository.findById(endorsementDTO.getEmployeeId()).orElse(null);
        employee.setPoints(employee.getPoints()+20);
        employeeRepository.save(employee);
        return endorsement;
    }
}
