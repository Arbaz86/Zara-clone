import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import SearchProduct from "./SearchProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<SearchProduct />} />
    </Routes>
  );
};

export default MainRoutes;
