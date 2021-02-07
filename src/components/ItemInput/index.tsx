import React, { useState } from "react";

type Props = {
  func: (inputValue: string) => void;
};

export const ItemInput: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    props.func(inputValue);
    setInputValue("");
  };

  return (
    <div className="inputForm">
      <input
        type="text"
        className="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd} className="button_add">
        追加
      </button>
    </div>
  );
};
