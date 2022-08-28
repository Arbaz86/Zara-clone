import React from "react";
import { Routes, Route } from "react-router-dom";
import Description from "../Components/Cart/Description";
import Footer from "../Components/Footer";
// import Footer from "../Components/Footer";
import FooterCommon from "../Components/FooterCommon";
import Navbar from "../Components/Navbar";
import MensBlazerCategory from "../Components/Products/MensBlazerCategory";
import ReqAuth from "../Components/ReqAuth";
import AddressPage from "./AddressPage";
import CardPayment from "./CardPayment";
import Cart from "./Cart";
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
        <Route
          path="/description/:key/:id"
          element={
            <>
              <Navbar />
              <Description />
            </>
          }
        />
        <Route path="/in/cart" element={<Cart />} />
        <Route path="/in/athletics" element={<STshirt />} />
        <Route path="/in/address" element={<AddressPage />} />
        <Route path="/in/mens_blazer" element={<MensBlazerCategory />} />
        <Route
          path="/in/cardpayment"
          element={
            <ReqAuth>
              <CardPayment />
            </ReqAuth>
          }
        />
        <Route
          path="/in/payment"
          element={
            <ReqAuth>
              <Payment />
            </ReqAuth>
          }
        />
        <Route
          path="/in/ordersuccess"
          element={
            <ReqAuth>
              <OrderSuccess />
            </ReqAuth>
          }
        />
      </Routes>
    </>
  );
};

export default MainRoutes;
