import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo'; 
import { select, Store } from '@ngrx/store';
import { TodoState } from '../store/state/todo.state'; 
import { selectedTodos } from '../store/selector/todo.selector'; 

@Injectable()
export class TodoService {
public todos$: Observable<Todo[]>;
public constructor(private _http: HttpClient, private _store: Store<TodoState>)
{
this.todos$ = this._store.pipe(select(selectedTodos));
}
public fetchTodos(): Observable<[Todo]> {
return this._http.get<[Todo]>("https://jsonplaceholder.typicode.com/toDo");
}
}