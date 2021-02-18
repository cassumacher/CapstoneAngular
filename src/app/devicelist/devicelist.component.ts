import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Devices } from '../devices';
import { EmployeemanagementService } from '../employeemanagement';


@Component({
  selector: 'app-devicelist',
  templateUrl: './devicelist.component.html',
  styleUrls: ['./devicelist.component.css']
})
export class DevicelistComponent implements OnInit {
  @Input() devicelist!:Devices[];  
  myform=new FormGroup({serialNumber:new FormControl(), description:new FormControl(), type:new FormControl()})

  toggle=false;

  selecteddevice(device:Devices){
    this.employeemanagement.devicechanged.emit(device);
  }

  constructor(private employeemanagement: EmployeemanagementService) { 
    
  }

  ngOnInit(): void {
  }

  adddevice(){ 
    this.employeemanagement.publishdevice(this.myform.value);
    this.toggle=!this.toggle
  }

}
