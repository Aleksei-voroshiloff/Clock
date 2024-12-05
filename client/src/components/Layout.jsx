// import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./ui/Header";
import { Container, Navbar } from "react-bootstrap";

function Layout({}) {
  return (
    <>
      <Container>
        <Navbar  />
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
