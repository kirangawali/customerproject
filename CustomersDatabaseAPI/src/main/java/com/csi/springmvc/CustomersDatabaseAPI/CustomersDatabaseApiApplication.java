package com.csi.springmvc.CustomersDatabaseAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;




@Configuration

@SpringBootApplication(scanBasePackages={"com.csi.model", "com.csi.service", "com.csi.controller"})
public class CustomersDatabaseApiApplication{

	public static void main(String[] args) {
		SpringApplication.run(CustomersDatabaseApiApplication.class, args);
	}
	
	
	 /*@Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/api/**").allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS");
	    } */
	
	
}
