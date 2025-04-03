import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactUsPage from './components/ContactPage';

function App() {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;