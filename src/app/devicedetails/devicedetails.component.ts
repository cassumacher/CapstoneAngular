import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Devices } from '../devices';
import { EmployeemanagementService } from '../employeemanagement';



@Component({
  selector: 'app-devicedetails',
  templateUrl: './devicedetails.component.html',
  styleUrls: ['./devicedetails.component.css']
})
export class DevicedetailsComponent implements OnInit {
  mydevices:Devices[]=[];
  myform:any; 
  mydevice=new Devices('', '', '', null)
  toggle=false;
  

  constructor(private http:HttpClient, private employeemanagement: EmployeemanagementService) { 
    
    this.mydevice=this.employeemanagement.mydevices[0];
    
   
  }
  delete(id:string){
    this.employeemanagement.deletedevice(id);
  }
  editedevice(device: Devices){
  this.employeemanagement.editedevice(device.id, this.myform.value)  
}

  ngOnInit(): void {  
    this.employeemanagement.devicechanged.subscribe((device)=>{
      this.mydevice=device;
      this.myform=new FormGroup({serialNumber:new FormControl(this.mydevice.serialNumber), description:new FormControl(this.mydevice.description),
         type:new FormControl(this.mydevice.type)})
    })  
    
  }

}
