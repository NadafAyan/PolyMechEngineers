import {React, useEffect} from "react";
import { motion } from "framer-motion";
import bgimg from "../assets/Compancy image.jpg";
import OwnerNames from "./OwnerNames";
//import ServiceExplanation from "./ServiceExplanation";
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
     
      
    >
      <title>About us | PolyMech Engineers</title>

      <div  

      style={{
        backgroundImage: `url(${bgimg})`,
      }}

        className={`relative w-full flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden pt-10 ${
          fullHeight ? "min-h-screen" : "my-10"
        }`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl text-white font-bold text-center pt-20 tracking-wider font-Montserrat">
          ABOUT{" "}
          <span className="text-yellow-400 px-2 pr-14 rounded-r-3xl tracking-wider">
            US
          </span> </h1>

          <div className="bg-[#000000ad] text-white p-8 rounded-lg shadow-lg max-w-7xl w-full z-10">
            <h2 className="text-5xl tracking-wider py-0 font-bold mb-10 text-center text-gray-200">
              Driving Innovation in EDM Solutions
            </h2>
            <p className="text-xl  tracking-wide font-medium text-gray-300 pb-7">
              Polymech Engineers is committed to being a leader in GRAPHITE EDM ELECTRODES for molds, dies, brackets, and fixture solutions, focusing on:
              <br/>
                <br/>- Cost Effectiveness  
                <br/>- Product Quality  
                <br/>- Consistent Customer Satisfaction
              <br/>
            </p>
            <p className="text  tracking-wide font-medium text-gray-300 pb-7">We offer a wide variety of graphite electrode grades suitable for demanding applications requiring high accuracy and superior surface finishes.

</p>
            <div className="flex items-center pt-5 justify-center mb-6">
              <span className="text-5xl font-bold text-white mr-5">Our</span>
              <span className="text-5xl font-bold bg-[#feb602] text-black px-4 py-1 pr-7.5 rounded-r-xl ">
                Mission
              </span>
            </div>

            <p className="text-2xl pt-1 text-center tracking-wide font-medium text-gray-300 pb-7">
              We empower industries with precision-engineered graphite electrodes
              that optimize EDM performance.
            </p>
          </div>
        </div>
      </div>
      <OwnerNames />
     {/* <ServiceExplanation/>*/}
      {/* <ScrollingClient/> */}
    </motion.div>
  );
};

export default About;
