import  { useEffect, useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './components/pages/ErrorPage';
import MainPage from './components/pages/MainPage';
import axios from 'axios';
import Layout from './components/Layout';
// import axiosInstance, { setAccessToken } from './api/axiosInstance';
import LoginForm from './components/ui/LoginForm';

import RegisterForm from './components/ui/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClockPage from './components/pages/ClockPage';



function App() {
  const [user, setUser] = useState({ status: 'logging' });

  useEffect(() => {
    axios('/tokens/refresh')
      .then(({ data }) => {
        setTimeout(() => {
          setUser({ status: 'logged', user: data.user });
        }, 1000);
        // setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: 'guest', user: null });
        // setAccessToken('');
      });
  }, []);

  // function loginHandler(data) {
  //   axios.post('/auth/login', data).then(({ data }) => {
  //     setUser({ status: 'logged', user: data.user });
  //     setAccessToken(data.accessToken);
  //   });
  // }

  // function logoutHandler() {
  //   axios
  //     .get('/auth/logout')
  //     .then(() => setUser({ status: 'guest', user: null }));
  // }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout  />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Navigate to="/clock" />,
        },
        {
          path: '/clock',
          element: <ClockPage />,
        },
        { path: '/signin', element: <LoginForm /> },
        { path: '*', element: <ErrorPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
