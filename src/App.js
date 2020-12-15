import React, { Component } from "react";

class TodoApp extends Component {
  constructor () {
    super ()
    this.state = {
      todoList: [],
      value: "",
    }
  }
  onChange(e) {
    this.setState({value: e.target.value})
  }

  add () {
    // console.log("onClick")
    this.setState({
      todoList: this.state.todoList.concat(this.state.value),
      value: "",
    })
  }

  render() {
    // console.log(this.state.todoList);\
    const todoListNode = this.state.todoList.map((todo, idx) => {
      return <li key={idx}>{todo}</li>
    })
    return (
      <div>
        <h1>TODO APP</h1>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={e => this.onChange(e)}
          />
        </div>
        <button onClick={() => this.add()}>追加</button>
        <ul>
          {todoListNode}
        </ul>
      </div>
    );
  }
}

export default TodoApp;