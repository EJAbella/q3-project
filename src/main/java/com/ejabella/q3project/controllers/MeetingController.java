package com.ejabella.q3project.controllers;

import com.ejabella.q3project.domain.Employee;
import com.ejabella.q3project.domain.Meeting;
import com.ejabella.q3project.repository.EmployeeRepository;
import com.ejabella.q3project.repository.MeetingRepository;
import com.ejabella.q3project.service.MeetingDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.sql.SQLOutput;
import java.util.List;
import java.util.Optional;

@RestController
public class MeetingController {

    private final MeetingRepository meetingRepository;
    private final EmployeeRepository employeeRepository;


    @Autowired
    public MeetingController(MeetingRepository meetingRepository, EmployeeRepository employeeRepository) {
        this.meetingRepository = meetingRepository;
        this.employeeRepository = employeeRepository;
    }

    @RequestMapping(value = "/meeting", method = RequestMethod.GET)
    @CrossOrigin
    public Iterable<Meeting> getAllMeetings() {
        return meetingRepository.findAll();
    }

    @RequestMapping(value = "/meeting/{id}", method = RequestMethod.GET)
    public Optional<Meeting> getMeeting(@PathVariable int id) {
        return meetingRepository.findById(id);
    }

    @RequestMapping(value = "/meeting", method = RequestMethod.POST)
    @CrossOrigin
    public Meeting createMeeting(@RequestBody MeetingDTO newMeeting) {
        System.out.println(newMeeting.toString());
        Meeting meeting = new Meeting();
        meeting.setTitle(newMeeting.getTitle());
        meeting.setAbout(newMeeting.getAbout());
        meeting.setImgUrl(newMeeting.getImgUrl());
        meeting.setPresenter(employeeRepository.findById(newMeeting.getPresenter()).orElse(null));
        meetingRepository.save(meeting);
        return meeting;
    }

    @CrossOrigin
    @RequestMapping(value = "/meeting/{meetingId}/{employeeId}", method = RequestMethod.PATCH)
    public Employee addAttendee(@PathVariable int meetingId, @PathVariable int employeeId) {
        Meeting meeting = meetingRepository.findById(meetingId).orElse(null);
        List<Employee> attendees = meeting.getAttendees();
        attendees.add(employeeRepository.findById(employeeId).orElse(null));
        meeting.setAttendees(attendees);
        meetingRepository.save(meeting);
        return employeeRepository.findById(employeeId).orElse(null);
    }

    @CrossOrigin
    @RequestMapping(value = "/meeting/{id}", method = RequestMethod.DELETE)
    public int deleteMeeting(@PathVariable int id) {
        Meeting meeting = meetingRepository.findById(id).orElse(null);
        meetingRepository.deleteById(id);
        return id;
    }

    @CrossOrigin
    @RequestMapping(value = "/meeting/{id}", method = RequestMethod.PATCH)
    public Meeting updateMeeting(@PathVariable int id, @RequestBody MeetingDTO updatedMeeting) {
        Meeting meeting = meetingRepository.findById(id).orElse(null);
        meeting.setTitle(updatedMeeting.getTitle());
        meeting.setAbout(updatedMeeting.getAbout());
        meeting.setImgUrl(updatedMeeting.getImgUrl());
        meeting.setPresenter(employeeRepository.findById(updatedMeeting.getPresenter()).orElse(null));
        meetingRepository.save(meeting);
        return meeting;
    }

}
