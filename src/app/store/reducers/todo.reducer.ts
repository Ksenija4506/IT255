import { TodoActions, EnumTodoAction } from "../actions/todo.actions";
import { initialTodosState } from "../state/todo.state";

export function todoReducer (
    state = initialTodosState,
    action: TodoActions
){
    switch (action.type) {
        case EnumTodoAction.GetTodosSuccess: {
            return {
                ...state,
                todos: action.payload
            };
        }
        default:
            return state;
    }
};