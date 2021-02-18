import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from './employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myemployees=[];
  mydevices=[];
  title = 'capstone';
  selector='employees';

  constructor(private http:HttpClient){
    
  }

  changeselector(page:string){
    this.selector=page;

  }

  
}
