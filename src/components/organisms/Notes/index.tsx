import React from "react";

type Props = {
  notes: string;
  rows?: number;
  cols?: number;
  onChange: (inputValue: string) => void;
};

const ELEMENT_ID = "memo";

export const Notes: React.FC<Props> = (props) => {
  // デフォルト引数
  // 分割代入 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { rows = 15, cols = 50 } = props;

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="textArea">
      <p>
        <label htmlFor={ELEMENT_ID}>メモを記入してください。</label>
      </p>
      <textarea
        id={ELEMENT_ID}
        name="memo"
        value={props.notes}
        onChange={handleTextAreaChange}
        rows={rows}
        cols={cols}
      ></textarea>
    </div>
  );
};
