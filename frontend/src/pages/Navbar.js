import {withRouter} from "react-router-dom";
import React, { Component } from "react";
import Axios from "axios";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Navbar extends Component {
  constructor(){
    super();
    console.log('test');
  }
  handleLogout() {
    let headers = {};
    headers["auth-token"] = this.props.login_state.token;
    
    Axios({
      method: "post", url: "/api/logout", headers: headers
    }).then((res) => {
      if(res.data.status == "success"){
       this.props.history.push("/en/");
       this.props.setLogin({
        authenticated:false,
        token:"",
        email:""
       })
      }
      else{
        console.log("testewr");
      }
    })
  }
  render() {
    let get_right_component = (auth) => {
      if(auth.authenticated == true){
        return(
          <div className="lightpadding navbar-item navbar-item-login nav-auth">
            {auth.email} 
            <span onClick={()=>{this.handleLogout()}} className="nav-logout">Log Out</span>
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

export default withRouter(Navbar)