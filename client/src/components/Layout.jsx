// import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./ui/Header";
import { Container} from "react-bootstrap";
import NavBar from "./ui/NavBar";
import FeedbackForm from "./ui/FeedbackForm";

function Layout() {
  return (
    <>
      <Container>
        <NavBar  />
        <Outlet />
        <FeedbackForm  />
        <h1> feedback</h1>
      </Container>
    </>
  );
}

export default Layout;
