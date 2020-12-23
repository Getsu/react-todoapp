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
  onChange(keyValue) {
    this.setState(keyValue)
  }

  add (todoElement) {
    this.setState({
      todoList: this.state.todoList.concat(todoElement),
      value: "",
    });
  }

  handleDelete(id) {
    const todoList = [...this.state.todoList];
    let index = 0;
    const isSameId = (element) => element.id == id;
    index = todoList.findIndex(isSameId);
    // todoList.map((element, idx) => {
    //   if (element.id == id) {
    //     index = idx
    //   }
    // })
    todoList.splice(index, 1)
    this.setState({ todoList });
  }

  // render() {
  //   // console.log(this.state.todoList.map(element));
  //   const todoListNode = this.state.todoList.map(element => {
  //     return (
  //       <TodoElement
  //         element={element}
  //         key={element.id}
  //         onDelete={() => this.handleDelete()}
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
              onDelete={id => this.handleDelete(id)}
              {...this.state}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;