import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar';
import Header from './Header';
import SendMail from './sendmail/SendMail';
import Footer from './footer/Footer';

const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Outlet />
      <SendMail/>
      <Footer/>
    </>
  );
};

export default Main