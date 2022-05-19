import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileHeader from "./components/MobileHeader/index";
import Header from "./components/Header/public";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import Contact from "./components/Contact/index";
import Landing from "./components/Landing/index";
import "./components/Landing/public/css/words.scss";
import LandingSolutions from "./components/Solutions/landing-solutions/index";
import AdSolutions from "./components/Solutions/ad-solutions/index";
import Knowledge from "./components/Knowledge";
import Pricing from "./components/Pricing/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <Header />
      <MobileHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Footer />
            </>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="knowledge"
          element={
            <>
              <Knowledge />
              <Footer />
            </>
          }
        />

        <Route
          path="landing-solutions"
          element={
            <>
              <LandingSolutions />
              <Footer />{" "}
            </>
          }
        />
        <Route
          path="advertising-solutions"
          element={
            <>
              <AdSolutions />
              <Footer />{" "}
            </>
          }
        />
        <Route
          path="pricing"
          element={
            <>
              <Pricing /> <Footer />{" "}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
