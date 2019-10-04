package com.assignment.mentoruser;

import java.util.List;

import com.assignment.entity.Technology;
import com.assignment.entity.UserEntity;

public interface TechnologyService {

	Technology create(Technology technology);

	Technology delete(int id);

    List<Technology> findAll();

    Technology findById(int id);

    Technology update(Technology technology);
}
