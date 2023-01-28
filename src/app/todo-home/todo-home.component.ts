import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interface/todo';
import { Store, select } from '@ngrx/store';
import { TodoState } from '../store/state/todo.state';
import { Router } from '@angular/router';
import { GetTodos } from '../store/actions/todo.actions'; 
import { selectedTodos } from '../store/selector/todo.selector'; 

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent {

  public todos$: Observable<Todo[]>;
  title = 'IT255-v12';
  constructor(private _store: Store<TodoState>, private _router: Router) {
  this.todos$ = this._store.pipe(select(selectedTodos));
  }
  ngOnInit() {
  this._store.dispatch(new GetTodos());
  }
}