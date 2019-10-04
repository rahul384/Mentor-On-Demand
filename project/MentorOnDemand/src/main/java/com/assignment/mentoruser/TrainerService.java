package com.assignment.mentoruser;

import java.util.Date;
import java.util.List;

import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;

public interface TrainerService {

	Training create(Training trainer);

	Training delete(int id);

    List<Training> findAll();

    Training findById(int id);

    Training update(Training trainer);
    
    List<Training> findTrainingByMentorId(Integer mentorId);
    
    List<Training> findTrainingByUserId(Integer userId);
    
    Training findByIdAndMentorId(Integer id, Integer mentorId);
    
    Training findByIdAndUserId(Integer id, Integer userId);
    
    List<Training> findTrainingComplete(int userId);
    
    List<Training> findTrainingCompletes(int mentorId);
    
    List<Training> findTrainingByStartDateBetween(Date startDate, Date endDate);
}
