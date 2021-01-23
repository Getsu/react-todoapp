
import React from "react";

type Props = {
  key: number;
  text: string;
}

export const TodoItem: React.FC<Props> = (value: {key: number, text: string}): JSX.Element => {
  return <li>{value.text}</li>;
};
