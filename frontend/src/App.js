import React, { Component } from "react";
import styled from "styled-components";
import SignUpPage from "./SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Home from "./Home";

const Logo = styled.img`
  width: 100%;
  margin-bottom: 24px;
`;

const Main = styled.div`
  background-color: #334c7b;
  padding-top: 100px;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 24rem;
`;

const Link = styled.a`
  font-size: 14px;
  width: fit-content;
  color: white;
  display: block;
  margin: 0 auto;
  margin-top: 16px;
`;

const Input = styled.input`
  color: white;
  font-size: 14px;
  font-family: sans-serif;
  width: 100%;
  border: none;
  border-bottom: 2px solid white;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  appearance: none;
  background-color: transparent;
  margin-bottom: 16px;
`;

const SignUp = styled.div`
  color: white;
  width: fit-content;
  font-size: 14px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 15px;
  display: block;
`;

const Button = styled.button`
  font-weight: 700;
  color: white;
  appearance: none;
  border: none;
  font-size: 16px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: #d03c42;
`;

class App extends Component {
  constructor() {
    super();
  }
  handleSignup = e => {
    this.props.history.push("/signup");
  };
  render() {
    return (
      <div>
        <Router>
          <div className="container-fluid">
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUpPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
