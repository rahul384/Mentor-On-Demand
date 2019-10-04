package com.assignment.mentoruser;

import org.springframework.data.repository.Repository;

import com.assignment.entity.Skill;
import com.assignment.entity.UserEntity;

import java.util.List;

public interface SkillRepository extends Repository<Skill, Integer> {

    void delete(Skill skills);

    List<Skill> findAll();

    Skill findOne(int id);

    Skill save(Skill skills);
}
