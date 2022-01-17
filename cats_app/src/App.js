import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./GreetingCat";
import RandomCat from "./RandomCat";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={RandomCat} />
      </Switch>
      <Switch>
        <Route exact path="/cat/:greeting" component={GreetingCat} />
      </Switch>
    </Router>
  );
}

export default App;
