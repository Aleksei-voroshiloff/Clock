// import React from "react";
import { Outlet } from 'react-router-dom';
// import Header from "./ui/Header";

import { Container } from 'react-bootstrap';
import NavBar from './ui/NavBar';
import FeedbackForm from './ui/FeedbackForm';
import History from './ui/History';
import '../../public/assets/styles/style.css'; // Импортируем стили"

function Layout() {
  return (
    <>
      <div >
        <NavBar />
        <History />
        <Outlet />
        <FeedbackForm />
        <h1
          style={{
            textAlign: 'center',
          }}
        ></h1>
      </div>
    </>
  );
}

export default Layout;
