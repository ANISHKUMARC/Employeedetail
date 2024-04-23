import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailService {

  constructor(private http:HttpClient) { }

  baseurl="http://localhost:6069/api/v1/"

  createEmployee(form:any){
    return this.http.post(this.baseurl+"create",form)


    }

  getEmployeeById(id:any){
    return this.http.get(this.baseurl+"getbyid/"+id)
  }

  getAllEmployee(){
    return this.http.get(this.baseurl+"getall")
  }
  
  updateEmployeeById(employee:any,id:any){
    return this.http.put(this.baseurl+"update/"+id,employee)
  }

  deleteEmployeeById(id:any){
    return this.http.delete(this.baseurl+"deletebyid/"+id)

  }
}
