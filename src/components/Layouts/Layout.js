import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import kiwi from '../../assets/logosite.png'

import React, { Component }  from 'react';

const Layout = () => {
  return (
    <>
      <header>
        <Header header_image={kiwi} />
      </header>

      <Outlet />

      <Footer />
    </>
  )
};

export default Layout;