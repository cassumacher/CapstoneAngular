import { Component, OnInit, Output } from '@angular/core';
import { Devices } from '../devices';
import { EmployeemanagementService } from '../employeemanagement';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  

  mydevices:Devices[]=[];
  device:Devices;
  selecteddevice:any;

  constructor(private employeemanagement: EmployeemanagementService) { 
    
    
  }


  ngOnInit(): void {
    this.mydevices=this.employeemanagement.mydevices;
    this.selecteddevice=this.mydevices[0];
  }

}
