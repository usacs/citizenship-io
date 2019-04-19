import React, { Component } from "react";
import styled from 'styled-components';


 const Navbar = styled.div`
  font-weight: 700;
  color: white;
  font-size: 12px;
  height: 40px;
  display:inline-block;
  width: 100%;
`;

const NavLink = styled.a`
display:inline-block;
color:	#ADD8E6;
padding:10px;
`;

class NavBar extends Component {
    render() {
      return (
        <div>
        <Navbar>
            <NavLink  href="//">Profie</NavLink>
            <NavLink  href="//">Study</NavLink>
            <NavLink  href="//">Naturaization</NavLink>
            <NavLink  href="//">Incentives</NavLink>
            <NavLink  href="//">About Us</NavLink>
        </Navbar>
      </div>
         

      );
    }
  }
  
  export default NavBar;