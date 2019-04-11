import React, { Component } from "react";
import { Link as L } from "react-router-dom";
import styled from "styled-components";
import logo from "./static/logo.png";
import Axios from "axios";

const Logo = styled.img`
  width: 100%;
  margin-bottom: 24px;
  margin-top: 24px;
`;

const Main = styled.div`
  background-color: #334c7b;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 24rem;
`;

const LinkButton = styled.a`
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

const SignUp = styled.a`
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

const Link = styled(L)`
  color: white;
`;

class Login extends Component {
  state = {
    email: "",
    password: "",
    passwordRepeat: ""
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    const request = {
      email: this.state.email,
      password: this.state.password
    };
    Axios.post(`/login`, request).then(res => {
      console.log(email);
      console.log(password);
      // check status code

      console.log(res.data.statusCode);

      // if successful re-route to profile
      if (res.data.statusCode === 200) {
        // *** remember to set status code in backend ***
        this.props.history.push({
          pathname: "/profile",
          state: res.data
        });
      } else {
        // if not successful, return alert
        alert("Validation error occurred. " + res.data);
        console.log("Error " + res.data.statusCode);
      }
    });
  };

  render() {
    return (
      <div>
        <Main>
          <Container>
            <Logo src={logo} />
            <form onSubmit={this.handleSubmit}>
              <Input placeholder="Email" onChange={this.handleChangeEmail} />
              <Input
                placeholder="Password"
                type="password"
                onChange={this.handleChangePassword}
              />
              <Button>Login</Button>
              <LinkButton>Forgot your password?</LinkButton>
              <SignUp>
                New here? <Link to="/signup">Sign up.</Link>
              </SignUp>
            </form>
          </Container>
        </Main>
      </div>
    );
  }
}

export default Login;
