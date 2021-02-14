import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import axe from "../images/axe.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
      <>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
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
            </Collapse>
          </div>
        </Navbar>
        <div className="row m-4">
          <img
            src={logo}
            className="mx-auto img-fluid"
            width="1000"
            alt="Vegan jerky deathmatch logo"
          />
        </div>
        <hr />
      </>
    );
  }
}

export default Header;
