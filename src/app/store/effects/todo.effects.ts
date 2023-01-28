import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { GetTodos, EnumTodoAction, GetTodosSuccess } from "../actions/todo.actions";
import { switchMap } from 'rxjs/operators';
import { TodoService } from "src/app/services/todo.service";
import { Todo } from "src/app/interface/todo";


@Injectable()
export class PostEffect {
constructor( private _actions$ : Actions,
private _todoService : TodoService ) {
}

getTodos$ = createEffect(() => this._actions$.pipe(
    ofType<GetTodos>(EnumTodoAction.GetTodos),
switchMap(() => this._todoService.fetchTodos()),
switchMap((todoHttp: Todo[]) => {
return of(new GetTodosSuccess(todoHttp))
})
),
);
}
