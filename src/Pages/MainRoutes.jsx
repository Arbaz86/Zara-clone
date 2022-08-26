import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Homepage from "./Homepage";
import Login from "./Login";
import SearchProduct from "./SearchProduct";
import SignUp from "./SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/search" element={<SearchProduct />} />
      <Route path='/signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Footer/>}/>
    </Routes>
  );
};

export default MainRoutes;
