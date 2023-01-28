import { Todo } from "src/app/interface/todo";

export interface TodoState {
todos: Array<Todo>;
}
export const initialTodosState: TodoState = {
    todos: []
};