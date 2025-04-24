import {React, useEffect} from "react";
import { motion } from "framer-motion";

import image1 from "../assets/landingPage/1.png";
import image2 from "../assets/landingPage/4.png";
// import image3 from '../assets/landingPage/2.png';
import image4 from "../assets/homeImage.png";
import graphite1 from '../assets/landingPage/graphite bg removed 1.png';
import graphite2 from '../assets/landingPage/trode.png';
import graphite3 from '../assets/Graphite images/graphite bg removed 3 1.png';
import graphite4 from '../assets/Graphite images/graphite bg removed 4 1.png';

const Home = () => {

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  
  //   const timer = setTimeout(() => {
  //     document.body.style.overflow = "auto";
  //   }, 1000); // Adjust based on your animation duration
  
  //   return () => clearTimeout(timer);
  // }, []);
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-[#EEF6FA] min-h-screen overflow-hidden"
    >

      <title>Home | PolyMech Engineers</title>
      <div className=" relative bg-[#EEF6FA] min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="space-y-20 text-center pt-10">
          <img
            src={graphite1}
            alt="image1"
            className="absolute -rotate-[73.99deg] top-20 -right-85 z-0 blur-[1.8px] "
          />
          <img
            src={graphite2}
            alt="image2"
            className="rotate-38 absolute -left-60 top-35 blur-[1.8px] z-0 scale-60"
          />
          {/* <img src={graphite4} alt="image3" className='absolute top-150 left-9 '/> */}
          <img
            src={graphite3}
            alt="image4"
            className="absolute -rotate-[1deg]  top-110 right-10 blur-[0.5px]"
          />

          <div className="flex flex-wrap justify-center items-center gap-2 pt-12">
            <h3 className="font-montserrat text-3xl font-bold  ">
            PRECISION IN GRAPHITE, EXCELLENCE IN 
            </h3>
            <span className="font-montserrat bg-[#feb602]  py-1 pl-1.5 pr-14 rounded-r-2xl text-3xl  font-bold z-1">
            PERFORMANCE
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5">
            <span className="font-montserrat bg-[#feb602] px-4 py-2 text-6xl rounded-l-2xl pl-14 font-bold tracking-wider z-10">
              PRECISION
            </span>
            <h1 className="font-montserrat text-6xl font-bold tracking-wider z-10">
              EDM GRAPHITE ELECTRODE
            </h1>
          </div>

          <p className="text-5xl pt-12 tracking-wider leading-relaxed">
            Engineered for accuracy, durability,
            <br className="hidden md:block" />
            and unmatched performance
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
