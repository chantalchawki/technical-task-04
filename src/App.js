import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Info from "./Info";
import List from "./List";
import Create from "./Create";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/members" component={List} />
        <Route exact path="/members/create" component={Create} />
        <Route exact path="/members/:id" component={Info} />
      </Switch>
    </Router>
  );
}

export default App;
