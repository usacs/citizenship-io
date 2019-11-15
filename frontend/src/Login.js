import React, { Component } from "react";
import { Link as L } from "react-router-dom";
import styled from "styled-components";
import logo from "./static/logo.png";
import Axios from "axios";
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
        <div className="full-page darkblue justified-left aligned-center column">
            <div className="centerer fill_container cap-width-50em padded" style={{flexGrow:2}}>
              <input className="input" value="email" />
              <input className="input" value="password" />
              <div className="red button">
                TEST
              </div>
              <div className="blue button">
                TEST
              </div>
              <div className="grid-responsive full-width">
                <div className="row">
                  <div className="col-6-12-mobile lightpadding">
                    <div className="red button">TEST2</div>
                  </div>
                  <div className="col-6-12-mobile lightpadding">
                    <div className="red button">TEST2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Login;
