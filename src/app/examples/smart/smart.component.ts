import { Component, OnInit } from '@angular/core';

import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  constructor() { }

  droppedData: Object = {};
  availableUserData: any;
  onDrop({ dropData }: DropEvent<Object>): void {
    this.droppedData = dropData;
    // setTimeout(() => {
    //   this.droppedData = '';
    // }, 2000);
  }
  
  ngOnInit() {
    this.availableUserData = [{
      id: '045',
      fName: 'Rohit',
      lName: 'Sharma'
    },{
      id: '33',
      fName: 'Shikhar',
      lName: 'Dhawan'
    },{
      id: '18',
      fName: 'Virat',
      lName: 'Kohli'
    },{
      id: '60',
      fName: 'Ambati',
      lName: 'Rayudu'
    },{
      id: '90',
      fName: 'Rishab',
      lName: 'Pant'
    },{
      id: '07',
      fName: 'MahendraSingh',
      lName: 'Dhoni'
    },{
      id: '333',
      fName: 'Chris',
      lName: 'Gayle'
    }]

  }

}
