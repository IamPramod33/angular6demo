import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, SectionService } from '../../../shared/services/user/section.service';

@Component({
  selector: 'add-element-strip',
  templateUrl: './add-element-strip.component.html',
  styleUrls: ['./add-element-strip.component.scss']
})
export class AddElementStripComponent implements OnInit {

  @Input() elementType : any;
  todos: Observable<Todo[]>;
  constructor(private sectionService: SectionService) { }

  ngOnInit() {
    this.todos = this.sectionService.todos;
    this.sectionService.loadAll();
    console.log(this.elementType);
  }
  
  addElement(type: any) {
    // this.elementClicked.emit(type);
    this.sectionService.create({ value: '',type: type, id: '_' + Math.random().toString(36).substr(2, 9), data: []});
  }

}
