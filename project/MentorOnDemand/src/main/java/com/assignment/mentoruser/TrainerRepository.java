package com.assignment.mentoruser;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import com.assignment.entity.Training;

import java.util.Date;
import java.util.List;

public interface TrainerRepository extends Repository<Training, Integer> {

    void delete(Training trainer);

    List<Training> findAll();

    Training findOne(int id);

    Training save(Training trainer);
    
    @Query("select training from Training training where training.mentorId=? and training.progress<100")
    List<Training> findTrainingByMentorId(Integer mentorId);
    
    @Query("select training from Training training where training.userId=? and training.progress<100")
    List<Training> findTrainingByUserId(Integer userId);
    
    @Query("select training from Training training where training.id=? and training.mentorId=?")
    Training findByIdAndMentorId(Integer Id, Integer mentorId);
    
    @Query("select training from Training training where training.id=? and training.userId=?")
    Training findByIdAndUserId(Integer Id, Integer userId);
    
    @Query("select date from Training date where date.startDate between ?1 and ?2")
    List<Training> findTrainingByStartDateBetween(Date startDate, Date endDate);
    
    
    @Query("select training from Training training where training.userId=? and training.progress=100")
    List<Training> findTrainingComplete(int userId);
    
    @Query("select training from Training training where training.mentorId=? and training.progress=100")
    List<Training> findTrainingCompletes(int mentorId);
}
