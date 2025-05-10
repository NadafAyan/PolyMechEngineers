import { React, useEffect } from 'react';
import { motion } from 'framer-motion';
import Text from '../assets/landingPage/PolymechText.png';
import { Link } from 'react-router-dom';
import image1 from '../assets/landingPage/1.png';
import image3 from '../assets/landingPage/3.png';
import image4 from '../assets/landingPage/4.png';
import Logo from '../assets/Polymech_Logo_updated-removebg-preview.png';
import graphite1 from '../assets/landingPage/graphite bg removed 1.png';
import graphite2 from '../assets/landingPage/trode.png';

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-[#EEF6FA] min-h-screen overflow-hidden"
    >
      <title>Welcome to PolyMech Engineers</title>

      <div className="relative bg-[#EEF6FA] min-h-screen overflow-hidden">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* Positioned background images (DO NOT CHANGE positions) */}
        {/* Left Image (graphite1) – shifts based on screen size */}
<img
  src={graphite1}
  alt="Left Decoration"
  className="
    absolute
    top-[30rem] left-[10rem] scale-50
    laptop:top-[30rem] laptop:left-[15rem] laptop:scale-10
    client:left-[0rem] client:top-[0rem] client:scale-100
    -rotate-[73.99deg] blur-[1.8px] z-0
  "
/>

{/* Right Image (graphite2) – shifts based on screen size */}
<img
  src={graphite2}
  alt="Right Decoration"
  className="
    absolute
    top-[30rem] right-[12rem] scale-50
    laptop:top-[30rem] laptop:-right-[45.75rem] laptop:scale-100
    client:top-[30rem] client:-left-[21.75rem] client:scale-100
    rotate-[38deg] blur-[1.8px] z-0
  "
/>

        {/* Main content section */}
        <div className="w-full flex justify-center items-center min-h-screen">
          <div className="flex flex-col justify-center items-center mt-20 text-center max-w-xl mx-auto">
            <img
              src={Logo}
              alt="PolyMech Logo"
              className="h-55 w-auto max-w-full"
            />
            <br />
            <img
              src={Text}
              alt="PolyMech Text"
              className="max-w-full h-auto px-4"
            />

            <Link to="/home">
              <button className="bg-black text-white text-lg sm:text-xl md:text-2xl font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-3xl hover:bg-gray-800 transition mt-12 sm:mt-20">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Landing;
