import React from "react";
import { Container, Nav, NavbarBrand, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="bg-primary navbar-expand">
      <Container>
        <NavbarBrand>TRAINEESAPP</NavbarBrand>
        <Nav>
          <Nav.Item>
            <Link to="/trainees" className="nav-link">
              TRAINEES
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/addtrainee" className="nav-link">
              ADD
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
