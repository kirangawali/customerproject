package com.csi.service;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.springframework.stereotype.Component;

import com.csi.model.Customer;

@Component
public class CustomerDaoImpl implements CustomerDao {

	private static SessionFactory factory;

	@Override
	public List<Customer> getCustomerList() {
		// TODO Auto-generated method stub
		factory = new AnnotationConfiguration().configure().buildSessionFactory();
		Session session = factory.openSession();

		List<Customer> custList = session.createQuery("from Customer").list();

		return custList;
	}

	@Override
	public void saveCustomerData(Customer customer) {
		// TODO Auto-generated method stub
		factory = new AnnotationConfiguration().configure().buildSessionFactory();
		Session session = factory.openSession();
		Transaction transaction = session.beginTransaction();
		session.save(customer);
		transaction.commit();

	}

	@Override
	public void updateCustomerData(int customerId, Customer customer) {
		// TODO Auto-generated method stub

		factory = new AnnotationConfiguration().configure().buildSessionFactory();
		Session session = factory.openSession();
		Transaction transaction = session.beginTransaction();
		List<Customer> custList = session.createQuery("from Customer").list();
		for (Customer cust : custList) {
			if (cust.getCustomerId() == customerId) {
				cust.setCustomerName(customer.getCustomerName());
				cust.setCustomerAge(customer.getCustomerAge());
				cust.setCustomerAddress(customer.getCustomerAddress());
				cust.setCustomerContactNumber(customer.getCustomerContactNumber());
				session.update(cust);
				transaction.commit();
			}
		}

	}

	@Override
	public void deleteCustomerData(int customerId) {
		// TODO Auto-generated method stub

		factory = new AnnotationConfiguration().configure().buildSessionFactory();
		Session session = factory.openSession();
		Transaction transaction = session.beginTransaction();
		List<Customer> custList = session.createQuery("from Customer").list();
		for (Customer cust : custList) {
			if (cust.getCustomerId() == customerId) {
				session.delete(cust);
				transaction.commit();
			}
		}
	}

	@Override
	public List<Customer> getCustomerListbyID(int customerId) {
		// TODO Auto-generated method stub
		factory = new AnnotationConfiguration().configure().buildSessionFactory();
		Session session = factory.openSession();
		ArrayList<Customer> custdatabyID= new ArrayList<>();
		List<Customer> custList = session.createQuery("from Customer").list();
		for(Customer cust:custList)
		{
			if(cust.getCustomerId()==customerId)
			{
				custdatabyID.add(cust);
			}
		}
		
		return custdatabyID;
	}

}
