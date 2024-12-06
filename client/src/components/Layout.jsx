// import React from "react";
import { Outlet } from 'react-router-dom';
// import Header from "./ui/Header";


import Loader from '../HOCs/Loader';
import Cookie from './ui/Cookie';
import FeedbackForm from './ui/FeedbackForm';



import { Container } from "react-bootstrap";
import NavBar from "./ui/NavBar";
import History from "./ui/History";
// import { Clock3d } from './ui/Clock3d';
import '../../public/assets/styles/style.css'; // Импортируем стили"



function Layout({ logoutHandler, user }) {
  return (
    <>
      <Container>

        <Loader className="loader" isLoading={user?.status === 'logging'}>
          <NavBar logoutHandler={logoutHandler} user={user} />
          <History />
          <Outlet />
          <FeedbackForm />
          <h1
            style={{
              textAlign: 'center',
            }}
          ></h1>
          <Cookie />
        </Loader>
        {/* <Clock3d /> */}
      </Container>
    </>
  );
}

export default Layout;
