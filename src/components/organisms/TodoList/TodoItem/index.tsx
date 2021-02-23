import React from "react";
import { ListValue } from "../../../pages/TodoPage/Types";

type Props = {
  item: ListValue;
  onClick: () => void;
};

export const TodoItem: React.FC<Props> = (props): JSX.Element => {
  return (
    <li>
      <span>{props.item.text}</span>
      <button onClick={props.onClick} className="button_delete">
        削除
      </button>
    </li>
  );
};
