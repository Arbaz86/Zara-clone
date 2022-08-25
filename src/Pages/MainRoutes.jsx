import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Homepage from "./Homepage";

const MainRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
    </>
  );
};

export default MainRoutes;
