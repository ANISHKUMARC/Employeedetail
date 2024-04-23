import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeedetailService } from '../service/employeedetail.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
employeeDesingnation: any;
  constructor(private  employeedetailService: EmployeedetailService, private router:Router){}
 
 
  ngOnInit(): void {}
   
   
  createEmployees(form:NgForm){
    console.log(form.value);
    this.employeedetailService.createEmployee(form.value).subscribe((data)=>{

console.log("created sucessfully")
this.router.navigate(['/employee-details/'])

    },(error)=>{
      console.log(error);
    })
  
    
   }
 

}
