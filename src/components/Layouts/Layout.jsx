import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import kiwi from '../../assets/logosite.png'

import Chat from './components/Chat'

import React, { Component }  from 'react';

const Layout = () => {
  return (
    <>
      <style>
          {
            `body{
                font-family: Rubik;
            }`
          }
      </style>
      <header>
        <Header header_image={kiwi} />
      </header>

      <Outlet />
      <Chat />

      <Footer />
    </>
  )
};

export default Layout;