package com.assignment.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.assignment.model.AuditModel;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="training")
public class Training extends AuditModel {

	private static final long serialVersionUID=1L;
	
	@Id
	@Column(name="id")
	private Integer id;
	
	@Column(name="status")
	private String status;
	
	@Column(name="progress")
	private Integer progress=0;
	
	@Column(name="fees")
	private Float fees=0.0f;
	
	@Column(name="commission_percent")
	private Integer commissionPercent=0;
	
	@Column(name="rating")
	private Integer rating=0;
	
	@Column(name="avg_rating")
	private Integer avgRating=0;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name="start_date")
	private Date startDate;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name="end_date")
	private Date endDate;
	
	@JsonFormat(pattern="HH:mm:ss")
	@Column(name="start_time")
	private String startTime;
	
	@JsonFormat(pattern="HH:mm:ss")
	@Column(name="end_time")
	private String endTime;
	
	@Column(name="amount_received")
	private Integer amountReceived=0;
	
	@Column(name="user_id")
	private Integer userId;
	
	@Column(name="mentor_id")
	private Integer mentorId;
	
	@Column(name="skill_id")
	private Integer skillId;
	
	@Column(name="razorpay_payment__id")
	private Long razorpayPaymentId;

	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="mentor_id",insertable=false,updatable=false)
	private Mentor mentor;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="tech_id",insertable=false,updatable=false)
	private Technology technology; 
	
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "training_skill", joinColumns = { 
			@JoinColumn(name = "training_id", nullable = false, updatable = false) }, 
			inverseJoinColumns = { @JoinColumn(name = "skill_id", 
					nullable = false, updatable = false) })
	private List<Skill> skill;
	
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "training_user", joinColumns = { 
			@JoinColumn(name = "training_id", nullable = false, updatable = false) }, 
			inverseJoinColumns = { @JoinColumn(name = "user_id", 
					nullable = false, updatable = false) })
	private List<UserEntity> users;
	
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "training_payment", joinColumns = { 
			@JoinColumn(name = "training_id", nullable = false, updatable = false) }, 
			inverseJoinColumns = { @JoinColumn(name = "payment_id", 
					nullable = false, updatable = false) })
	private List <Payment> payment;
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getAvgRating() {
		return avgRating;
	}

	public void setAvgRating(Integer avgRating) {
		this.avgRating = avgRating;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getProgress() {
		return progress;
	}

	public void setProgress(Integer progress) {
		this.progress = progress;
	}

	public Float getFees() {
		return fees;
	}

	public void setFees(Float fees) {
		this.fees = fees;
	}

	

	public Integer getCommissionPercent() {
		return commissionPercent;
	}

	public void setCommissionPercent(Integer commissionPercent) {
		this.commissionPercent = commissionPercent;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	


	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	
	

	public Integer getAmountReceived() {
		return amountReceived;
	}

	public void setAmountReceived(Integer amountReceived) {
		this.amountReceived = amountReceived;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	public Integer getSkillId() {
		return skillId;
	}

	public void setSkillId(Integer skillId) {
		this.skillId = skillId;
	}

	public Mentor getMentor() {
		return mentor;
	}

	public void setMentor(Mentor mentor) {
		this.mentor = mentor;
	}

	public Technology getTechnology() {
		return technology;
	}

	public void setTechnology(Technology technology) {
		this.technology = technology;
	}

	public List<Skill> getSkill() {
		return skill;
	}

	public void setSkill(List<Skill> skill) {
		this.skill = skill;
	}

	public List<UserEntity> getUsers() {
		return users;
	}

	public void setUsers(List<UserEntity> users) {
		this.users = users;
	}

	public List<Payment> getPayment() {
		return payment;
	}

	public void setPayment(List<Payment> payment) {
		this.payment = payment;
	}

	public Long getRazorpayPaymentId() {
		return razorpayPaymentId;
	}

	public void setRazorpayPaymentId(Long razorpayPaymentId) {
		this.razorpayPaymentId = razorpayPaymentId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}
