import React, { useEffect } from "react";
import { motion } from "framer-motion";

import image1 from "../assets/HomePageExtension/1.webp";
import image2 from "../assets/HomePageExtension/2.webp";
import image3 from "../assets/HomePageExtension/3.webp";

const GraphiteEDMBenefits = () => {
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
      <div className="w-full mx-auto px-4 sm:px-8 py-10 space-y-10 bg-[#EEF6FA]">

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-wide">
            Why use <span className="text-yellow-400">graphite for EDM?</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 bg-black text-white p-6 rounded-xl shadow-md">
          <div className="shrink-0">
            <img
              src={image3}
              alt="Graphite EDM Benefit"
              className="w-32 sm:w-40 md:w-44 object-cover rounded-xl"
            />
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Graphite is widely used in EDM mould making due to its low wear and
            cost efficiency. It’s easier to machine, supports high-quality
            finishes, and offers a high metal removal rate. Unlike copper,
            graphite sublimates at 3400°C, is 5x lighter, resists thermal shock,
            and handles high temperatures with stability.
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-[#feb602] text-black p-6 rounded-xl shadow-md">
          <div className="shrink-0">
            <img
              src={image2}
              alt="Graphite Quality"
              className="w-32 sm:w-40 md:w-44 object-cover rounded-xl"
            />
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-justify font-medium">
            At Polymech Engineers, we use only the finest graphite materials with
            precise production control. Our graphite ensures low thermal
            expansion, excellent dimensional stability, and maintains mechanical
            strength even at high temperatures.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 bg-black text-white p-6 rounded-xl shadow-md">
          <div className="shrink-0">
            <img
              src={image1}
              alt="Precision EDM Shape"
              className="w-32 sm:w-40 md:w-44 object-cover rounded-xl"
            />
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            EDM enables the creation of complex, precise shapes ideal for
            industries like automotive, aerospace, and appliances. We deliver
            custom die & mold solutions with accuracy and reliability.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GraphiteEDMBenefits;
