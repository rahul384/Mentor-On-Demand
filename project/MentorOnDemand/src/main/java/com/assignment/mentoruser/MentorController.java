package com.assignment.mentoruser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.assignment.entity.Mentor;
import com.assignment.entity.UserEntity;



@RestController
//@RequestMapping({"/api"})
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping({"/mentors"})
public class MentorController {

	 @Autowired
	    private MentorService userService;

	    @PostMapping
	    public Mentor create(@RequestBody Mentor mentor){
	        return userService.create(mentor);
	    }

	    @GetMapping(path = {"/{id}"})
	    public Mentor findOne(@PathVariable("id") int id){
	        return userService.findById(id);
	    }

	    @PutMapping(path = {"/{id}"})
	    public Mentor update(@PathVariable("id") int id, @RequestBody Mentor mentor){
	    	mentor.setId(id);
	        return userService.update(mentor);
	    }

	    @DeleteMapping(path ={"/{id}"})
	    public Mentor delete(@PathVariable("id") int id) {
	        return userService.delete(id);
	    }
	    
	    @GetMapping(path = {"/{userName}/{password}"})
	    public Mentor findMentor(@PathVariable("userName") String userName,
	    @PathVariable(value="password") String password){
	    	System.out.println(userName+password+userService.findMentor(userName,password));
	        return userService.findMentor(userName,password);
	    }

	    @GetMapping
	    public List<Mentor> findAll(){
	        return userService.findAll();
	    }

}
