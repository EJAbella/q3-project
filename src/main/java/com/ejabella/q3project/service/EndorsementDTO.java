package com.ejabella.q3project.service;

import org.springframework.stereotype.Service;

@Service
public class EndorsementDTO {

    private int employeeId;
    private String endorsement;

    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public String getEndorsement() {
        return endorsement;
    }

    public void setEndorsement(String endorsement) {
        this.endorsement = endorsement;
    }
}
