import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Todo {
  id: number | string;
  type: string;
  value: string;
  data? : Array<any>
}

@Injectable()
export class SectionService {
  todos: Observable<Todo[]>
  private _todos: BehaviorSubject<Todo[]>;
  private dataStore: {
    todos: Todo[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = { todos: [] };
    this._todos = <BehaviorSubject<Todo[]>>new BehaviorSubject([]);
    this.todos = this._todos.asObservable();
  }



  loadAll(){
    // this.http.get<Todo[]>('http://dummy.restapiexample.com/api/v1/employees').subscribe(data => {
    // }, error => console.log('Could not load todos.'));
        this.dataStore.todos = [{
            "id": 1,
            "value": "123",
            "type": "table"
          },{
            "id": 2,
            "value": "3456",
            "type": "omr"
          },{
            "id": 3,
            "value": "4567",
            "type": "ss",
            "data": []
        }];
        this._todos.next(Object.assign({}, this.dataStore).todos);

  }

  load(id: number | string) {
    
    this._todos.next(Object.assign({}, this.dataStore).todos);
  }

  create(data: Todo) {
    this.dataStore.todos.push(data);
    this._todos.next(Object.assign({}, this.dataStore).todos);
  }

  update(data: Todo) {
    this.dataStore.todos.forEach((t, i) => {
        if (t.id === data.id) { this.dataStore.todos[i] = data; }
    });

    this._todos.next(Object.assign({}, this.dataStore).todos);
  }

  remove(todoId: number) {
      this.dataStore.todos.forEach((t, i) => {
        if (t.id === todoId) { this.dataStore.todos.splice(i, 1); }
      });

      this._todos.next(Object.assign({}, this.dataStore).todos);
  }
}