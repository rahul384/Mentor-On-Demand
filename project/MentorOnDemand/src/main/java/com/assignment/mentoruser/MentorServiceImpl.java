package com.assignment.mentoruser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.entity.Mentor;
import com.assignment.entity.UserEntity;

import java.util.List;

@Service
public class MentorServiceImpl implements MentorService {

    @Autowired
    private MentorRepository userRepository;

    @Override
    public Mentor create(Mentor mentor) {
        return userRepository.save(mentor);
    }

    @Override
    public Mentor delete(int id) {
    	Mentor mentor = findById(id);
        if(mentor != null){
            userRepository.delete(mentor);
        }
        return mentor;
    }

    @Override
    public List<Mentor> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Mentor findById(int id) {
        return userRepository.findOne(id);
    }

    @Override
    public Mentor update(Mentor mentor) {
        return userRepository.save(mentor);
    }
    
    
    @Override
    public Mentor findMentor(String userName, String password) {
        return userRepository.findMentor(userName,password);
    }
}
