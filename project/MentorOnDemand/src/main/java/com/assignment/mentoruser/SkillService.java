package com.assignment.mentoruser;

import java.util.List;

import com.assignment.entity.Skill;
import com.assignment.entity.UserEntity;

public interface SkillService {

	Skill create(Skill skills);

	Skill delete(int id);

    List<Skill> findAll();

    Skill findById(int id);

    Skill update(Skill skills);
}
