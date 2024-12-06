import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import { NavLink } from "react-router-dom";

import "../../../public/assets/styles/style.css"; // Импортируем стили

export default function NavBar({ logoutHandler, user }) {
  console.log(user);

  return (
    <Navbar className="fixed-top" bg="dark" data-bs-theme="dark">
      <Container className="navbar">
        <Navbar.Brand href="/">🕰️TIME MAGIC</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#history">История</Nav.Link>
          <Nav.Link href="#corusel">Карусель</Nav.Link>
          <Nav.Link href="#feedback">форма для заказов</Nav.Link>
        </Nav>
        {/* {user.status === "logged" ? user.user.email : "🕰️"} */}

        {user.status === "logged" && (
          <>
            <button className="nav-link" onClick={logoutHandler}>
              Выйти
            </button>
          </>
        )}
      </Container>
    </Navbar>
  );
}
