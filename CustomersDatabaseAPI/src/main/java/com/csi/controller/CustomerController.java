package com.csi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csi.model.Customer;
import com.csi.service.CustomerDao;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")

public class CustomerController {

	@Autowired
	CustomerDao customerDaoImpl;

	@GetMapping("/getdata")
	@CrossOrigin("localhost:4200")
	public List<Customer> getCustomerData() {
		return customerDaoImpl.getCustomerList();
	}
	@GetMapping("/getdatabyid/{customerId}")
	public List<Customer> getCustomerDatabyID(@PathVariable("customerId") int customerId)
	{
		return customerDaoImpl.getCustomerListbyID(customerId);
	}
  
	/* @PostMapping("/savedata")
	public String saveCustomerData(@RequestBody Customer customer) {
		System.out.println("********************vaishali*******" + customer.toString());
		customerDaoImpl.saveCustomerData(customer);

		return "Data save successfully";

	} */
	
	 @PostMapping("/savedata")
	public List<Customer> saveCustomerData(@RequestBody Customer customer) {
		System.out.println("********************vaishali*******" + customer.toString());
		customerDaoImpl.saveCustomerData(customer);
		 Map<String,String> r = new  HashMap<String,String>();
		 r.put("msg" , "Data Sava Successfully");
		 	return customerDaoImpl.getCustomerList(); 
		

	} 

	@PutMapping("/updatedata/{customerId}")
	public String updateCustomerData(@PathVariable("customerId") int customerId, @RequestBody Customer customer) {
		customerDaoImpl.updateCustomerData(customerId, customer);
		return "update Data Successfully";
	}

	@DeleteMapping("/deletedata/{customerId}")
	public String deleteCustomerData(@PathVariable("customerId") int customerId) {
		System.out.println("hello world" +customerId );
		customerDaoImpl.deleteCustomerData(customerId);
		
		return "delete data successfully";
	}
}
