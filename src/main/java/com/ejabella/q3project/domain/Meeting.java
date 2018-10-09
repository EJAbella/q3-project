package com.ejabella.q3project.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Meeting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    private String about;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    private String imgUrl;

    @OneToOne
    @JoinColumn(name = "presenter_id")
    private Employee presenter;

    @ManyToMany
    @JoinTable(name = "attendees",
            joinColumns = { @JoinColumn(name = "meeting_id") },
            inverseJoinColumns = { @JoinColumn(name = "employee_id") })
    @JsonManagedReference
    private List<Employee> attendees = new ArrayList<>();

    public Meeting() {
    }

    public List<Employee> getAttendees() {
        return attendees;
    }

    public void setAttendees(List<Employee> attendees) {
        this.attendees = attendees;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public Employee getPresenter() {
        return presenter;
    }

    public void setPresenter(Employee presenter) {
        this.presenter = presenter;
    }

    @Override
    public String toString() {
        return "Meeting{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", about='" + about + '\'' +
                ", presenter=" + presenter +
                '}';
    }
}
