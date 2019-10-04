package com.assignment.mentoruser;

import java.util.List;

import com.assignment.entity.Mentor;
import com.assignment.entity.UserEntity;

public interface MentorService {

	Mentor create(Mentor mentor);

	Mentor delete(int id);

    List<Mentor> findAll();

    Mentor findById(int id);

    Mentor update(Mentor mentor);
    
    Mentor findMentor(String userName, String password);
}
