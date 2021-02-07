import { Store } from "..";

// セレクターの宣言
export const todoListSelector = (state: Store) => {
  return state.todo.todoList;
};
