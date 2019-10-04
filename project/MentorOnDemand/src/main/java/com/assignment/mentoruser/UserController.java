package com.assignment.mentoruser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;


@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
//@RequestMapping({"/api"})
@RequestMapping({"/users"})
public class UserController {

	 @Autowired
	    private UserService userService;

	    @PostMapping
	    public UserEntity create(@RequestBody UserEntity user){
	        return userService.create(user);
	    }

	    @GetMapping(path = {"/{id}"})
	    public UserEntity findOne(@PathVariable("id") int id){
	        return userService.findById(id);
	    }

	    @PutMapping(path = {"/{id}"})
	    public UserEntity update(@PathVariable("id") int id, @RequestBody UserEntity user){
	        user.setId(id);
	        return userService.update(user);
	    }

	    @DeleteMapping(path ={"/{id}"})
	    public UserEntity delete(@PathVariable("id") int id) {
	        return userService.delete(id);
	    }

	   
	    
	    @GetMapping(path = {"/{userName}/{password}"})
	    public UserEntity findUserEntity(@PathVariable("userName") String userName,
	    @PathVariable(value="password") String password){
	    	System.out.println(userName+password+userService.findUserEntity(userName,password));
	        return userService.findUserEntity(userName,password);
	    }
	    
	    @GetMapping
	    public List<UserEntity> findAll(){
	        return userService.findAll();
	    }

}
