import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoList } from "../../components/TodoList";

// State
type Todo = {
  id: number;
  text: string;
};

type State = {
  todoList: Array<Todo>;
  count: number;
};

const initialState: State = {
  todoList: [],
  count: TodoList.length + 1,
};

type FetchedTodo = PayloadAction<{ todoList: Array<Todo> }>;
type AddTodo = PayloadAction<{ inputItem: string }>;

// Reducer
const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    fetchedTodo: (state, { payload }: FetchedTodo): State => {
      const newCount = payload.todoList.length + 1;
      return { ...state, todoList: payload.todoList, count: newCount };
    },
    addTodo: (state, { payload }: AddTodo): State => {
      const newCount = state.count + 1;
      const newItem: Todo = {
        id: newCount,
        text: payload.inputItem,
      };
      return {
        ...state,
        todoList: [...state.todoList, newItem],
        count: newCount,
      };
    },
  },
});

export const todoActions = todo.actions;
export const todoReducer = todo.reducer;
