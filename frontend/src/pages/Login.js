import React, { Component } from "react";
import Axios from "axios";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChangeEmail.bind(this);
    this.handleChangePassword.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    let token = "dwajiodwakjdqwj";

    const request = {
      email: this.state.email,
      password: this.state.password
    };
    Axios.post(`/api/login`, request).then(res => {
      console.log(email);
      console.log(password);
      // check status code

      console.log(res.data.statusCode);

      // if successful re-route to profile
      if (res.data.status === "success") {
        token = res.data.token;
        this.props.setLogin({
          email:email,
          token: token,
          authenticated: true
        });
        this.props.history.push("/en/quiz");
        /*
         // *** remember to set status code in backend ***
         this.props.history.push({
           pathname: "/profile",
           state: res.data
         });
         */
      } else {
        console.log(res.data);
      }
    });
  };

  render() {
    return (
      <div className="full-page darkblue justified-left aligned-center column">
        <div
          className="centerer fill_container cap-width-50em padded"
          style={{ flexGrow: 2 }}
        >
          <input
            className="input"
            onChange={this.handleChangeEmail}
            placeholder="email"
          />
          <input
            className="input"
            onChange={this.handleChangePassword}
            type="password"
            placeholder="password"
          />
          <div onClick={this.handleSubmit} className="red button">
            LOGIN
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
