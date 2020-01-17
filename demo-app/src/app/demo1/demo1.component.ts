import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  title: string;

  constructor() {
    this.title = "Demo One !!!";
  }

  ngOnInit() {
  }

  logMessage(value: string){
    console.log(value);
  }

}
