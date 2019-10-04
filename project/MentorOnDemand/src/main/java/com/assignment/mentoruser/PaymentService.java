package com.assignment.mentoruser;

import java.util.List;

import com.assignment.entity.Payment;
import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;

public interface PaymentService {

	Payment create(Payment payment);

	Payment delete(int id);

    List<Payment> findAll();

    Payment findById(int id);

    Payment update(Payment payment);

	List<Payment> findPaymentByUserId(Integer userId);
}
