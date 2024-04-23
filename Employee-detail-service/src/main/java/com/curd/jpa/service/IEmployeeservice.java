package com.curd.jpa.service;

import java.util.List;

import com.curd.jpa.entity.Employee;

public interface IEmployeeservice {
	
	
       Employee  createEmployee(Employee employee);
       Employee  getEmployeeById(int id);
       List<Employee> getAllEmployee();
       Employee  updateEmployeeById(Employee employee,int id);
       String deleteEmployeeById(int id);
       
       
       
}
