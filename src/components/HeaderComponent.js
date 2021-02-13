import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png';
import axe from '../images/axe.png';

class Header extends Component {
  
  render() {
    return (
      <React.Fragment>              
        <Navbar dark sticky="top" expand="md">
          <div className="container">
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                  <img src={axe} className="axe-small" height="40"alt="Axe Logo" href="/" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/rankings">
                  <img src={axe} className="axe-small" height="40"alt="Axe Logo" href="/" /> Rankings
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/match">
                  <img src={axe} className="axe-small" height="40"alt="Axe Logo" href="/" /> Matches
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                  <img src={axe} className="axe-small" height="40"alt="Axe Logo" href="/" /> About Us
                  </NavLink>
                </NavItem>
              </Nav>
          </div>
        </Navbar>
        <div className="row m-5"><img src={logo} className="mx-auto" width="1000"alt="Vegan jerky deathmatch logo"/></div>
        <hr/> 
      </React.Fragment>
    );
  }
}

export default Header;
