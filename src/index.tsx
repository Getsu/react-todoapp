import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import { TodoPage } from "./components/pages/TodoPage/index";
import "./index.css";
import { store } from "./redux";

import { Router } from "./route";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root") // id='root'の要素にrenderする
);


