package com.csi.service;

import java.util.List;

import com.csi.model.Customer;

public interface CustomerDao {

	public List<Customer> getCustomerList();
	
	public List<Customer> getCustomerListbyID(int customerId);

	public void saveCustomerData(Customer customer);

	public void updateCustomerData(int customerId, Customer customer);

	public void deleteCustomerData(int customerId);
}
