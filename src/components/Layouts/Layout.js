import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";

import React, { Component }  from 'react';

const Layout = () => {
  return (
    <>
      <header>
        <Header/>
      </header>

      <Outlet />

      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  )
};

export default Layout;