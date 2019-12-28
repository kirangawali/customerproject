package com.csi.controller;

import java.util.List;

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

	@PostMapping("/savedata")
	public String saveCustomerData(@RequestBody Customer customer) {

		customerDaoImpl.saveCustomerData(customer);

		return "Data save successfully";

	}

	@PutMapping("/updatedata/{customerId}")
	public String updateCustomerData(@PathVariable("customerId") int customerId, @RequestBody Customer customer) {
		customerDaoImpl.updateCustomerData(customerId, customer);
		return "update Data Successfully";
	}

	@DeleteMapping("/deletedata/{customerId}")
	public String deleteCustomerData(@PathVariable("customerId") int customerId) {
		customerDaoImpl.deleteCustomerData(customerId);
		return "delete data successfully";
	}
}
