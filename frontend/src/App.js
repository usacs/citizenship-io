import React, { Component } from "react";
import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";
import MakeProfile from "./MakeProfile";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserProvider from "./js/userContext";


class App extends Component {
  constructor(){
    super();
    this.state = {
      login_state:{
        authenticated:false,
        token:""
      }  
    }
    this.setLogin = this.setLogin.bind(this);
  }
  setLogin(obj){
    this.setState({
      login_state:obj
    });
    console.log(obj);
  }
  render() {
    return (
        <Router>
            <div>
              <Navbar />
              <Route path="/en/aboutus" component={AboutUs} />
              <Route path="/en/login" render={(props)=><Login {...props} setLogin={this.setLogin}/>}/>
              <Route path="/en/signup" component={SignUp} />
              <Route path="/en/makeprofile" component={MakeProfile} />
              <Route exact path="/en/" component={HomePage} />
            </div>
        </Router>
    );
  }
}

export default App;
