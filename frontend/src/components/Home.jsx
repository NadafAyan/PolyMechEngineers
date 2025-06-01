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

      <div className="relative bg-[#EEF6FA] min-h-screen flex items-center justify-center px-4 py-20 sm:py-28 overflow-hidden">
        <div className="space-y-6 sm:space-y-8 md:space-y-12 text-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-2 px-4"
          >
            <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
              PRECISION IN GRAPHITE, EXCELLENCE IN
            </h3>
            <span className="bg-[#feb602] py-1 px-4 sm:px-6 rounded-r-2xl text-base sm:text-lg md:text-2xl lg:text-3xl font-bold">
              PERFORMANCE
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-2 px-4"
          >
            <span className="bg-[#feb602] px-4 py-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl rounded-l-2xl font-bold tracking-wide">
              PRECISION
            </span>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide mt-2">
              EDM GRAPHITE ELECTRODE
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl pt-4 tracking-wide leading-relaxed px-4 text-center text-gray-700"
          >
            Engineered for accuracy, durability,
            <br className="hidden md:block" />
            and unmatched performance
          </motion.p>
        </div>
      </div>

      <GraphiteVsCopper />
      <GraphiteInfo />
    </motion.div>
  );
};

export default Home;