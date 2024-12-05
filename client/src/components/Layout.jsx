// import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./ui/Header";
import { Container } from "react-bootstrap";
import NavBar from "./ui/NavBar";
import Loader from "../HOCs/Loader";
import Cookie from "./ui/Cookie";

function Layout({ logoutHandler, user }) {
  return (
    <>
      <Container>
        <Loader className="loader" isLoading={user?.status === "logging"}>
          <NavBar logoutHandler={logoutHandler} user={user} />
          <Outlet />
          <Cookie />
        </Loader>
      </Container>
    </>
  );
}

export default Layout;
