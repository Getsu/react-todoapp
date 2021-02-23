import React from "react";
import { isPropertySignature } from "typescript";

type Props = {
  notes: string;
  func: (inputValue: string) => void;
};
export const Notes: React.FC<Props> = (props) => {

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.func(e.target.value);
  };

  return (
    <div className="textArea">
      <p>
        <label>メモを記入してください。</label>
      </p>
      <textarea
        id="memo"
        name="memo"
        value={props.notes}
        onChange={handleTextAreaChange}
        rows={15}
        cols={50}
      ></textarea>
    </div>
  );
};
