package com.assignment.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;

import com.assignment.model.AuditModel;

@Entity
@Table(name="user")
public class UserEntity extends AuditModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotEmpty(message="userName shouldn't be empty")
	@Column(name="user_name", unique = true)
	private String userName;
	
	@Column(name="password")
	private String password;
	
	@Column(name="rep_password")
	private String repPassword;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email_id", unique = true)
	private String emailId;
	
	@Column(name="contact_number")
	private Long contactNumber;
	
	@Column(name="reg_code")
	private String regCode="";
	
	@Column(name="role")
	private String role=null;
	
	@Column(name="linkedin_url")
	private String linkedinUrl=null;
	
	@Column(name="years_of_experience")
	private String yearsOf_experience;
	
	@Column(name="active")
	private Boolean active=false;
	
	@Column(name="confirmed_signup")
	private Boolean confirmedSignup=false;
	
	@Column(name="reset_password")
	private Boolean resetPassword=false;
	
	@Column(name="reset_password_date")
	private Date resetPasswordDate;

	
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	
	public String getRepPassword() {
		return repPassword;
	}

	public void setRepPassword(String repPassword) {
		this.repPassword = repPassword;
	}



	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	
	
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(Long contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getRegCode() {
		return regCode;
	}

	public void setRegCode(String regCode) {
		this.regCode = regCode;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getLinkedinUrl() {
		return linkedinUrl;
	}

	public void setLinkedinUrl(String linkedinUrl) {
		this.linkedinUrl = linkedinUrl;
	}

	public String getYearsOf_experience() {
		return yearsOf_experience;
	}

	public void setYearsOf_experience(String yearsOf_experience) {
		this.yearsOf_experience = yearsOf_experience;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Boolean getConfirmedSignup() {
		return confirmedSignup;
	}

	public void setConfirmedSignup(Boolean confirmedSignup) {
		this.confirmedSignup = confirmedSignup;
	}

	public Boolean getResetPassword() {
		return resetPassword;
	}

	public void setResetPassword(Boolean resetPassword) {
		this.resetPassword = resetPassword;
	}

	public Date getResetPasswordDate() {
		return resetPasswordDate;
	}

	public void setResetPasswordDate(Date resetPasswordDate) {
		this.resetPasswordDate = resetPasswordDate;
	}
	
	
	
	
}
