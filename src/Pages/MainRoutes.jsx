import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Homepage from "./Homepage";
import Login from "./Login";
import MenLandingPage from "./MenLandingPage";
import SearchProduct from "./SearchProduct";
import SignUp from "./SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/search" element={<SearchProduct />} />
      <Route path='/signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/' element={<MenLandingPage/>}/>
    </Routes>
  );
};

export default MainRoutes;
