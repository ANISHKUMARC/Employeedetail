import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { CreateComponent } from './create/create.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const routes: Routes = [
  {path:'create' , component:CreateComponent},
  {path:'updateemployee/:id',component:UpdateemployeeComponent},
  {path:'employee-details', component:EmployeedetailsComponent},
  {path:'viewemployee/:id' , component:ViewemployeeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
