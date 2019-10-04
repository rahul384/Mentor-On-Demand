package com.assignment.mentoruser;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import com.assignment.entity.UserEntity;

import java.util.List;

public interface UserRepository extends Repository<UserEntity, Integer> {

    void delete(UserEntity user);

    List<UserEntity> findAll();

    UserEntity findOne(int id);

    UserEntity save(UserEntity user);
    
    @Query("select user from UserEntity user where user.userName=? and user.password=?")
    UserEntity findUserEntity(String userName, String password);
}
