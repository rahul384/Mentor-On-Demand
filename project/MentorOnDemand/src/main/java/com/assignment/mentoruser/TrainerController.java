package com.assignment.mentoruser;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;



@RestController
//@RequestMapping({"/api"})
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping({"/trainer"})
public class TrainerController {

	 @Autowired
	    private TrainerService trainerService;
	 @Autowired
	 private UserService userService;

	    @PostMapping
	    public Training create(@RequestBody Training trainer){
	        return trainerService.create(trainer);
	    }

	    @GetMapping(path = {"/{id}"})
	    public Training findOne(@PathVariable("id") int id){
	        return trainerService.findById(id);
	    }

	    @PutMapping(path = {"/{id}"})
	    public Training update(@PathVariable("id") int id, @RequestBody Training trainer){
	    	trainer.setId(id);
	        return trainerService.update(trainer);
	    }

	    @DeleteMapping(path ={"/{id}"})
	    public Training delete(@PathVariable("id") int id) {
	        return trainerService.delete(id);
	    }

	    @GetMapping
	    public List<Training> findAll(){
	        return trainerService.findAll();
	    }
	    
	    
	    @GetMapping(path="/ChangeCommission/{commission}/{trainingId}")
	    public Training ChangeCommission(@PathVariable(value = "commission") Integer commission,
	    		@PathVariable(value = "trainingId") Integer trainingId){
		 
		 		Training training=trainerService.findById(trainingId);
		 		training.setCommissionPercent(commission);
		 		 
		 		return trainerService.create(training);
	    }
	    
	    @GetMapping("/findTrainingByMentorId/{mentorId}")
	    public List < Training > findTrainingByMentorId(@PathVariable(value = "mentorId") int mentorId) {
	        return trainerService.findTrainingByMentorId(mentorId);
	    }

	    
	    @GetMapping("/findTrainingByUserId/{userId}")
	    public List < Training > findTrainingByUserId(@PathVariable(value = "userId") int userId) {
	        return trainerService.findTrainingByUserId(userId);
	    }
	    
	    @GetMapping("/findByIdAndMentorId/{mentorId}/{id}")
	    public Training findByIdAndMentorId(@PathVariable(value = "mentorId") Integer mentorId,
	            @PathVariable(value = "id") Integer id) {
	        return trainerService.findByIdAndMentorId(id, mentorId);
	    }
	    
	    @GetMapping("/findTrainingComplete/{userId}")
	    public List < Training > findTrainingComplete(@PathVariable(value = "userId") int userId) {
	        return trainerService.findTrainingComplete(userId);
	    }
	    
	    @GetMapping("/findTrainingCompletes/{mentorId}")
	    public List < Training > findTrainingCompletes(@PathVariable(value = "mentorId") int mentorId) {
	        return trainerService.findTrainingCompletes(mentorId);
	    }
	    
	    @GetMapping("/findByIdAndUserId/{userId}/{id}")
	    public Training findByIdAndUserId(@PathVariable(value = "userId") Integer userId,
	            @PathVariable(value = "id") Integer id) {
	        return trainerService.findByIdAndUserId(id, userId);
	    }
	    
	    
	    @GetMapping("/{userId}/{id}")
	    public Training TechEnroll(@PathVariable(value = "userId") Integer userId,
	            @PathVariable(value = "id") Integer id) {
	    	
	    	Training training= trainerService.findById(id);
	    	UserEntity user= userService.findById(userId);
	    	training.getUsers().add(user);
	    	
	        return trainerService.create(training);
	    }
	    
	   
	    @GetMapping("/findTrainingByStartDateBetween/{startDate}/{endDate}")
	    public List < Training > findTrainingByStartDateBetween(@PathVariable(value = "startDate") @DateTimeFormat(pattern="yyyy-MM-dd") Date startDate,
	            @PathVariable(value = "endDate") @DateTimeFormat(pattern="yyyy-MM-dd") Date endDate) {
	        return trainerService.findTrainingByStartDateBetween(startDate, endDate);
	    }
	   
	  /*  @GetMapping("/findTrainingByStartDateBetween/{startDate}/{endDate}")
	    public List < Training > findTrainingByStartDateBetween(@PathVariable(value="startDate") @DateTimeFormat(pattern="yyyy-mm-dd") Date startDate, @PathVariable(value="endDate") @DateTimeFormat(pattern="yyyy-mm-dd") Date endDate) {
	    	SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
	    	Date dateStartDate1;
			try {
				dateStartDate1 = simpleDateFormat.parse(startDate);
			} catch (ParseException e) {
				dateStartDate1=new Date();
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    	Date dateStartDate2;
			try {
				dateStartDate2 = simpleDateFormat.parse(endDate);
			} catch (ParseException e) {
				dateStartDate2=new Date();
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    
	    	
	    	return trainerService.findTrainingByStartDateBetween(dateStartDate1, dateStartDate2);
	    }
	   */

}
