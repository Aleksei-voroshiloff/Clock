// import React from "react";
import { Outlet } from 'react-router-dom';
// import Header from "./ui/Header";
import { Container } from 'react-bootstrap';
import NavBar from './ui/NavBar';
import FeedbackForm from './ui/FeedbackForm';
import History from '../components/ui/History';


function Layout() {
  return (
    <>
      <Container>
        <NavBar />
        <History/>
        <Outlet />
        <FeedbackForm />
        <h1> feedback</h1>
      </Container>
    </>
  );
}

export default Layout;
