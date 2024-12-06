import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import { NavLink } from "react-router-dom";

import '../../../public/assets/styles/style.css'; // Импортируем стили



export default function NavBar({ logoutHandler, user }) { 
    console.log(user);
    
  return (
    <Navbar className="fixed-top" bg="dark" data-bs-theme="dark"
      <Container className="navbar">
        <Navbar.Brand href="/">logo</Navbar.Brand>
     <Nav className="me-auto">
          {user.status === "logged" ? user.user.email : "🕰️"}
        </Navbar.Brand>
          {user.status === "logged" && (
            <>
              <button className="nav-link" onClick={logoutHandler}>Выйти</button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
