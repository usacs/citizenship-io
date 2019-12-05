import React, { Component } from "react";
import styled from "styled-components";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/SignUp";
import MakeProfile from "./pages/MakeProfile";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import UserProvider from "./js/userContext";


class Navbar extends Component {
  render() {
    let get_right_component = (auth) => {
      if(auth.authenticated == true){
        return(
          <div className="lightpadding navbar-item navbar-item-login nav-auth">
            {auth.email} 
            <span className="nav-logout">Log Out</span>
          </div>

        )
      }
      else{
        return(
          <span className="lightpadding navbar-item-login">
            <Link className="lightpadding navbar-item" to="/en/signup" >
              <span>Signup</span>
            </Link>
            <Link className="navbar-item" to="/en/login" >
              <span>Login</span>
            </Link>
          </span>
        )
      }
    }
    return(
     <div className="full-width navbar justified-left">
         <Link className="lightpadding navbar-item" to="/en/quiz" >
          <span>Quiz</span>
         </Link>
         <Link className="lightpadding navbar-item" to="/en/aboutus" >
           <span>About Us</span>
         </Link>
         {get_right_component(this.props.login_state)}
     </div>)
  };
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      login_state:{
        authenticated:false,
        token:"",
        email:""
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
              <Navbar login_state={this.state.login_state} />              
              <Route path="/en/aboutus" component={AboutUs} />
              <Route path="/en/login" render={(props)=><Login {...props} setLogin={this.setLogin}/>}/>
              <Route path="/en/quiz" render={(props)=><Quiz login_state={this.state.login_state} {...props}/>}/>
              <Route path="/en/signup" component={SignUp} />
              <Route path="/en/makeprofile" component={MakeProfile} />
              <Route exact path="/en/" component={HomePage} />
            </div>
        </Router>
    );
  }
}

export default App;
