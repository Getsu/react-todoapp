import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { todoListSelector } from "../../redux/todo/selectors";
import { todoActions } from "../../redux/todo";
import { TodoList } from "../TodoList";
import { ItemInput } from "../ItemInput";

export const Todo: React.FC = (): JSX.Element => {
  const todoList = useSelector(todoListSelector);
  const dispatch = useDispatch();

  useEffect((): void => {
    fetch("./test.json")
      .then((res) => res.json())
      .then((res) => {
        dispatch(
          todoActions.fetchedTodo({
            todoList: res.data,
          })
        );
      });
    // eslint-disable-next-line
  }, []);

  const callAddTodo = (inputValue: string) => {
    dispatch(todoActions.addTodo({ inputItem: inputValue }));
  }

  return (
    <div>
      <h1>TODO App</h1>
      {/* <ul>
        {todoList.map((value: ListValue) => {
          return <TodoItem key={value.id} text={value.text} />;
        })}
      </ul> */}
      <ItemInput func={callAddTodo} />;
      <TodoList todoList={todoList} setTodoList={() => { }} />;
    </div>
  );
};
