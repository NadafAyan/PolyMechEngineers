import React from "react";
import { motion } from "framer-motion";

import image1 from '../assets/HomePageExtension/1.png';
import image2 from '../assets/HomePageExtension/2.png';
import image3 from '../assets/HomePageExtension/3.png';


const GraphiteEDMBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full mx-auto p-6 space-y-6 bg-[#EEF6FA]  shadow-lg">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Why use <span className="text-[#feb602]">graphite for EDM?</span>
          </h2>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col sm:flex-row bg-black text-white rounded-lg  p-6 gap-4 items-center z-0">
          <img
            src={image3} 
            alt="Electrode example"
            className="w-32 h-32 object-cover rounded scale-155 z-10 -translate-y-[20%] ml-[2.5px]"
          />
          <p className="text-sm sm:text-base leading-relaxed">
            Graphite is being widely used in EDM mould making because of the
            following key advantages. Due to low wear it is time and cost
            effective. Easier machining with less complex milling tools. Perfect
            for high quality surface finishes and provides a high metal removal
            rate. It does not melt but sublimes (turns from a solid to a gas) at
            very high temperatures of 3400°C. It is five times less dense than
            Copper which means lighter electrodes. It is very resistant to
            thermal shock and can withstand high temperatures.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col sm:flex-row bg-yellow-400 text-white rounded-lg p-6 gap-4 items-center">
          <p className="text-sm sm:text-base leading-relaxed text-black font-medium">
            At Polymech Engineers we guarantee only the finest selection of raw
            materials and ensure the precise control of production resources to
            provide unparalleled performance. Our graphite offers advantages
            which set it apart from the crowd. Due to its low coefficient of
            thermal expansion, geometric stability at high temperatures is
            guaranteed. The mechanical strength remains unaltered at high
            temperatures.
          </p>
          <img
            src={image2}
            alt="Graphite part"
            className="w-32 h-32 object-cover scale-145 rounded -translate-y-[10%]"
          />
        </div>

        {/* Section 3 */}
        <div className="flex flex-col sm:flex-row bg-black text-white rounded-lg p-6 gap-4 items-center">
          <img
            src={image1} // Replace with actual path
            alt="EDM part"
            className="w-38 h-32 object-fill rounded scale-125 -translate-y-[25%]"
          />
          <p className="text-sm sm:text-base leading-relaxed">
            Because of its ability to create precise and unique shapes EDM is
            the choice for many industries. We offer tailored Die & Mold
            solutions to industries like automobile, aerospace, appliances etc.,
            creating very complex dies/shapes with extreme accuracy.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GraphiteEDMBenefits;
