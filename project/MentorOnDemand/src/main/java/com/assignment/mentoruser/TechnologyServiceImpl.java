package com.assignment.mentoruser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.entity.Technology;
import com.assignment.entity.UserEntity;

import java.util.List;

@Service
public class TechnologyServiceImpl implements TechnologyService {

    @Autowired
    private TechnologyRepository technologyRepository;

    @Override
    public Technology create(Technology technology) {
        return technologyRepository.save(technology);
    }

    @Override
    public Technology delete(int id) {
    	Technology technology = findById(id);
        if(technology != null){
            technologyRepository.delete(technology);
        }
        return technology;
    }

    @Override
    public List<Technology> findAll() {
        return technologyRepository.findAll();
    }

    @Override
    public Technology findById(int id) {
        return technologyRepository.findOne(id);
    }

    @Override
    public Technology update(Technology technology) {
        return technologyRepository.save(technology);
    }
}
