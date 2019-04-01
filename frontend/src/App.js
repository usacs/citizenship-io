import React, { Component } from "react";
import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";
import AboutUs from "./AboutUs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/aboutus" component={AboutUs} />
        </div>
      </Router>
    );
  }
}

export default App;
