import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Devices } from './devices';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeemanagementService {
  
  @Output() employeechanged=new EventEmitter();
  @Output() devicechanged=new EventEmitter();

  mydevices:Devices[]=[]; 
  myemployees:Employee[]=[];

  constructor(private http:HttpClient) {   

    this.getemployees();
    this.getdevices();
    
  }

  deleteemployee(idDB: string){
    this.http.delete('https://capstone-cb00d-default-rtdb.firebaseio.com/Employees' +idDB+ '.json').subscribe(
      ()=>{
        this.myemployees.splice(this.myemployees.findIndex(function(employee){
          return employee.idDB === idDB;
        }), 1) 
          this.employeechanged.emit(this.myemployees[0]);
      }
    )
  }

  editemployee(idDB: string, value: any) {    
      this.http.put('https://capstone-cb00d-default-rtdb.firebaseio.com/Employees' +idDB+ '.json', value).subscribe(
      (data:any)=>{
        this.myemployees.splice(this.myemployees.findIndex(function(employee){
          return employee.idDB===idDB;
        }),1)
        let newemployee= new Employee(data.name, value.id, value.name, value.email, value.device)          
          this.myemployees.push(newemployee)
            this.employeechanged.emit(newemployee)
      }
    )
  }

  publishemployee(value: any) { 
    this.http.post('https://capstone-cb00d-default-rtdb.firebaseio.com/Employees.json', value).subscribe(
      (response: any)=>{this.myemployees.push(new Employee(response.name, value.id, value.name, value.email, value.device))
      }
    )
  }

  getemployees(){
    this.http.get('https://capstone-cb00d-default-rtdb.firebaseio.com/Employees.json').subscribe(
      (employees)=>{
        for(let key in employees){
          this.myemployees.push(new Employee(key, employees[key].id, employees[key].name, employees[key].email, employees[key].device))
        }
        this.employeechanged.emit(this.myemployees[0]);
      }
    )
  }

  /*---------------------------------------------DEVICES---------------------------------------------*/
  
  deletedevice(id:any){
    this.http.delete('https://capstone-cb00d-default-rtdb.firebaseio.com/Devices' +id+ '.json').subscribe(
      ()=>{
        this.mydevices.splice(this.mydevices.findIndex(function(device){
          return device.id === id;
        }),1)
        this.devicechanged.emit(this.mydevices[0])
      }
    )
  }

  editedevice(id:string, value:any){
    this.http.put('https://capstone-cb00d-default-rtdb.firebaseio.com/Devices' +id+ '.json', value).subscribe(
      (data:any)=>{
         this.mydevices.splice(this.mydevices.findIndex(function(device){
           return device.id === id;
         }),1)
         let newdevice = new Devices(data.name, value.serialNumber, value.description, value.type)
           this.mydevices.push(newdevice)
           this.devicechanged.emit(newdevice)
      }
    )
  }

  publishdevice(value: any){
    this.http.post("https://capstone-cb00d-default-rtdb.firebaseio.com/Devices.json", value).subscribe(
      (response:any)=>{this.mydevices.push(new Devices(response.name, value.serialNumber, value.description, value.type))
      }
    )
  }

  getdevices(){
    this.http.get("https://capstone-cb00d-default-rtdb.firebaseio.com/Devices.json").subscribe(
      (devices)=>{
        for(let key1 in devices){
          this.mydevices.push(new Devices(key1, devices[key1].serialNumber, devices[key1].description, devices[key1].type))
        }
        this.devicechanged.emit(this.mydevices[0]);
      }
    )
    
  }
}
