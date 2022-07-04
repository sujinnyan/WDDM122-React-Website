import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Head/Header"
import "./App.css"
import Home from "./components/Hero/Home"
import Contact from "./components/Contact/Contact"
import Portfolio from "./components/Portfolio/Portfolio"
import Footer from "./components/Footer"
import Slide from "./components/Slide/Slide"
import { useMediaQuery } from 'react-responsive'




function App() {
  return (
    <>
    <Slide />
    <Header />
    <Routes>
    <Route index element={<Home />}/>
    <Route path="/Portfolio" element={<Portfolio />}/>
    </Routes>
 
    <Home />

    <Contact />
    <Footer />
    </>
  );
}


export default App