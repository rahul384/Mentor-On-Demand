package com.assignment.mentoruser;

import java.util.List;

import com.assignment.entity.UserEntity;

public interface UserService {

	UserEntity create(UserEntity user);

	UserEntity delete(int id);

    List<UserEntity> findAll();

    UserEntity findById(int id);

    UserEntity update(UserEntity user);

    UserEntity findUserEntity(String userName, String password);
}
