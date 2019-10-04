package com.assignment.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.assignment.model.AuditModel;

@Entity
@Table(name="payment")
public class Payment extends AuditModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="txn_type")
	private String txnType;
	
	@Column(name="amount")
	private Integer amount;
	
	@Column(name="remarks")
	private String remarks;
	
	@Column(name="mentor_id")
	private Integer mentorId;
	
	@Column(name="user_id")
	private Integer userId;
	
	@Column(name="mentor_name")
	private String mentorName;
	
	@Column(name="training_id")
	private Integer trainingId;
	
	@Column(name="tech_name")
	private String techName;
	
	@Column(name="total_amount_to_mentor")
	private Integer totalAmountToMentor;
	
	@Column(name="payment_type")
	private String paymentType;

	
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTxnType() {
		return txnType;
	}

	public void setTxnType(String txnType) {
		this.txnType = txnType;
	}

	
	

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	

	public String getMentorName() {
		return mentorName;
	}

	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}


	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	
	
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(Integer trainingId) {
		this.trainingId = trainingId;
	}

	

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}


	

	public String getTechName() {
		return techName;
	}

	public void setTechName(String techName) {
		this.techName = techName;
	}

	public Integer getTotalAmountToMentor() {
		return totalAmountToMentor;
	}

	public void setTotalAmountToMentor(Integer totalAmountToMentor) {
		this.totalAmountToMentor = totalAmountToMentor;
	}

	public void paymenttrainer(Integer amount)
	{
		this.totalAmountToMentor=this.totalAmountToMentor+amount;
	}

	public void setamt(String remark, Integer amount2) {
		// TODO Auto-generated method stub
		if(remarks.equals(this.remarks))
			return;
		else
		{
			this.remarks=remarks;
			this.totalAmountToMentor=this.totalAmountToMentor+amount;
		}
		
	}
	
}

