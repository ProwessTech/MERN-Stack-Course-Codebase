import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar ml-auto">
          
            <NavbarBrand className="brand">
              <h1>ESEC MERN Stack CRUD Operations</h1>
            </NavbarBrand>
          
          <Nav>
            <div className="link-cursor nav-link">
              <Link className="link-text" to="/">Home</Link>
            </div>
            <div className="link-cursor nav-link">
              <Link className="link-text" to="/add">Add New Employee</Link>
            </div>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;