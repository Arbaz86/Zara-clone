import React from "react";
import { Routes, Route } from "react-router-dom";
import FooterCommon from "../Components/FooterCommon";
import Navbar from "../Components/Navbar";
import Homepage from "./Homepage";
import Login from "./Login";
import PreLandingPage from "./PreLandingPage";
import SearchProduct from "./SearchProduct";
import SignUp from "./SignUp";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PreLandingPage />} />
        <Route
          path="/in"
          element={
            <>
              <Navbar />
              <Homepage />
              <FooterCommon />
            </>
          }
        />
        <Route
          path="/in/search"
          element={
            <>
              <Navbar />
              <SearchProduct />
              <FooterCommon />
            </>
          }
        />
        <Route
          path="/in/signup"
          element={
            <>
              <Navbar />
              <SignUp />
              <FooterCommon />
            </>
          }
        />
        <Route
          path="/in/login"
          element={
            <>
              <Navbar />
              <Login />
              <FooterCommon />
            </>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default MainRoutes;
