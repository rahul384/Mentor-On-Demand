package com.assignment.mentoruser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.entity.UserEntity;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserEntity create(UserEntity user) {
        return userRepository.save(user);
    }

    @Override
    public UserEntity delete(int id) {
    	UserEntity user = findById(id);
        if(user != null){
            userRepository.delete(user);
        }
        return user;
    }

    @Override
    public List<UserEntity> findAll() {
        return userRepository.findAll();
    }

    @Override
    public UserEntity findById(int id) {
        return userRepository.findOne(id);
    }

    @Override
    public UserEntity update(UserEntity user) {
        return userRepository.save(user);
    }
    
    @Override
    public UserEntity findUserEntity(String userName, String password) {
        return userRepository.findUserEntity(userName,password);
    }
}
