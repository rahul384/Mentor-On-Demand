package com.assignment.mentoruser;

import org.springframework.data.repository.Repository;

import com.assignment.entity.Technology;
import com.assignment.entity.UserEntity;

import java.util.List;

public interface TechnologyRepository extends Repository<Technology, Integer> {

    void delete(Technology technology);

    List<Technology> findAll();

    Technology findOne(int id);

    Technology save(Technology technology);
}
