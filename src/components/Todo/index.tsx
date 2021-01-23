import React, { useState, useEffect } from "react";
import { ListValue } from "./Types";
import { TodoList } from "../TodoList";
import { ItemInput } from "../ItemInput";

export const Todo: React.FC = (): JSX.Element => {

  const [todoList, setTodoList] = useState<ListValue[]>([]);
  // const [value, setValue] = useState<string>("");

  // const _array1: [number, string, boolean] = [1, "abc", true];
  // const _array2: Array<number> = [1, 2, 3];
  // const _array3: number[] = [1, 2, 3];

  useEffect((): void => {
    fetch("./test.json")
      .then((res): any => res.json())
      .then((res): any => {
        setTodoList(res.data);
      });
  }, []);

  return (
    <div>
      <h1>TODO App</h1>
      {/* <ul>
        {todoList.map((value: ListValue) => {
          return <TodoItem key={value.id} text={value.text} />;
        })}
      </ul> */}
      <ItemInput setTodoList={setTodoList} todoList={todoList} />;
      <TodoList todoList={todoList} setTodoList={setTodoList} />;
    </div>
  );
};


