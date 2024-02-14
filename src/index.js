import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layouts/Layout';
import Home from './components/Home';
import NoPage from './components/Layouts/NoPageFound';


const useScript = (url, selector = 'body', async = true) => {
  useEffect(() => {
    const element = document.querySelector(selector)
    const script = document.createElement('script')
    script.src = url
    script.async = async
    element.appendChild(script)
    return () => {
      element.removeChild(script)
    }
  }, [url])
}


export default function App() {
  
  
  useScript("https://code.jquery.com/jquery-3.2.1.slim.min.js")
  useScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js")
  useScript("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js")
  useScript("https://code.jquery.com/jquery-3.2.1.slim.min.js")
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NoPage />} />
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
