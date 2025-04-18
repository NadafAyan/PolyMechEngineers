import {React, useEffect} from "react";
import { motion } from "framer-motion";
// import image1 from "../assets/landingPage/2.png";
// import image2 from '../assets/homeImage.png';


const About = ({ fullHeight = true }) => {

  useEffect(() => {
      document.body.style.overflow = "hidden";
    
      const timer = setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1000); // Adjust based on your animation duration
    
      return () => clearTimeout(timer);
    }, []);

  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-[#EEF6FA] min-h-screen overflow-hidden"
        >

        <title>About us | PolyMech Engineers</title>
    <div
      className={`relative w-full flex flex-col items-center justify-center bg-[#EEF6FA] ${
        fullHeight ? "min-h-screen" : "my-10"
      } overflow-hidden`}
    >
      {/* <img
        src={image1}
        alt="image1"
        className="absolute inset-0 object-cover opacity-60 z-0 -left-40 top-50"
      />
      <img
        src={image2}
        alt="image1"
        className="absolute right-2 opacity-90 z-0 top-50 -rotate-120"
      /> */}

      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h1 className="text-black  mt-4 text-6xl xl:text-7xl font-bold tracking-wider">
          ABOUT US
        </h1>

        <div
          className="bg-[#000000ad]  // This is black with ~60% opacity text-white p-8 rounded-lg shadow-lg max-w-8xl w-full z-10 "
        >
          <h2 className="text-5xl tracking-wider py-10 px-15 font-bold mb-10 text-center text-gray-200">
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
    </motion.div>
  );
};

export default About;
