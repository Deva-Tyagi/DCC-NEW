import React, { useEffect } from "react";
import { gsap } from "gsap";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Home from "./components/Home-Page/Home";
import PortfolioMain from "./components/Portfolio-Page/PortfolioMain/PortfolioMain";
import Navbar from "./components/Navbar/Navbar";
import AboutMain from "./components/About-Page/AboutMain";
import ContactMain from "./components/Contact-Page/ContactMain";
import NewFooter from "./components/Footer/NewFooter";
import Cursor from "./components/Cursor/Cursor";

gsap.registerPlugin(ScrollTrigger);

// Create a ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App = () => {
  return (
    <>
      <div>
        <Cursor />
        <Router>
          <ScrollToTop /> {/* Add this component inside Router */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMain/>} />
            <Route path="/portfolio" element={<PortfolioMain />} />
            <Route path="/contact-us" element={<ContactMain />} />
          </Routes>
          <NewFooter />
        </Router>
      </div>
    </>
  );
};

export default App;