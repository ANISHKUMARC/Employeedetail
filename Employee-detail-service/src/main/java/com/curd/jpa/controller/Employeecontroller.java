package com.curd.jpa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curd.jpa.entity.Employee;
import com.curd.jpa.service.IEmployeeservice;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="*", allowedHeaders="*" )
public class Employeecontroller { 

	@Autowired
	IEmployeeservice iEmployeeservice;

	@PostMapping("/create")
	public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
		
		employee = iEmployeeservice.createEmployee(employee);
		return new ResponseEntity<Employee>(employee, HttpStatus.OK);

	}
	@GetMapping("/getbyid/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") int id) {
		
	Employee	employee = iEmployeeservice.getEmployeeById(id);
		return new ResponseEntity<Employee>(employee, HttpStatus.OK);

	}
	@GetMapping("/getall")
	public ResponseEntity<List<Employee>> getAllEmployee() {
		
	List<Employee>	employee = iEmployeeservice.getAllEmployee();
		return new ResponseEntity<List<Employee>>(employee, HttpStatus.OK);

	}
	@PutMapping("/update/{id}")
	public ResponseEntity<Employee> getEmployeeById(@RequestBody Employee employee ,@PathVariable("id") int id) {
		
		employee = iEmployeeservice.updateEmployeeById(employee,id);
			return new ResponseEntity<Employee>(employee, HttpStatus.OK);


	}
	@DeleteMapping("/deletebyid/{id}")
	public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") int id) {
		
	      iEmployeeservice.deleteEmployeeById(id);
		return new ResponseEntity<String>("Employee id deleted", HttpStatus.OK);

	}

}
