package com.csi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Component
public class Customer {

	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", customerName=" + customerName + ", customerAge=" + customerAge
				+ ", customerAddress=" + customerAddress + ", customerContactNumber=" + customerContactNumber + "]";
	}

	@Id
	@GeneratedValue
	private int customerId;

	private String customerName;

	private int customerAge;

	private String customerAddress;

	private long customerContactNumber;

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public int getCustomerAge() {
		return customerAge;
	}

	public void setCustomerAge(int customerAge) {
		this.customerAge = customerAge;
	}

	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

	public long getCustomerContactNumber() {
		return customerContactNumber;
	}

	public void setCustomerContactNumber(long customerContactNumber) {
		this.customerContactNumber = customerContactNumber;
	}

	

}
