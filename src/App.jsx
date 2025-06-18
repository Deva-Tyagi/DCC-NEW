import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Home from "./components/Home-Page/Home";
import PortfolioMain from "./components/Portfolio-Page/PortfolioMain/PortfolioMain";
import Navbar from "./components/Navbar/Navbar";
import AboutMain from "./components/About-Page/AboutMain";
import ContactMain from "./components/Contact-Page/ContactMain";
// import NewFooter from "./components/Footer/NewFooter";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

function ScrollReset() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    gsap.killTweensOf(window);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
    window.scrollTo(0, 0);
    
    const timeoutId = setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.scrollTo(0, 0);
      
      ScrollTrigger.refresh(true);
    }, 50);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
}

function AppContent() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fadeOut");
      setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
        
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 300); 
    }
  }, [location, displayLocation]);
  
  return (
    <div className={`page-transition ${transitionStage}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/portfolio" element={<PortfolioMain />} />
        <Route path="/contact-us" element={<ContactMain />} />
      </Routes>
    </div>
  );
}

const App = () => {
  return (
    <>
      <div>
        <Cursor />
        <Router>
          <ScrollReset />
          <Navbar />
          <AppContent />
          {/* <NewFooter /> */}
          <Footer />
        </Router>
      </div>
    </>
  );
};


export default App;