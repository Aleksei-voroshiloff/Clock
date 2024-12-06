// import React from "react";
import { Outlet } from 'react-router-dom';
// import Header from "./ui/Header";

import { Container } from "react-bootstrap";
import NavBar from "./ui/NavBar";
import FeedbackForm from "./ui/FeedbackForm";
import History from "./ui/History";
import { Clock3d } from './ui/Clock3d';

function Layout() {
  return (
    <>

      <div>
        <NavBar />
        <History/>
        <Outlet />
        {/* <Clock3d /> */}
        <FeedbackForm />
        <h1
          style={{
            textAlign: "center",
          }}
        >
          {" "}
          feedback
        </h1>
      </div>

    </>
  );
}

export default Layout;
