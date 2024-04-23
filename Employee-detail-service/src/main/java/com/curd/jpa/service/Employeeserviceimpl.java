package com.curd.jpa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.curd.jpa.entity.Employee;
import com.curd.jpa.repositroy.Employeerepositroy;

 @Service
public class Employeeserviceimpl implements IEmployeeservice {
	
	@Autowired
	Employeerepositroy employeerepositroy;

	@Override
	public Employee createEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeerepositroy.save(employee);
	}

	@Override
	public Employee getEmployeeById(int id) {
		// TODO Auto-generated method stub
		return employeerepositroy.findById(id).get();
	}

	@Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		return employeerepositroy.findAll();
	}

	@Override
	public Employee updateEmployeeById(Employee employee, int id) {
		Employee existingemployee=employeerepositroy.findById(id).get();
		
		existingemployee.setEmployeeDesingnation(employee.getEmployeeDesingnation());
		existingemployee.setEmployeename(employee.getEmployeename());
		existingemployee.setEmployeeSalary(employee.getEmployeeSalary());
		// TODO Auto-generated method stub
		return employeerepositroy.save(existingemployee);
	}

	@Override
	public String deleteEmployeeById(int id) {
		// TODO Auto-generated method stub
		 employeerepositroy.deleteById(id);
		 
		 return "Employee deleted" ;
	}

}
