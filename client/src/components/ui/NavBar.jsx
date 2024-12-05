// import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container className="navbar">
        <Navbar.Brand>logo</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to={"/"}>
            ссылка на карусель
          </NavLink>
          <NavLink className="nav-link" to={"/"}>
            ссылка на 3д модель
          </NavLink>
          <NavLink className="nav-link" to={"/"}>
            ссылка на на обратную связь
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
