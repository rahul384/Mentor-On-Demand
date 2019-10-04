package com.assignment.mentoruser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.entity.Skill;
import com.assignment.entity.UserEntity;

import java.util.List;

@Service
public class SkillServiceImpl implements SkillService {

    @Autowired
    private SkillRepository skillRepository;

    @Override
    public Skill create(Skill skills) {
        return skillRepository.save(skills);
    }

    @Override
    public Skill delete(int id) {
    	Skill skills = findById(id);
        if(skills != null){
            skillRepository.delete(skills);
        }
        return skills;
    }

    @Override
    public List<Skill> findAll() {
        return skillRepository.findAll();
    }

    @Override
    public Skill findById(int id) {
        return skillRepository.findOne(id);
    }

    @Override
    public Skill update(Skill skills) {
        return skillRepository.save(skills);
    }
}
