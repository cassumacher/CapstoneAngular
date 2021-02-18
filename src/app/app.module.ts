import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DevicesComponent } from './devices/devices.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { EmployeesdetailsComponent } from './employeesdetails/employeesdetails.component';
import { DevicelistComponent } from './devicelist/devicelist.component';
import { DevicedetailsComponent } from './devicedetails/devicedetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeemanagementService } from './employeemanagement';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DevicesComponent,
    HeaderComponent,
    EmployeeslistComponent,
    EmployeesdetailsComponent,
    DevicelistComponent,
    DevicedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [EmployeemanagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
