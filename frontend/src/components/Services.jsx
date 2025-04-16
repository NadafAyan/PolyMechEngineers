import React from "react";
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
    // fontSize: '48px',
    // fontWeight: 'bold',
  };

  return (
    <div className="bg-[#EEF6FA] min-h-screen px-6 py-10 pt-28">
      <h1 className="text-6xl font-bold text-center pt-6 mb-10">
        OUR{" "}
        <span className="bg-yellow-400 px-2 pr-14 rounded-r-3xl">PRODUCTS</span>
      </h1>

      <div className="grid grid-row-3 gap-y-5">
        {/* row 1 */}
        <div className="grid grid-cols-2 gap-4">
          {/* col 1 */}
          <div className="relative bg-black rounded-2xl overflow-hidden h-110">
            <img
              src={image1}
              alt="prototypes"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-120 z-10"
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
          <div className="relative bg-black rounded-2xl overflow-hidden h-110">
            <img
              src={image2}
              alt="prototypes"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 z-10"
            />

            <div className="absolute inset-0 flex items-center justify-center z-0">
              <p className="text-white text-7xl font-bold text-center">
                EV Parts
              </p>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center z-20"
              style={textStyle}
            >
              <p className="text-transparent border-2 text-7xl font-bold text-center">
                EV Parts
              </p>
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className="grid grid-cols-5 gap-4">
          {/* col 1 */}
          <div className="relative bg-black rounded-2xl h-110 overflow-hidden col-span-2">
            <img
              src={image3}
              alt="prototypes"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-75 z-10"
            />

            <div className="absolute inset-0 flex items-center justify-center z-0">
              <p className="text-white text-8xl font-bold text-center">
                Graphite Electrode
              </p>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center z-20"
              style={textStyle}
            >
              <p className="text-transparent border-2 text-8xl font-bold text-center">
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

            <div className="absolute inset-0 flex items-center justify-center z-20" style={textStyle}>
              <p className="text-transparent border-2 text-6xl font-bold text-center">
                Aluminium Components
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
