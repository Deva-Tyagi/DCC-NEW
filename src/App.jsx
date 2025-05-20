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

// Create a component to forcefully reset scroll and clear all GSAP animations
function ScrollReset() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Kill all GSAP animations and scroll triggers
    gsap.killTweensOf(window);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Force scroll position reset with multiple approaches
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.scrollTo(0, 0);
    
    // Additional forced reset after a slight delay
    const timeoutId = setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.scrollTo(0, 0);
      
      // Refresh scroll triggers after navigation
      ScrollTrigger.refresh(true);
    }, 50);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
}

// AppContent component to handle route rendering
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
        
        // Force scroll to top when content changes
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 300); // Match this with your CSS transition time
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