import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeemanagementService } from '../employeemanagement';


@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {
  @Input() employeelist!:Employee[];

  myform=new FormGroup({id:new FormControl(), name:new FormControl(), email:new FormControl()})
  toggle=false;  

  selectedemployee(employee:Employee){
    this.employeemanagement.employeechanged.emit(employee);
  }
  
  constructor(private employeemanagement: EmployeemanagementService) { }

  ngOnInit(): void {
  }

  addemployee(){
    this.employeemanagement.publishemployee(this.myform.value)
    this.toggle=!this.toggle;
  }

}
