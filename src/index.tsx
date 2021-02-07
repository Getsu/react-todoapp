import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Todo } from "./components/Todo/index";
import "./index.css";
import { store } from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById("root") // id='root'の要素にrenderする
);


