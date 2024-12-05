import React, { useEffect, useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import EditEntryPage from './components/pages/EditEntryPage';
import ErrorPage from './components/pages/ErrorPage';
import MainPage from './components/pages/MainPage';
import NewEntryPage from './components/pages/NewEntryPage';
import OneEntryPage from './components/pages/OneEntryPage';
import Layout from './components/Layout';
import axiosInstance, { setAccessToken } from './api/axiosInstance';
import LoginForm from './components/ui/LoginForm';
import RegisterForm from './components/ui/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [user, setUser] = useState({ status: 'logging' });

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then(({ data }) => {
        setTimeout(() => {
          setUser({ status: 'logged', user: data.user });
        }, 1000);
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: 'guest', user: null });
        setAccessToken('');
      });
  }, []);

  function loginHandler(data) {
    axiosInstance.post('/auth/login', data).then(({ data }) => {
      setUser({ status: 'logged', user: data.user });
      setAccessToken(data.accessToken);
    });
  }

  function logoutHandler() {
    axiosInstance
      .get('/auth/logout')
      .then(() => setUser({ status: 'guest', user: null }));
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout logoutHandler={logoutHandler} user={user} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Navigate to="/clock" />,
        },
        {
          path: '/clock',
          element: <MainPage />,
        },
        { path: '/signin', element: <LoginForm loginHandler={loginHandler} /> },
        { path: '*', element: <ErrorPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
