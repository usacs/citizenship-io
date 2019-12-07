import React, { Component } from "react";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/SignUp";
import MakeProfile from "./pages/MakeProfile";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Navbar from "./pages/Navbar";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
              <Navbar login_state={this.state.login_state} setLogin={this.setLogin}/>
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
