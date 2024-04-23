import { Component, OnInit } from '@angular/core';
import { EmployeedetailService } from '../service/employeedetail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrl: './updateemployee.component.css'
})
export class UpdateemployeeComponent implements OnInit {
id:any;
employeeData:any;
  constructor(private employeedetailService:EmployeedetailService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {

    this.id=this.route.snapshot.params["id"]
    this.employeedetailService.getEmployeeById(this.id).subscribe((data)=>{

      this.employeeData=data;
    })
  }
 updateEmployee(form:NgForm,){

  console.log(form.value)
  this.employeedetailService.updateEmployeeById(form.value, this.id).subscribe((data)=>{

    this.router.navigate(['/employee-details/'])

  })

 }

}
