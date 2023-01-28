import { createSelector } from '@ngrx/store';

const selectTodos = (state: any) => state.post;
export const selectedTodos = createSelector(
selectTodos,
(state: any) => {
    return state.todos.todos;
}
);