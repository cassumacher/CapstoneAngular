import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { EmployeemanagementService } from '../employeemanagement';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  myemployees:Employee[]=[];
  employee:Employee;
  selectedemployee: any;

  constructor(private employeemanagement:EmployeemanagementService) { 
       
  }  

  ngOnInit(): void {
    this.myemployees=this.employeemanagement.myemployees;
    this.selectedemployee=this.myemployees[0];
  }

}
