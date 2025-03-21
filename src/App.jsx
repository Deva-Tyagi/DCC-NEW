import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./components/Home-Page/Home";
import PortfolioMain from "./components/Portfolio-Page/PortfolioMain/PortfolioMain";
import Navbar from "./components/Navbar/Navbar";
import AboutMain from "./components/About-Page/AboutMain";
import ContactMain from "./components/Contact-Page/ContactMain";


gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <>
      <div>
        {/* Exclude Banner from animations */}
        <Router>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMain/>} />
              <Route path="/portfolio" element={<PortfolioMain />} />
              <Route path="/contact-us" element={<ContactMain />} />

        </Routes>
        <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
