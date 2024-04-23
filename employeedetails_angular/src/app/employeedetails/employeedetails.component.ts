import { Component, OnInit } from '@angular/core';
import { EmployeedetailService } from '../service/employeedetail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.css'
})
export class EmployeedetailsComponent implements OnInit {
employeedt:any;
  constructor(private employeedetailService:EmployeedetailService , private router:Router ){}
  ngOnInit(): void {
    this.employeedetailService.getAllEmployee().subscribe((data)=>{

      this.employeedt=data
      console.log("employeedt", this.employeedt)

    },(error)=>{
      console.log(error)
    })
    
  }
  viewEmployee(id:any){
this.router.navigate(['/viewemployee/'+id])
  }
  deleteEmployee(id:any){
  
    this.employeedetailService.deleteEmployeeById(id).subscribe((next)=>{
console.log(next);
  this.router.navigate(['/employee-details/'])  })
   }
   updateEmployee(id:any){
    console.log(id)
    this.router.navigate(['/updateemployee/'+id])
   }
}
