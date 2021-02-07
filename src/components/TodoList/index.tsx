import React from "react";
import { TodoItem } from "../TodoItem";
import { ListValue } from "../Todo/Types"


type Props = {
  todoList: ListValue[];
  setTodoList: React.Dispatch<React.SetStateAction<ListValue[]>>
}

export const TodoList: React.FC<Props> = ({ todoList, setTodoList }): JSX.Element => {

  const handleDelete = (item: ListValue) => {
    setTodoList(prev => prev.filter(t =>
      t.id !== item.id
    ));
  }

  return (
    <ul>
      {
        todoList.map((value: ListValue) => {
          return <TodoItem
            key={value.id}
            item={value}
            handleDelete={handleDelete}
          />;
        })}
    </ul>
  )

};
