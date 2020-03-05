import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    height: 90px;
    border-bottom: 1px solid #bbb;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
      text-decoration: none;
      transition: all 1s;
    }
  }
`;

export const NavbarLanding = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Expense Management App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/signup">Sign up</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">Log in</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavbarLanding;
