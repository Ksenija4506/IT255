import { createSelector } from "@ngrx/store";

const selectTodos = (state: any) => state.todo;

export const selectedTodos = createSelector (
    selectTodos,
    (state: any) => {
        return state.todos.todos;
    }
);