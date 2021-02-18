import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() changedpage=new EventEmitter();

  changeselector(page:string){
    this.changedpage.emit(page);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
