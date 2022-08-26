import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Homepage from "./Homepage";
import Login from "./Login";
import PreLandingPage from "./PreLandingPage";
import SearchProduct from "./SearchProduct";
import SignUp from "./SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PreLandingPage />} />
      <Route path="/in" element={<Homepage />} />
      <Route path="/search" element={<SearchProduct />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
