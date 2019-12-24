import React, { Component } from "react";
import Axios from "axios";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      password2:""
    };
    this.handleChangeEmail.bind(this);
    this.handleChangePassword.bind(this);
    this.handleChangePasswordConfirm.bind(this);
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
  
  handleChangePasswordConfirm = e => {
    this.setState({
      password2: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const password2 = this.state.password2;
    console.log(password + " " + password2);
    if(password === password2){
      const request = {
        email: this.state.email,
        password: this.state.password
      };
      Axios.post(`/api/register`, request).then(res => {
        // if successful re-route to profile
        if (res.data.status === "success") {
          this.props.history.push("/en/quiz");
        } else {
          console.log(res.data);
        }
      });
    }
    else{
      alert("Passwords must match!");
    }
  };

  render() {
    return (
      <div className="full-page darkblue justified-left aligned-center column">
        <div
          className="centerer fill_container cap-width-50em padded"
          style={{ flexGrow: 2 }}
        >
          <h1>SIGNUP</h1>
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
          <input
            className="input"
            onChange={this.handleChangePasswordConfirm}
            type="password"
            placeholder="confirm password"
          />
          <div onClick={this.handleSubmit} className="red button">
            SUBMIT
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
