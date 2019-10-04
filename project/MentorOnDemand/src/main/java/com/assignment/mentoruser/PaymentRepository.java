package com.assignment.mentoruser;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import com.assignment.entity.Payment;
import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;

import java.util.List;

public interface PaymentRepository extends Repository<Payment, Integer> {

    void delete(Payment payment);

    List<Payment> findAll();

    Payment findOne(int id);

    Payment save(Payment payment);
    
    @Query("select payment from Payment payment where payment.userId=?")
    List<Payment> findPaymentByUserId(Integer userId);
}
