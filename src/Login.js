import React, { Component } from "react";
import styled from "styled-components";

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
  render() {
    return (
      <div>
        <Main>
          <Container>
            <Logo src="/logo.png" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button>Login</Button>
            <Link>Forgot your password?</Link>
            <SignUp>New here? Sign up.</SignUp>
          </Container>
        </Main>
      </div>
    );
  }
}

export default App;
