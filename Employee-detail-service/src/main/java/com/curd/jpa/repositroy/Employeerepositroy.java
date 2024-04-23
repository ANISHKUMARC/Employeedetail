package com.curd.jpa.repositroy;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curd.jpa.entity.Employee;

public interface Employeerepositroy extends JpaRepository<Employee,Integer>  {

}
