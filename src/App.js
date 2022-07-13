import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Head/Header"
import "./App.css"
import Home from "./components/Hero/Home"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer"
import Slide from "./components/Slide/Slide"
import { useMediaQuery } from 'react-responsive'
import Signup from "./components/Signup"
import Signin from "./components/Signin"



function App() {
  return (
    <>
    <Slide />
    <Header />
 
   
    <ToastContainer />
    <Routes>
    <Route path="/" element={<Home />}/>
    {/* <Route path="/AddProduct" element={<AddProduct />}/> */}
    <Route path="/Contact" element={<Contact />}/>
    <Route path="/Signup" element={<Signup />}/>
    <Route path="/Signin" element={<Signin />}/>
    </Routes>
    <Footer />
    </>
  );
}


export default App