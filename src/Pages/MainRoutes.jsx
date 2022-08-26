import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import FooterCommon from "../components/FooterCommon";
import Navbar from "../components/Navbar";
import Homepage from "./Homepage";
import Login from "./Login";
import SearchProduct from "./SearchProduct";
import SignUp from "./SignUp";

const MainRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<SearchProduct />} />
      <Route path='/signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
    </Routes>
    <Footer/>
    <FooterCommon/>
    </>
  );
};

export default MainRoutes;
