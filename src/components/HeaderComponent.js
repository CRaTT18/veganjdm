import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import axe from "../images/axe.png";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <img
                    src={axe}
                    className="axe-small"
                    height="40"
                    alt="Axe Logo"
                    href="/"
                  />{" "}
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/rankings">
                  <img
                    src={axe}
                    className="axe-small"
                    height="40"
                    alt="Axe Logo"
                    href="/"
                  />{" "}
                  Rankings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/match">
                  <img
                    src={axe}
                    className="axe-small"
                    height="40"
                    alt="Axe Logo"
                    href="/"
                  />{" "}
                  Matches
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <img
                    src={axe}
                    className="axe-small"
                    height="40"
                    alt="Axe Logo"
                    href="/"
                  />{" "}
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <img
                    src={axe}
                    className="axe-small"
                    height="40"
                    alt="Axe Logo"
                    href="/"
                  />{" "}
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        <div className="row m-5">
          <a href="/home" className="mx-auto">
            <img src={logo} className="img-fluid" width="1000" alt="Vegan jerky deathmatch logo" />
          </a>
        </div>
        <hr />
      </>
    );
  }
}

export default Header;
