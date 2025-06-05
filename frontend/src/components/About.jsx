import { React, useEffect } from "react";
import { motion } from "framer-motion";
import bgimg from "../assets/Compancy image.webp";
import OwnerNames from "./OwnerNames";
import Clients from '../components/Clients';
//import ServiceExplanation from "./ServiceExplanation";
// import ScrollingClient from "./ScrollingClient";

// import ServiceExplanation from "./ServiceExplanation";
// import ScrollingClient from "./ScrollingClient";

const About = ({ fullHeight = true }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <title>About us | Polymech Engineers</title>

      <div
        style={{
          backgroundImage: `url(${bgimg})`,
           backgroundSize: "cover"
        }}
        className={`relative w-full flex flex-col items-center justify-center ${
          fullHeight ? "min-h-screen" : "my-10"
        } bg-cover bg-center bg-no-repeat overflow-hidden pt-10`}
      >
        <div className="relative z-10 flex flex-col items-center  px-4 md:px-10 lg:px-20 w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center pt-20 tracking-wider font-Montserrat text-white">
          ABOUT 
          <span className="text-yellow-400 px-2 pr-6 md:pr-14 rounded-r-3xl tracking-wider md:pl-4">
            US
          </span>
        </h1>

          <div className="bg-[#000000ad] text-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg w-full max-w-7xl mt-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-wider font-bold mb-8 text-center text-gray-200">
              Driving Innovation in EDM Solutions
            </h2>

            <p className="text-base sm:text-lg md:text-xl tracking-wide font-medium text-gray-300 pb-6">
              Polymech Engineers is committed to being a leader in GRAPHITE EDM
              ELECTRODES for molds, dies, brackets, and fixture solutions,
              focusing on:
              <br />
              <br />- Cost Effectiveness
              <br />- Product Quality
              <br />- Consistent Customer Satisfaction
            </p>

            <p className="text-base sm:text-lg md:text-xl tracking-wide font-medium text-gray-300 pb-6">
              We offer a wide variety of graphite electrode grades suitable for
              demanding applications requiring high accuracy and superior
              surface finishes.
            </p>

            <div className="flex items-center justify-center pt-4 mb-6">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mr-4">
                Our
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-[#feb602] text-black px-4 py-1 pr-6 rounded-r-xl">
                Mission
              </span>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-center tracking-wide font-medium text-gray-300 pb-4">
              We empower industries with precision-engineered graphite electrodes
              that optimize EDM performance.
            </p>
          </div>
        </div>
      </div>
      <Clients />
      <OwnerNames />
      {/* <ServiceExplanation/> */}
      {/* <ScrollingClient/> */}
    </motion.div>
  );
};

export default About;
