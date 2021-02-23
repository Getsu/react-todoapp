import React from "react";
// import { TodoItem } from "../TodoItem";
import { ListValue } from "../../pages/TodoPage/Types";

type Props = {
  todoList: ListValue[];
  deleteTodo: (deleteID: number) => void;
};

export const TodoList: React.FC<Props> = (props): JSX.Element => {
  return (
    <ul>
      {props.todoList.map((value: ListValue) => {
        const itemDelete = () => {
          props.deleteTodo(value.id);
        };
        return (
          <li key={value.id}>
            <TodoItem item={value} onClick={itemDelete} />
          </li>
        );
      })}
    </ul>
  );
};

// 以下、別ファイル
type TodoItemProps = {
  item: ListValue;
  onClick: () => void;
};

export const TodoItem: React.FC<TodoItemProps> = (props): JSX.Element => {
  return (
    <div>
      <span>{props.item.text}</span>
      <button onClick={props.onClick} className="button_delete">
        削除
      </button>
    </div>
  );
};
