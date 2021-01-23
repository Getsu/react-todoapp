import React, { useState, useEffect } from "react";
// import { useElement } from './useElement';
// import { useAdder } from './useAdder';

export const App =  () => {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  // const [data, setData] = useState("");
  // useEffect(() => {
  //   const data = fetch("http://example.com/api/user")
  //   setData(data);
  // },[])

  useEffect(() => {
    fetch("./test.json")
      .then( res => res.json() )
      .then( res => {
        console.log("res: ", {res});
        setTodoList(res.data);
      });
  }, [])

  const onChange = (keyValue) => {
    setValue(keyValue);
    // console.log('追加： ', {value})
  };

  const add = (todoElement) => {
    setTodoList (todoList.concat(todoElement));
    setValue ("");
  };

  const handleDelete = (id) => {
    const todoList = [...this.todoList];
    const isSameId = (element) => element.id === id;
    const index = todoList.findIndex(isSameId);

    todoList.splice(index, 1);
    setTodoList (todoList);
  };
  console.log("value: ", value);
  // useAdder();

  return (
    <div>
      <h1>TODO App</h1>
      <ul>
        <li>
          {todoList.map(
            (value) => {
              return <li key={value.id}>{value.text}</li>
            }
          )}
        </li>
      </ul>
      {
      /* <useAdder
        onChange={keyValue => onChange(keyValue)}
        add={todoElement => add(todoElement)}
      />
      */}
      {/*
      <ul>
        {todoList.map(element =>(
          <useElement
            key={element.id}
            element={element}
            onDelete={id => handleDelete(id)}
          />
        ))}
      </ul>
      */}
    </div>
    // useAdder()
  );

}

/*
  class表記
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
    const isSameId = (element) => element.id == id;
    const index = todoList.findIndex(isSameId);

    todoList.splice(index, 1)
    this.setState({ todoList });
  }


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
            <useElement
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
} */

// export default App;
