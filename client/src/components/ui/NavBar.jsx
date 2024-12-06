import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../../../public/assets/styles/style.css'; // Импортируем стили
export default function NavBar() {

  return (
    <Navbar className="fixed-top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">logo</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#history">История</Nav.Link>
          <Nav.Link href="#corusel">Карусель</Nav.Link>
          <Nav.Link href="#3dmodel">3д модель</Nav.Link>
          <Nav.Link href="#feedback">форма для заказов</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

}
