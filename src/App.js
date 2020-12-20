import React, { Component } from "react";
import TodoElement from './TodoElement';
import AddTodo from './AddTodo';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      count: 0,
      todoList: [],
      value: "",
    }
  }
  onChange(keyvalue) {
    this.setState(keyvalue)
  }

  add (todoElement) {
    this.setState({
      todoList: this.state.todoList.concat(todoElement),
      value: "",
    });
  }

  handleDlete(id) {
    let todoList = this.state.todoList.concat();
    let index = 0;
    todoList.map((element, idx) => {
      if (element.id == id) {
        index = idx
      }
    })
    todoList.splice(index, 1)
    this.setState({todoList: todoList})
  }

  // render() {
  //   // console.log(this.state.todoList.map(element));
  //   const todoListNode = this.state.todoList.map(element => {
  //     return (
  //       <TodoElement
  //         element={element}
  //         key={element.id}
  //         onDelete={() => this.handleDlete()}
  //       />
  //     );
  //   });
  //   return (
  //     <div>
  //       <h1>TODO APP</h1>
  //       <AddTodo
  //         {...this.state}
  //         onChange={e => this.onChange(e)}
  //         add={() => this.add()}
  //       />
  //       <ul>
  //         {todoListNode}
  //       </ul>
  //     </div>
  //   );
  // }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <h1>TODO App</h1>
        <AddTodo
          {...this.state}
          onChange={keyValue => this.onChange(keyValue)}
          add={todoElement => this.add(todoElement)}
        />
        <ul>
          {todoList.map(element =>(
            <TodoElement
              key={element.id}
              element={element}
              onDelete={id => this.handleDlete(id)}
              {...this.state}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;