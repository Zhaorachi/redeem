import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={Login} />
          <Route exact path={"/home"} component={Home} />
        </Switch>
      </Router>
    );
  }
}
export default App;
