package com.assignment.mentoruser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.assignment.entity.Technology;
import com.assignment.entity.UserEntity;



@RestController
//@RequestMapping({"/api"})
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping({"/tech"})
public class TechnologyController {

	 @Autowired
	    private TechnologyService technologyService;

	    @PostMapping
	    public Technology create(@RequestBody Technology technology){
	        return technologyService.create(technology);
	    }

	    @GetMapping(path = {"/{id}"})
	    public Technology findOne(@PathVariable("id") int id){
	        return technologyService.findById(id);
	    }

	    @PutMapping(path = {"/{id}"})
	    public Technology update(@PathVariable("id") int id, @RequestBody Technology technology){
	    	technology.setId(id);
	        return technologyService.update(technology);
	    }

	    @DeleteMapping(path ={"/{id}"})
	    public Technology delete(@PathVariable("id") int id) {
	        return technologyService.delete(id);
	    }

	    @GetMapping
	    public List<Technology> findAll(){
	        return technologyService.findAll();
	    }

}
