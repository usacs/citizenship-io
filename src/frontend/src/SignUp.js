import React, { Component } from "react";
import styled from "styled-components";
import Axios from "axios";
import logo from "./static/logo.png";

const Logo = styled.img`
  width: 100%;
  margin-bottom: 24px;
  margin-top: 24px;
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

const SignUpBar = styled.div`
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

const Header = styled.div`
  margin: 10px;
  color: white;
  font-weight: 700;
  font-size: 24px;
`;

class SignUp extends Component {
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

  handleChangePasswordRepeat = event => {
    this.setState({ passwordRepeat: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    const passwordRepeat = this.state.passwordRepeat;

    if (this.state.password != this.state.passwordRepeat) {
      alert("Passwords do not match");
      console.error(
        "An error occured while making the request: Passwords do not match"
      );
      //console.log(password);
      //console.log(passwordRepeat);
    } else {
      const request = {
        email: this.state.email,
        password: this.state.password
      };
      Axios.post(`/signup`, request).then(res => {
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
    }
  };

  render() {
    return (
      <div>
        <Main>
          <Container>
            <Logo src={logo} />
            <Header>Sign Up</Header>
            <form onSubmit={this.handleSubmit}>
              <Input placeholder="Email" onChange={this.handleChangeEmail} />
              <Input
                placeholder="Enter a password"
                type="password"
                onChange={this.handleChangePassword}
              />
              <Input
                placeholder="Reenter your Password"
                type="password"
                onChange={this.handleChangePasswordRepeat}
              />
              <Button type="submit">Sign Up</Button>
            </form>
          </Container>
        </Main>
      </div>
    );
  }
}

export default SignUp;
