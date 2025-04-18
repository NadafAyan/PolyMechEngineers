import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/landingPage/1.png";
import image2 from "../assets/landingPage/2.png";
import image3 from "../assets/trode.png";
import image4 from "../assets/casting.png";
import image5 from "../assets/landingPage/4.png";
import image6 from "../assets/homeImage.png";

const Services = () => {
  const textStyle = {
    WebkitTextFillColor: "transparent",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "white",
  };

  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-[#EEF6FA] min-h-screen overflow-hidden"
    >
      <title>Services | PolyMech Engineers</title>
      <div className="bg-[#EEF6FA] min-h-screen px-6 py-10 pt-28">
        <h1 className="text-6xl font-bold text-center pt-6 mb-10">
          OUR{" "}
          <span className="bg-yellow-400 px-2 pr-14 rounded-r-3xl">
            PRODUCTS
          </span>
        </h1>

        <div className="grid grid-row-3 gap-y-5">
          {/* row 1 */}
          <div className="grid grid-cols-2 gap-4">
            {/* col 1 */}
            <div className="relative bg-black rounded-2xl overflow-hidden h-110 group delay-300 transition-all duration-500">
              <img
                src={image1}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-120 z-10 duration-500 delay-300
              transition-all group-hover:top-22 group-hover:left-32 group-hover:scale-65 "
              />

              <div className="absolute inset-0 flex items-center justify-center group">
                <p className="text-white text-7xl font-bold text-center z-0 delay-300 transition-all duration-500 group-hover:translate-x-[35%] group-hover:translate-y-[-200%]">
                  Prototypes
                </p>

                <p
                  style={textStyle}
                  className="absolute text-transparent border-2 text-7xl font-bold text-center z-20 delay-300 transition-all duration-500 group-hover:translate-x-[34.6%] group-hover:translate-y-[-190%]"
                >
                  Prototypes
                </p>

                <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                  <p className="text-white text-lg font-medium">
                    Get your ideas off the ground with our prototype
                    manufacturing services. From concept to reality, we
                    specialize in turning designs into tangible prototypes for
                    testing and validation. With state-of-the-art technology and
                    expert craftsmanship, we help bring your vision to life
                    quickly and efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* col 2 */}
            <div className="relative bg-black rounded-2xl overflow-hidden h-110 group delay-300 ">
              <img
                src={image2}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 z-10 duration-500 delay-300
              transition-all group-hover:top-22 group-hover:left-32 group-hover:scale-45"
              />

              <div className="absolute inset-0 flex items-center justify-center z-0 group">
                <p className="text-white text-7xl font-bold text-center z-0 delay-300 transition-all duration-500 group-hover:translate-x-[35%] group-hover:translate-y-[-200%]">
                  EV Parts
                </p>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center z-20"
                style={textStyle}
              >
                <p className="absolute text-transparent border-2 text-7xl font-bold text-center z-20 delay-300 transition-all duration-500 group-hover:translate-x-[34.6%] group-hover:translate-y-[-190%]">
                  EV Parts
                </p>
              </div>
              <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-lg font-medium">
                  Elevate your electric vehicle (EV) with our precision-crafted
                  brass parts. Engineered for performance and durability, our EV
                  brass parts are designed to meet the rigorous demands of
                  modern electric vehicles. Whether it's connectors, terminals,
                  or other critical components, trust our expertise to deliver
                  high-quality brass parts that power your EV to new heights.
                </p>
              </div>
            </div>
          </div>

          {/* row 2 */}
          <div className="grid grid-cols-5 gap-4">
            {/* col 1 */}
            <div className="relative bg-black rounded-2xl overflow-hidden h-110 group delay-300  col-span-2">
              <img
                src={image3}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 z-10"
              />

              <div className="absolute inset-0 flex items-center justify-center z-0 group">
                <p className="text-white text-8xl font-bold text-center z-0">
                  Graphite Electrode
                </p>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center z-20"
                style={textStyle}
              >
                <p className="absolute text-transparent border-2 text-8xl font-bold text-center z-20 ">
                  Graphite Electrode
                </p>
              </div>
            </div>

            {/* col 2 */}
            <div className="relative bg-black rounded-2xl h-110 overflow-hidden col-span-3">
              <img
                src={image4}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-98 z-10"
              />

              <div className="absolute inset-0 flex items-center justify-center z-0">
                <p className="text-white text-7xl font-bold text-center">
                  Casting Components
                </p>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center z-20"
                style={textStyle}
              >
                <p className="text-transparent border-2 text-7xl font-bold text-center">
                  Casting Components
                </p>
              </div>
            </div>
          </div>

          {/* row 3 */}
          <div className="grid grid-cols-2 gap-4">
            {/* col 1 */}
            <div className="relative bg-black h-110 rounded-2xl overflow-hidden">
              <img
                src={image5}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-85 z-10"
              />

              <div className="absolute inset-0 flex items-center justify-center z-0">
                <p className="text-white text-7xl font-bold text-center">
                  Prototypes
                </p>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center z-20"
                style={textStyle}
              >
                <p className="text-transparent border-2 text-7xl font-bold text-center">
                  Prototypes
                </p>
              </div>
            </div>

            {/* col 2 */}
            <div className="relative bg-black h-110 rounded-2xl overflow-hidden">
              <img
                src={image6}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-95 z-10"
              />

              <div className="absolute inset-0 flex items-center justify-center z-0">
                <p className="text-white text-6xl font-bold text-center">
                  Aluminium Components
                </p>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center z-20"
                style={textStyle}
              >
                <p className="text-transparent border-2 text-6xl font-bold text-center">
                  Aluminium Components
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    // </div>
  );
};

export default Services;
