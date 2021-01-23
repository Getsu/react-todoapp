import React from "react";
import { TodoItem } from "../TodoItem";
import { ListValue } from "../Todo/Types";

type Props = {
  todoList: ListValue[];
  setTodoList: React.Dispatch<React.SetStateAction<ListValue[]>>
}

export const TodoList: React.FC<Props> = ({ todoList, setTodoList }): JSX.Element => {

  return (
    <ul>
      {
        todoList.map((value: ListValue) => {
          return <TodoItem key={value.id} text={value.text} />;
        })}
    </ul>
  )

};
