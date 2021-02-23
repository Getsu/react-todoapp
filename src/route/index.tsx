import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TodoPage } from "../components/pages/TodoPage";
import { TestPage } from "../components/pages/TestPage";
import { NotePage } from "../components/pages/NotePage";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TodoPage} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/nest">
          <Switch>
            <Route exact path="/nest" component={() => <div>/nest</div>} />
            <Route path="/nest/test" component={() => <div>/nest/test</div>} />
          </Switch>
        </Route>
        <Route exact path="/text" component={NotePage} />
      </Switch>
    </BrowserRouter>
  );
};
