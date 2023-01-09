import { Todo } from "src/app/interfaces/todo"; 

export interface TodoState {
    todos : Array<Todo>;
}

export const initialTodosState : TodoState = {
    todos: []
};