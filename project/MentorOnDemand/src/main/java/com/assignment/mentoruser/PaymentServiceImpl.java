package com.assignment.mentoruser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.entity.Payment;
import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;

import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public Payment create(Payment payment) {
        return paymentRepository.save(payment);
    }

    @Override
    public Payment delete(int id) {
    	Payment payment = findById(id);
        if(payment != null){
            paymentRepository.delete(payment);
        }
        return payment;
    }

    @Override
    public List<Payment> findAll() {
        return paymentRepository.findAll();
    }

    @Override
    public Payment findById(int id) {
        return paymentRepository.findOne(id);
    }

    @Override
    public Payment update(Payment payment) {
        return paymentRepository.save(payment);
    }

	@Override
	public List<Payment> findPaymentByUserId(Integer userId) {
		// TODO Auto-generated method stub
		 return paymentRepository.findPaymentByUserId(userId);
	}
}
