import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo";
import { noteReducer } from "./notes";


// ストアの作成
const reducer = combineReducers({
  todo: todoReducer,
  notes: noteReducer
});

export const store = configureStore({ reducer });

export type Store = ReturnType<typeof reducer>;
