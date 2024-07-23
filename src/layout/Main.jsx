import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar';
import Header from './Header';

const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Outlet />
    </>
  );
};

export default Main