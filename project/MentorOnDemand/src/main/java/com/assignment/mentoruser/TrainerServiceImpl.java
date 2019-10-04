package com.assignment.mentoruser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;

import java.util.Date;
import java.util.List;

@Service
public class TrainerServiceImpl implements TrainerService {

    @Autowired
    private TrainerRepository trainerRepository;

    @Override
    public Training create(Training trainer) {
        return trainerRepository.save(trainer);
    }

    @Override
    public Training delete(int id) {
    	Training trainer = findById(id);
        if(trainer != null){
            trainerRepository.delete(trainer);
        }
        return trainer;
    }

    @Override
    public List<Training> findAll() {
        return trainerRepository.findAll();
    }
    
    @Override
    public List<Training> findTrainingByMentorId(Integer mentorId) {
        return trainerRepository.findTrainingByMentorId(mentorId);
    }
    
    @Override
    public List<Training> findTrainingByUserId(Integer userId) {
        return trainerRepository.findTrainingByUserId(userId);
    }
    

	@Override
	public Training findByIdAndMentorId(Integer id, Integer mentorId) {
		// TODO Auto-generated method stub
		return trainerRepository.findByIdAndMentorId(id,mentorId);
	}

	@Override
	public Training findByIdAndUserId(Integer id, Integer userId) {
		// TODO Auto-generated method stub
		return trainerRepository.findByIdAndUserId(id,userId);
	}
	
    @Override
    public Training findById(int id) {
        return trainerRepository.findOne(id);
    }

    
    @Override
    public Training update(Training trainer) {
        return trainerRepository.save(trainer);
    }

	@Override
	public List<Training> findTrainingComplete(int userId) {
		// TODO Auto-generated method stub
		return trainerRepository.findTrainingComplete(userId);
	}
	
	@Override
	public List<Training> findTrainingCompletes(int mentorId) {
		// TODO Auto-generated method stub
		return trainerRepository.findTrainingCompletes(mentorId);
	}
	
	@Override
	public List<Training> findTrainingByStartDateBetween(Date startDate, Date endDate) {
		// TODO Auto-generated method stub
		return trainerRepository.findTrainingByStartDateBetween(startDate,endDate);
	}
	  

}
