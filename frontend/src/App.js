import React, { Component } from "react";
import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";
import MakeProfile from "./MakeProfile";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/makeprofile" component={MakeProfile} />
          <Route path="/homepage" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
