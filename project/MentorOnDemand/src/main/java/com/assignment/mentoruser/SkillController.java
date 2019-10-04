package com.assignment.mentoruser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.assignment.entity.Skill;
import com.assignment.entity.UserEntity;



@RestController
//@RequestMapping({"/api"})
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping({"/skills"})
public class SkillController {

	 @Autowired
	    private SkillService skillService;

	    @PostMapping
	    public Skill create(@RequestBody Skill skills){
	        return skillService.create(skills);
	    }

	    @GetMapping(path = {"/{id}"})
	    public Skill findOne(@PathVariable("id") int id){
	        return skillService.findById(id);
	    }

	    @PutMapping(path = {"/{id}"})
	    public Skill update(@PathVariable("id") int id, @RequestBody Skill skills){
	    	skills.setId(id);
	        return skillService.update(skills);
	    }

	    @DeleteMapping(path ={"/{id}"})
	    public Skill delete(@PathVariable("id") int id) {
	        return skillService.delete(id);
	    }

	    @GetMapping
	    public List<Skill> findAll(){
	        return skillService.findAll();
	    }

}
