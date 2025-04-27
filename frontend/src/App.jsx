import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Gallery from './components/Gallery';
import Footer from "./components/Footer";
import ChatBot from './components/ChatBot';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 1000); // Adjust based on your animation duration
  
    return () => clearTimeout(timer);
  }, []);
  

  const location = useLocation();

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </AnimatePresence>
      <ChatBot/>
      <Footer />
    </>
  );
}

export default App;
