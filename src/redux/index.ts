import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo";


// ストアの作成
const reducer = combineReducers({
  todo: todoReducer,
});

export const store = configureStore({ reducer });

export type Store = ReturnType<typeof reducer>;
