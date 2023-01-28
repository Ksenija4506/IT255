import { Action } from '@ngrx/store';
import { Todo } from 'src/app/interface/todo';

export enum EnumTodoAction {
GetTodos = '[Todo] Get Todos',
GetTodosSuccess = '[Todo] Get Todos Success'
}
export class GetTodos implements Action {
public readonly type = EnumTodoAction.GetTodos;
}
export class GetTodosSuccess implements Action {
public readonly type = EnumTodoAction.GetTodosSuccess;
constructor(public payload: Todo[]) {}
}
export type TodoActions = GetTodos | GetTodosSuccess;