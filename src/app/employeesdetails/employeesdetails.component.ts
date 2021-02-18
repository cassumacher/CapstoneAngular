import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeemanagementService } from '../employeemanagement';


@Component({
  selector: 'app-employeesdetails',
  templateUrl: './employeesdetails.component.html',
  styleUrls: ['./employeesdetails.component.css']
})
export class EmployeesdetailsComponent implements OnInit {
  myform:any;
  myemployee=new Employee('', null,'','','');
  toggle=false;
  toggle1=false;
  myformassigndevice:any;  

  constructor(private employeemanagement: EmployeemanagementService, private http:HttpClient) {     
    
    this.myemployee=this.employeemanagement.myemployees[0];
  }
    delete(idDB:string){
      this.employeemanagement.deleteemployee(idDB);
    }

    editemployee(employee: Employee){
      this.employeemanagement.editemployee(employee.idDB, this.myform.value);
    }   
  
  ngOnInit(): void {  
    this.employeemanagement.employeechanged.subscribe((employee)=>{
      this.myemployee=employee;
      this.myform=new FormGroup({id:new FormControl(this.myemployee.id), name:new FormControl (this.myemployee.name), email:new FormControl(this.myemployee.email), 
        device:new FormControl(this.myemployee.device)})      
    })    
  
  }


}
