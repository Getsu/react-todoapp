
import React from "react";
import { ListValue } from "../Todo/Types";

type Props = {
  item: ListValue;
  handleDelete: (value: ListValue) => void;
}

export const TodoItem: React.FC<Props> = ({item, handleDelete}): JSX.Element => {
  return (
    <li>
      <span>{item.text}</span>
      <button
        onClick={() => handleDelete(item)}
        className="button_delete">削除</button>
    </li>
  );
};
