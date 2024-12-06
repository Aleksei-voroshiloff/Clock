// import React from "react";
import { Outlet } from 'react-router-dom';
// import Header from "./ui/Header";
import { Container } from "react-bootstrap";
import NavBar from "./ui/NavBar";
import Loader from "../HOCs/Loader";
import Cookie from "./ui/Cookie";
import FeedbackForm from "./ui/FeedbackForm";
import History from "./ui/History";

function Layout({ logoutHandler, user }) {
  return (
    <>
      <Container>
        <Loader className="loader" isLoading={user?.status === "logging"}>
          <NavBar logoutHandler={logoutHandler} user={user} />
          <History/>
          <Outlet />
          <FeedbackForm />
        <h1
          style={{
            textAlign: "center",
          }}
        >
         
        </h1>
          <Cookie />
        </Loader>
      </Container>
    </>
  );
}

export default Layout;
