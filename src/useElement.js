
import React from "react";

export const useElement = (props) => {
  const onDelete = () => {
    props.onDelete(props.element.id)
  };

  const element = props;

  return (
    // console.log("useElement called"),
    <div>
      <li>
        <span>{element.content}</span>
        <button onClick={() => onDelete(element.id)}>削除</button>
      </li>
    </div>
  );
};


// class TodoElement extends React.Component {
//   onDelete() {
//     this.props.onDelete(this.props.element.id)
//   }
//   render() {
//     const {
//       element: {id},
//       onDelete
//     } = this.props;

//     return (
//       <li>
//         <span>{this.props.element.content}</span>
//         <button onClick={() => onDelete(id)}>削除</button>
//       </li>
//     );
//   }
// }

// export default TodoElement;
