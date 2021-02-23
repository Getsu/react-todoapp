import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { todoListSelector } from "../../../redux/todo/selectors";
import { todoActions } from "../../../redux/todo";
import { TodoList } from "../../organisms/TodoList";
import { ItemInput } from "../../organisms/ItemInput";

export const TodoPage: React.FC = (): JSX.Element => {
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
  };

  const callDeleteTodo = (deleteID: number) => {
    dispatch(todoActions.deleteTodo({ deleteID }));
  };

  return (
    <div>
      <h1>TODO App</h1>
      <ItemInput func={callAddTodo} />;
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} deleteTodo={callDeleteTodo} />
      ) : (
          <div>データがありません</div>
        )}
    </div>
  );
};
