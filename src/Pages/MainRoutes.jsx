import React from "react";
import { Routes, Route } from "react-router-dom";
import AddToCartPage from "../Components/Cart/AddToCartPage";
import Description from "../Components/Cart/Description";
import Footer from "../Components/Footer";
// import Footer from "../Components/Footer";
import FooterCommon from "../Components/FooterCommon";
import Navbar from "../Components/Navbar";
import MensBlazerCategory from "../Components/Products/MensBlazerCategory";
import ReqAuth from "../Components/ReqAuth";
import AddressPage from "./AddressPage";
import CardPayment from "./CardPayment";
import Homepage from "./Homepage";
import JeansPage from "./JeansPage";
import Login from "./Login";

import MenLandingPage from "./MenLandingPage";
import OrderSuccess from "./OrderSuccess";
import Payment from "./Payment";

import PreLandingPage from "./PreLandingPage";

import SearchProduct from "./SearchProduct";
import SignUp from "./SignUp";
import STshirt from "./STshirt";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PreLandingPage overflowY="hidden" />} />
        <Route
          path="/in"
          element={
            <>
              <Navbar />
              <MenLandingPage />
            </>
          }
        />
        <Route
          path="/in/search"
          element={
            <>
              <Navbar />
              <SearchProduct />
              <Footer />
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
              <Footer />
            </>
          }
        />
        <Route path="/in/jeans" element={<JeansPage />} />
        <Route path="/description/:key/:id" element={<Description />} />
        <Route path="/in/cart" element={<AddToCartPage />} />
        <Route path="/in/athletics" element={<STshirt />} />
        <Route path="/in/address" element={<AddressPage />} />
        <Route path="/in/mens_blazer" element={<MensBlazerCategory />} />
        <Route path="/in/cardpayment" element={<CardPayment />} />
        <Route path="/in/payment" element={<Payment />} />
        <Route path="/in/ordersuccess" element={<OrderSuccess />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
