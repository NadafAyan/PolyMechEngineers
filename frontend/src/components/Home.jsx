import { React, useEffect } from "react";
import { motion } from "framer-motion";

import GraphiteVsCopper from "./GraphiteVsCopper";
import GraphiteInfo from "./GraphiteInfo";

const Home = () => {
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
      <title>Home | PolyMech Engineers</title>

      <div className="relative bg-[#EEF6FA] min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="space-y-12 text-center pt-16 max-w-8xl mx-auto">
          {/* Headline */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 px-4">
            <h3 className="font-montserrat text-2xl sm:text-3xl font-bold">
              PRECISION IN GRAPHITE, EXCELLENCE IN
            </h3>
            <span className="font-montserrat bg-[#feb602] py-1 px-4 sm:px-6 rounded-r-2xl text-2xl sm:text-3xl font-bold z-10">
              PERFORMANCE
            </span>
          </div>

          {/* Main Heading */}
             <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 px-4">
            <span className="font-montserrat bg-[#feb602] px-4 py-2 text-4xl sm:text-5xl md:text-6xl rounded-l-2xl font-bold tracking-wide z-10">
              PRECISION
            </span>
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide z-10 text-center md:text-left">
              EDM GRAPHITE ELECTRODE
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl sm:text-3xl md:text-4xl pt-6 sm:pt-10 tracking-wide leading-relaxed px-4 text-center">
            Engineered for accuracy, durability,
            <br className="hidden md:block" />
            and unmatched performance
          </p>
        </div>
      </div>

      {/* Reusable Components */}
      <GraphiteVsCopper />
      <GraphiteInfo />
    </motion.div>
  );
};

export default Home;
