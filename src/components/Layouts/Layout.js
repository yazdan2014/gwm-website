import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import React, { Component }  from 'react';

const Layout = () => {
  return (
    <>
      <header>
        <Header/>
      </header>

      <Outlet />

      <Footer />
    </>
  )
};

export default Layout;