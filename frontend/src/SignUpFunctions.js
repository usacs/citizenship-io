import axios from "axios";
import React from "react";

handleSubmit = event => {
  event.preventDefault();

  const email = {
    email: this.state.email
  };

  const password = {
    password: this.state.password
  };

  const passwordRepeat = {
    passwordReact: this.state.passwordRepeat
  };

  axios.post(`https://localhost/signup`, { email, password }).then(res => {
    console.log(email);
    console.log(password);
  });
};
