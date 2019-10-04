package com.assignment.mentoruser;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {"com.assignment"})
@ComponentScan(basePackages = {"com.assignment"})
@EntityScan(basePackages = {"com.assignment"})
public class MentorOnDemandApplication {

	public static void main(String[] args) {
		SpringApplication.run(MentorOnDemandApplication.class, args);
	}

}
