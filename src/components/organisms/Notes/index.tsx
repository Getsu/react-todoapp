import React from "react";


export const Notes: React.FC = () => {


  return (
    <div className="textArea">
      <p>
        <label>メモを記入してください。</label>
      </p>
      <textarea id="memo" name="memo" rows={15} cols={50}></textarea>
    </div>
  );
};
