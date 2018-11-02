import { Component, OnInit } from '@angular/core';

import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {

  constructor() { }

  droppedData: Object = {};
  ngOnInit() {
  }

  onDrop({ dropData }: DropEvent<Object>): void {
    this.droppedData = dropData;
    // setTimeout(() => {
    //   this.droppedData = '';
    // }, 2000);
  }
}
