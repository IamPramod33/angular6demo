import { Component, OnInit, Input } from '@angular/core';

import { Todo, SectionService } from '../../../shared/services/user/section.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'display-elements',
  templateUrl: './display-elements.component.html',
  styleUrls: ['./display-elements.component.css']
})
export class DisplayElementsComponent implements OnInit {


  todos: Observable<Todo[]>;
  addEleType: any;

  constructor(private sectionService: SectionService) { 
    console.log(this.eventVal);
  }

  @Input() eventVal: any;

  ngOnInit() {
    this.addEleType = 1;
    this.todos = this.sectionService.todos;
    this.sectionService.loadAll();
  }
  
  ngAfterViewInit() {
  }

}
