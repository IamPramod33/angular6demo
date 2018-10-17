import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-setup',
  templateUrl: './element-setup.component.html',
  styleUrls: ['./element-setup.component.css']
})
export class ElementSetupComponent implements OnInit {

  public clickedEvent: any;
  addEleType: any;
  
  constructor() { }
  
  ngOnInit() {
    this.addEleType = 0
  }


 
  sectionClicked(val: any) {
    this.clickedEvent = val;
    console.log(this.clickedEvent)
  }

}
