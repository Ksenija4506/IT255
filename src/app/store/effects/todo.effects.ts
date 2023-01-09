import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { GetTodos, EnumTodoAction, GetTodosSuccess } from "../actions/todo.actions";
import { switchMap } from "rxjs";
import { Todo } from "src/app/interfaces/todo";
import { TodoServise } from "src/app/services/todo.service";

@Injectable()
export class TodoEffect {
    constructor(private _actions$: Actions,
                private _todoServise : TodoServise) {

                }

@Effect()
getTodos$ = this._actions$.pipe(
    ofType<GetTodos>(EnumTodoAction.GetTodos),
    switchMap(() => this._todoServise.fetchTodos()),
    switchMap((todoHttp: Todo[]) => {
        return of(new GetTodosSuccess(todoHttp))
    })
);
}