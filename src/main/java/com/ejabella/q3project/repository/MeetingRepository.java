package com.ejabella.q3project.repository;

import com.ejabella.q3project.domain.Meeting;
import org.springframework.data.repository.CrudRepository;

public interface MeetingRepository extends CrudRepository<Meeting, Integer> {
}
