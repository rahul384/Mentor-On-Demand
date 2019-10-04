package com.assignment.mentoruser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.assignment.entity.Payment;
import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;



@RestController
//@RequestMapping({"/api"})
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping({"/payments"})
public class PaymentController {

	 @Autowired
	    private PaymentService paymentService;
	 @Autowired
	    private TrainerService trainerService;

	    @PostMapping(path = {"/{id}"})
	    public Payment create(@RequestBody Payment payment){
	        return paymentService.create(payment);
	    }

	    @GetMapping(path = {"/{id}"})
	    public Payment findOne(@PathVariable("id") int id){
	        return paymentService.findById(id);
	    }
	    
	    
	    @GetMapping(path = "/{amount}/{remark}/{id}")
	    public Payment SetAmount(@PathVariable("amount") Integer amount,@PathVariable("remark") String remark,@PathVariable("id") Integer id){
	    	
	    	Payment payment=paymentService.findById(id);
	    	payment.setamt(remark,amount);
	    	//payment.paymenttrainer(amount);
	    	//payment.setRemarks(remark);
	        return paymentService.create(payment);
	    }
	    
	    
	    
	    @GetMapping(path = {"/payfees/{id}/{amount}"})
	    public Payment payfees(@PathVariable("id") int id,@PathVariable("amount") int amount){
	    	Payment payment=paymentService.findById(id);
	    	Training training=trainerService.findById(payment.getTrainingId());
	    	payment.setAmount(amount);
	    	training.setAmountReceived(amount);
	    	trainerService.create(training);
	        return paymentService.create(payment);
	    }
	    
	    @GetMapping(path = {"/withdraw/{id}/{amount}"})
	    public Payment withdraw(@PathVariable("id") int id,@PathVariable("amount") int amount){
	    	Payment payment=paymentService.findById(id);
	    	payment.paymenttrainer(-amount);
	        return paymentService.create(payment);
	    }

	    
	    @GetMapping("/findPaymentByUserId/{userId}")
	    public List < Payment > findPaymentByUserId(@PathVariable(value = "userId") int userId) {
	        return paymentService.findPaymentByUserId(userId);
	    }

	    @PutMapping(path = {"/{id}"})
	    public Payment update(@PathVariable("id") int id, @RequestBody Payment payment){
	    	payment.setId(id);
	        return paymentService.update(payment);
	    }

	    @DeleteMapping(path ={"/{id}"})
	    public Payment delete(@PathVariable("id") int id) {
	        return paymentService.delete(id);
	    }

	    @GetMapping
	    public List<Payment> findAll(){
	        return paymentService.findAll();
	    }

}
