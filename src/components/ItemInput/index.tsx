import React, { useState } from "react";
import { ListValue } from "../Todo/Types";

type Props = {
  setTodoList: React.Dispatch<React.SetStateAction<ListValue[]>>
  todoList: ListValue[];
}

export const ItemInput: React.FC<Props> = ({ setTodoList, todoList }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [count, setCount] = useState<number>(todoList.length + 1);

  const handleInputChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    setCount(count + 1);

    const newItem: ListValue = {
      id: count,
      text: inputValue
    }

    setTodoList([newItem, ...todoList]);
    setInputValue("");
  }


  return (

    <div className="inputForm">
      <input
        type="tet"
        className="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={handleAdd}
        className="button_add">追加</button>
    </div>

  )

};
