import { Component, OnInit } from '@angular/core';

import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.css']
})
export class SquadsComponent implements OnInit {

  
  availableUserData: any;
  constructor() { }

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
