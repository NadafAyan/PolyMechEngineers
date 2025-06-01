import { useEffect } from "react";
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

      <div className="relative bg-[#EEF6FA] min-h-screen flex items-center justify-center px-4 py-10 sm:py-16 overflow-hidden">
        <div className="space-y-6 sm:space-y-8 md:space-y-12 text-center pt-12 sm:pt-16 max-w-7xl mx-auto">
          {/* Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row flex-wrap justify-center w-full items-center gap-2 px-2 sm:px-4"
          >
            <h3 className="font-montserrat text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">
              PRECISION IN GRAPHITE, EXCELLENCE IN
            </h3>
            <span className="font-montserrat bg-[#feb602] py-1 px-4 sm:px-6 rounded-r-2xl text-lg sm:text-2xl md:text-3xl font-bold z-10">
              PERFORMANCE
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 px-2 sm:px-4"
          >
            <span className="font-montserrat bg-[#feb602] px-4 py-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl rounded-l-2xl font-bold tracking-wide z-10">
              PRECISION
            </span>
            <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide z-10 text-center md:text-left mt-2 md:mt-0">
              EDM GRAPHITE ELECTRODE
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl pt-4 sm:pt-6 md:pt-10 tracking-wide leading-relaxed px-2 sm:px-4 text-center text-gray-700"
          >
            Engineered for accuracy, durability,
            <br className="hidden md:block" />
            and unmatched performance
          </motion.p>
        </div>
      </div>

      {/* Reusable Components */}
      <GraphiteVsCopper />
      <GraphiteInfo />
    </motion.div>
  );
};

export default Home;