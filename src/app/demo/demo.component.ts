import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl:'./demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }
@Input() inputData: string;
  ngOnInit(): void {
    console.log(this.inputData);
  }

}
