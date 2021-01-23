
import React from "react";

export const useAdder = (props) => {
  const onChange = (e) => {
    props.onChange({
      value: e.target.value,
    })
  } ;

  const add = () => {
    const todoElement = {
      content: props.value,
      id: props.todoList.length + 1,
    }
    props.add(todoElement)
  };

  return(
    console.log("useAdder called"),
    <div>
      <span>test</span>
      <input
        type="text"
        value={props.value}
        // value="test"
        onChange={e => onChange(e)}
      />
      <button onClick={() => add()}>追加</button>
    </div>
  );
  
};

// class AddTodo extends React.Component {

//   onChange(e) {
//     this.props.onChange({
//       value: e.target.value,
//     })
//   }

//   add () {
//     const todoElement = {
//       content: this.props.value,
//       id: this.props.todoList.length + 1,
//     }
//     this.props.add(todoElement)
//   }

//   render() {
//     return(
//       <div>
//         <input
//           type="text"
//           value={this.props.value}
//           onChange={e => this.onChange(e)}
//         />
//         <button onClick={() => this.add()}>追加</button>
//       </div>
//     );
//   }
// }

// export default AddTodo;