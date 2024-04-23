import { Component, OnInit } from '@angular/core';
import { EmployeedetailService } from '../service/employeedetail.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrl: './viewemployee.component.css'
})
export class ViewemployeeComponent implements OnInit {
 
  constructor(private employeedetailService:EmployeedetailService, private route:ActivatedRoute){}
  id:any;
  employeeDetail:any;
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
   this.employeedetailService.getEmployeeById(this.id).subscribe((data)=>{

    this.employeeDetail=data;
   })
    console.log(this.id)
  }

}
