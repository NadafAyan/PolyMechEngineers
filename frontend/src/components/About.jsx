import {React, useEffect} from "react";
import { motion } from "framer-motion";
import bgimg from "../assets/Compancy image.jpg";

import ServiceExplanation from "./ServiceExplanation";
// import ScrollingClient from "./ScrollingClient";

const About = ({ fullHeight = true }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <title>About us | PolyMech Engineers</title>

      <div
        className={`relative w-full flex flex-col items-center justify-center ${
          fullHeight ? "min-h-screen" : "my-10"
        }`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl text-white font-bold text-center pt-6 tracking-wider font-Montserrat">
          ABOUT{" "}
          <span className="text-yellow-400 px-2 pr-14 rounded-r-3xl tracking-wider">
            US
          </span> </h1>

          <div className="bg-[#000000ad] text-white p-8 rounded-lg shadow-lg max-w-6xl w-full z-10">
            <h2 className="text-5xl tracking-wider py-10 font-bold mb-10 text-center text-gray-200">
              Driving Innovation in EDM Solutions
            </h2>

            <div className="flex items-center justify-center mb-6">
              <span className="text-5xl font-bold text-white mr-5">Our</span>
              <span className="text-5xl font-bold bg-[#feb602] text-black px-4 py-1 pr-15 rounded-r-xl ">
                Mission
              </span>
            </div>

            <p className="text-xl pt-1 text-center tracking-wide font-medium text-gray-300 pb-7">
              We empower industries with precision-engineered graphite electrodes
              that optimize EDM performance.
            </p>
          </div>
        </div>
      </div>
      <ServiceExplanation/>
      {/* <ScrollingClient/> */}
    </motion.div>
  );
};

export default About;
