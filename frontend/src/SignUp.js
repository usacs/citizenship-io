import React, { Component } from "react";
import styled from "styled-components";
import Axios from "axios";
import logo from "./static/logo.png";

const Logo = styled.img`
  width: 100%;
  margin-bottom: 24px;
`;

const Main = styled.div`
  background-color: #334c7b;
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

/*const SignUp = styled.div`
  color: white;
  width: fit-content;
  font-size: 14px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 15px;
  display: block;
`;*/

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

const Header = styled.div`
  margin: 10px;
  color: white;
  font-weight: 700;
  font-size: 100;
`;

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: ""
    };
  }
  handleLogin = e => {
    e.preventDefault();
    Axios.post("/signup", this.state).then(resp => {
      if (resp.statusCode == 200) {
        //redirect to profile
      }
    });
  };
  render() {
    return (
      <div>
        <Main>
          <Container>
            <img src={logo} />
            <Header>Sign Up</Header>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button>Sign Up</Button>
          </Container>
        </Main>
      </div>
    );
  }
}

export default SignUpPage;
