// import { React, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import image1 from "../assets/landingPage/1.png";
// import image2 from "../assets/landingPage/2.png";
// import image3 from "../assets/trode.png";
// import image4 from "../assets/casting.png";
// import image5 from "../assets/landingPage/4.png";
// import image6 from "../assets/homeImage.png";
// import ServiceExplanation from "./ServiceExplanation";
// import "./Service.css";

// const Services = () => {
//   const textStyle = {
//     WebkitTextFillColor: "transparent",
//     WebkitTextStrokeWidth: "1px",
//     WebkitTextStrokeColor: "white",
//   };

// useEffect(() => {
//   window.scrollTo(0, 0); // Scroll to the top of the page
// }, []);

// return (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5 }}
//     className="bg-[#EEF6FA] min-h-screen overflow-hidden"
//   >
//       <title>Services | PolyMech Engineers</title>
//       <div className="bg-[#EEF6FA] min-h-screen px-6 py-10 pt-28">
//         <h1 className="md:text-6xl text-3xl font-bold text-center pt-6 mb-10">
//           OUR{" "}
//           <span className="bg-[#feb602] px-2 md:pr-14 pr-8 rounded-r-3xl">
//             PRODUCTS
//           </span>
//         </h1>

//         <div className="grid md:grid-row-3 grid-row-6 gap-y-5">
//           <div className="grid md:grid-cols-5 gap-4">
//             {/* row 1 */}
//             {/* col 1 */}
//             <div className="relative bg-black rounded-2xl overflow-hidden h-110 group delay-300  md:col-span-2 transition-all duration-500md:hoverscale-103">
//               <img
//                 src={image3}
//                 alt="prototypes"
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 z-10 transition-all duration-500 delay-300 
//                 md:md:group-hover:scale-45 md:group-hover:scale-55 md:md:group-hover:top-28 md:group-hover:top-23 md:md:group-hover:left-28 md:group-hover:left-22"
//               />

//               <div className="absolute inset-0 flex items-center justify-center z-0 group transition-all delay-300 duration-500 md:md:group-hover:scale-55 
//               md:group-hover:scale-62 md:md:group-hover:translate-x-[18%] md:group-hover:translate-x-[21%] md:md:group-hover:translate-y-[-33%] md:group-hover:translate-y-[-38%]">
//                 <p className="text-white md:text-8xl text-3xl font-bold text-center z-0">
//                   Graphite Electrode
//                 </p>
//               </div>

//               <div
//                 className="absolute inset-0 flex items-center justify-center z-20"
//                 style={textStyle}
//               >
//                 <p className="stroke-text absolute text-transparent border-2 md:text-8xl text-3xl font-bold text-center z-20 transition-all delay-300 duration-500 
//                 md:md:group-hover:scale-55 md:group-hover:scale-62 md:md:group-hover:translate-x-[18%] md:group-hover:translate-x-[27%] md:md:group-hover:translate-y-[-74.5%]
//                 md:group-hover:translate-y-[-425%]">
//                   Graphite Electrode
//                 </p>
//               </div>

//               <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start md:pb-66 pb-83 md:pl-70 pl-45 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                 <p className="text-white text-[0.8rem] md:text-xl font-bold">
//                   Lowest price in the industry
//                 </p>
//               </div>

//               <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-9 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                 <p className="text-white md:text-lg text-md font-medium">
//                   Graphite Electrode Machining: Precision Perfected. At Polymech
//                   Engineers, we specialize in the meticulous machining of
//                   graphite electrodes, ensuring exacting precision and superior
//                   quality. Leveraging advanced technology and our team's
//                   expertise.
//                 </p>
//               </div>
//             </div>

//             {/* col 2 */}
//             <div className="relative bg-black rounded-2xl h-110 overflow-hidden md:col-span-3 group transition-all duration-500 delay-300md:hoverscale-103">
//               <img
//                 src={image4}
//                 alt="prototypes"
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-98 z-10 group transition-all delay-300 duration-500 md:group-hover:scale-60
//                 md:group-hover:top-30 md:group-hover:left-30"
//               />

//               <div
//                 className="absolute inset-0 flex items-center justify-center z-0 group transition-all duration-500 delay-300 md:group-hover:scale-85 
//               md:group-hover:translate-x-[13%] md:group-hover:translate-y-[-24%]"
//               >
//                 <p className="text-white md:text-6xl text-5xl font-bold text-center">
//                   Casting Components
//                 </p>
//               </div>

//               <div
//                 className="absolute inset-0 flex items-center justify-center z-20 group transition-all duration-500 delay-300 md:group-hover:scale-85 
//               md:group-hover:translate-x-[13%] md:group-hover:translate-y-[-24%]"
//                 style={textStyle}
//               >
//                 <p className="stroke-text text-transparent border-2 md:text-6xl text-5xl font-bold text-center">
//                   Casting Components
//                 </p>
//               </div>

//               <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-12 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                 <p className="text-white text-xl font-medium">
//                   Graphite Electrode Machining: Precision Perfected. At Polymech
//                   Engineers, we specialize in the meticulous machining of
//                   graphite electrodes, ensuring exacting precision and superior
//                   quality. Leveraging advanced technology and our team's
//                   expertise.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* row 2 */}
//           <div className="grid md:grid-cols-2 gap-4">
//             {/* col 1 */}
//             <div className="relative bg-black rounded-2xl overflow-hidden h-110 group delay-300 transition-all duration-500md:hoverscale-103">
//               <img
//                 src={image1}
//                 alt="prototypes"
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-120 z-10 duration-500 delay-300
//               transition-all md:group-hover:top-26 md:group-hover:left-34 md:group-hover:scale-70 "
//               />

//               <div className="absolute inset-0 flex items-center justify-center group">
//                 <p className="text-white md:text-7xl text-5xl font-bold text-center z-0 delay-300 transition-all duration-500 md:group-hover:translate-x-[35%] md:group-hover:translate-y-[-200%]">
//                   Prototypes
//                 </p>

//                 <p
//                   style={textStyle}
//                   className="stroke-text absolute text-transparent border-2 md:text-7xl text-5xl font-bold text-center z-20 delay-300 transition-all duration-500 md:group-hover:translate-x-[34.6%] md:group-hover:translate-y-[-190%]"
//                 >
//                   Prototypes
//                 </p>

//                 <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start pb-70 pl-78 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                   <p className="text-white text-xl font-bold">
//                     Machined with R&D
//                   </p>
//                 </div>

//                 <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                   <p className="text-white text-lg font-medium">
//                     Get your ideas off the ground with our prototype
//                     manufacturing services. From concept to reality, we
//                     specialize in turning designs into tangible prototypes for
//                     testing and validation. With state-of-the-art technology and
//                     expert craftsmanship, we help bring your vision to life
//                     quickly and efficiently.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* col 2 */}
//             <div className="relative bg-black rounded-2xl overflow-hidden h-110 group delay-300 transition-all duration-500md:hoverscale-103">
//               <img
//                 src={image2}
//                 alt="prototypes"
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 z-10 duration-500 delay-300
//               transition-all md:group-hover:top-24 md:group-hover:left-32 md:group-hover:scale-40"
//               />

//               <div className="absolute inset-0 flex items-center justify-center z-0 group">
//                 <p className="text-white text-7xl font-bold text-center z-0 delay-300 transition-all duration-500 md:group-hover:translate-x-[29.7%] md:group-hover:translate-y-[-215%]">
//                   EV Parts
//                 </p>
//               </div>

//               <div
//                 className="absolute inset-0 flex items-center justify-center z-20"
//                 style={textStyle}
//               >
//                 <p className="stroke-text absolute text-transparent border-2 text-7xl font-bold text-center z-20 delay-300 transition-all duration-500 md:group-hover:translate-x-[29.7%] md:group-hover:translate-y-[-205.6%]">
//                   EV Parts
//                 </p>
//               </div>

//               <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start pb-74 pl-78 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                 <p className="text-white text-xl font-bold">
//                   Designed with your vision in mind
//                 </p>
//               </div>

//               <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-9 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                 <p className="text-white text-lg font-medium">
//                   Elevate your electric vehicle (EV) with our precision-crafted
//                   brass parts. Engineered for performance and durability, our EV
//                   brass parts are designed to meet the rigorous demands of
//                   modern electric vehicles. Whether it's connectors, terminals,
//                   or other critical components, trust our expertise to deliver
//                   high-quality brass parts that power your EV to new heights.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* row 3 */}
//           <div className="grid md:grid-cols-2 gap-4">
//             {/* col 1 */}
//             <div className="relative bg-black h-110 rounded-2xl overflow-hidden group transition-all duration-500 delay-300md:hoverscale-103">
//               <img
//                 src={image5}
//                 alt="prototypes"
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-85 z-10 transition-all duration-500 delay-300
//                 md:group-hover:scale-63 md:group-hover:top-34 md:group-hover:left-32"
//               />

//               <div
//                 className="absolute inset-0 md:group-hover:scale-70 flex items-center justify-center z-0 transition-all duration-500 delay-300
//               md:group-hover:translate-x-[15%] md:group-hover:translate-y-[-30%]"
//               >
//                 <p className="text-white md:text-7xl text-5xl font-bold text-center">
//                   Automotive Parts
//                 </p>
//               </div>

//               <div
//                 className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 delay-300
//               md:group-hover:translate-x-[15%] md:group-hover:translate-y-[-30%] md:group-hover:scale-70"
//                 style={textStyle}
//               >
//                 <p className="stroke-text text-transparent border-2 md:text-7xl text-5xl font-bold text-center">
//                   Automotive Parts
//                 </p>
//               </div>

//               <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start pb-68 pl-68 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                 <p className="text-white text-xl font-bold">
//                   Your satisfaction guaranteed
//                 </p>
//               </div>

//               <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                 <p className="text-white text-xl font-medium">
//                   Drive excellence in automotive performance with our
//                   meticulously crafted sub-assemblies. Engineered to seamlessly
//                   integrate into vehicle systems, our automotive parts
//                   sub-assemblies ensure optimal functionality and reliability.
//                   From engines to transmissions, our precision manufacturing
//                   processes guarantee superior quality and compatibility.
//                 </p>
//               </div>
//             </div>

//             {/* col 2 */}
//             <div className="relative bg-black h-110 rounded-2xl overflow-hidden group transition-all duration-500 delay-300md:hoverscale-103">
//               <img
//                 src={image6}
//                 alt="prototypes"
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-95 z-10 transition-all duration-500 delay-300
//                 md:group-hover:scale-55 md:group-hover:top-26 md:group-hover:left-32"
//               />

//               <div className="absolute inset-0 flex items-center justify-center z-0 transition-all duration-500 delay-300 md:group-hover:scale-65
//               md:group-hover:translate-x-[16%] md:group-hover:translate-y-[-28%]">
//                 <p className="text-white md:text-6xl text-5xl font-bold text-center">
//                   Aluminium Components
//                 </p>
//               </div>

//               <div
//                 className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 delay-300 md:group-hover:scale-65
//               md:group-hover:translate-x-[16%] md:group-hover:translate-y-[-28%]"
//                 style={textStyle}
//               >
//                 <p className="stroke-text text-transparent border-2 md:text-6xl text-5xl font-bold text-center">
//                   Aluminium Components
//                 </p>
//               </div>

//               <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                 <p className="text-white text-xl font-medium">
//                   <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
//                     <p className="text-white text-xl font-medium">
//                       Drive excellence in automotive performance with our
//                       meticulously crafted sub-assemblies. Engineered to seamlessly
//                       integrate into vehicle systems, our automotive parts
//                       sub-assemblies ensure optimal functionality and reliability.
//                       From engines to transmissions, our precision manufacturing
//                       processes guarantee superior quality and compatibility.
//                     </p>
//                   </div>
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//       <ServiceExplanation />
//     </motion.div>
//     // </div>
//   );
// };

// export default Services;


import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/landingPage/1.png";
import image2 from "../assets/landingPage/2.png";
import image3 from "../assets/trode.png";
import image4 from "../assets/casting.png";
import image5 from "../assets/landingPage/4.png";
import image6 from "../assets/homeImage.png";
import ServiceExplanation from "./ServiceExplanation";

const Services = () => {
  const textStyle = {
    WebkitTextFillColor: "transparent",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "white",
  };

useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top of the page
}, []);

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
        <h1 className="md:text-6xl text-3xl font-bold text-center pt-6 mb-10">
          OUR{" "}
          <span className="bg-[#feb602] px-2 md:pr-14 pr-8 rounded-r-3xl">
            PRODUCTS
          </span>
        </h1>

        <div className="grid md:grid-row-3 grid-row-6 gap-y-5">
          <div className="grid md:grid-cols-5 gap-4">
            {/* row 1 */}
            {/* col 1 */}
            <div className="relative bg-black rounded-2xl overflow-hidden h-110 group delay-300  md:col-span-2 transition-all duration-500md:hoverscale-103">
              <img
                src={image3}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 z-10 transition-all duration-500 delay-300 
                md:md:group-hover:scale-45 md:group-hover:scale-55 md:md:group-hover:top-28 md:group-hover:top-23 md:md:group-hover:left-28 md:group-hover:left-22"
              />

              <div className="absolute inset-0 flex items-center justify-center z-0 group transition-all delay-300 duration-500 md:md:group-hover:scale-55 
              md:group-hover:scale-62 md:md:group-hover:translate-x-[18%] md:group-hover:translate-x-[21%] md:md:group-hover:translate-y-[-33%] md:group-hover:translate-y-[-38%]">
                <p className="text-white md:text-8xl text-3xl font-bold text-center z-0">
                  Graphite Electrode
                </p>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center z-20"
                style={textStyle}
              >
                <p className="absolute text-transparent border-2 md:text-8xl text-3xl font-bold text-center z-20 transition-all delay-300 duration-500 
                md:md:group-hover:scale-55 md:group-hover:scale-62 md:md:group-hover:translate-x-[18%] md:group-hover:translate-x-[27%] md:md:group-hover:translate-y-[-74.5%]
                md:group-hover:translate-y-[-425%]">
                  Graphite Electrode
                </p>
              </div>

              <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start md:pb-66 pb-83 md:pl-70 pl-45 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-[0.8rem] md:text-xl font-bold">
                  Lowest price in the industry
                </p>
              </div>

              <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-9 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white md:text-lg text-md font-medium">
                  Graphite Electrode Machining: Precision Perfected. At Polymech
                  Engineers, we specialize in the meticulous machining of
                  graphite electrodes, ensuring exacting precision and superior
                  quality. Leveraging advanced technology and our team's
                  expertise.
                </p>
              </div>
            </div>

            {/* col 2 */}
            <div className="relative bg-black rounded-2xl h-110 overflow-hidden md:col-span-3 group transition-all duration-500 delay-300md:hoverscale-103">
              <img
                src={image4}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-98 z-10 group transition-all delay-300 duration-500 md:group-hover:scale-60
                md:group-hover:top-30 md:group-hover:left-30"
              />

              <div
                className="absolute inset-0 flex items-center justify-center z-0 group transition-all duration-500 delay-300 md:group-hover:scale-85 
              md:group-hover:translate-x-[13%] md:group-hover:translate-y-[-24%]"
              >
                <p className="text-white md:text-6xl text-5xl font-bold text-center">
                  Casting Components
                </p>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center z-20 group transition-all duration-500 delay-300 md:group-hover:scale-85 
              md:group-hover:translate-x-[13%] md:group-hover:translate-y-[-24%]"
                style={textStyle}
              >
                <p className="text-transparent border-2 md:text-6xl text-5xl font-bold text-center">
                  Casting Components
                </p>
              </div>

              <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-12 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-xl font-medium">
                  Graphite Electrode Machining: Precision Perfected. At Polymech
                  Engineers, we specialize in the meticulous machining of
                  graphite electrodes, ensuring exacting precision and superior
                  quality. Leveraging advanced technology and our team's
                  expertise.
                </p>
              </div>
            </div>
          </div>

          {/* row 2 */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* col 1 */}
            <div className="relative bg-black rounded-2xl overflow-hidden h-110 group delay-300 transition-all duration-500md:hoverscale-103">
              <img
                src={image1}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-120 z-10 duration-500 delay-300
              transition-all md:group-hover:top-26 md:group-hover:left-34 md:group-hover:scale-70 "
              />

              <div className="absolute inset-0 flex items-center justify-center group">
                <p className="text-white md:text-7xl text-5xl font-bold text-center z-0 delay-300 transition-all duration-500 md:group-hover:translate-x-[35%] md:group-hover:translate-y-[-200%]">
                  Prototypes
                </p>

                <p
                  style={textStyle}
                  className="absolute text-transparent border-2 md:text-7xl text-5xl font-bold text-center z-20 delay-300 transition-all duration-500 md:group-hover:translate-x-[34.6%] md:group-hover:translate-y-[-190%]"
                >
                  Prototypes
                </p>

                <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start pb-70 pl-78 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
                  <p className="text-white text-xl font-bold">
                    Machined with R&D
                  </p>
                </div>

                <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
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
            <div className="relative bg-black rounded-2xl overflow-hidden h-110 group delay-300 transition-all duration-500md:hoverscale-103">
              <img
                src={image2}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 z-10 duration-500 delay-300
              transition-all md:group-hover:top-24 md:group-hover:left-32 md:group-hover:scale-40"
              />

              <div className="absolute inset-0 flex items-center justify-center z-0 group">
                <p className="text-white text-7xl font-bold text-center z-0 delay-300 transition-all duration-500 md:group-hover:translate-x-[29.7%] md:group-hover:translate-y-[-215%]">
                  EV Parts
                </p>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center z-20"
                style={textStyle}
              >
                <p className="absolute text-transparent border-2 text-7xl font-bold text-center z-20 delay-300 transition-all duration-500 md:group-hover:translate-x-[29.7%] md:group-hover:translate-y-[-205.6%]">
                  EV Parts
                </p>
              </div>

              <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start pb-74 pl-78 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-xl font-bold">
                  Designed with your vision in mind
                </p>
              </div>

              <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-9 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
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

          {/* row 3 */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* col 1 */}
            <div className="relative bg-black h-110 rounded-2xl overflow-hidden group transition-all duration-500 delay-300md:hoverscale-103">
              <img
                src={image5}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-85 z-10 transition-all duration-500 delay-300
                md:group-hover:scale-63 md:group-hover:top-34 md:group-hover:left-32"
              />

              <div
                className="absolute inset-0 md:group-hover:scale-70 flex items-center justify-center z-0 transition-all duration-500 delay-300
              md:group-hover:translate-x-[15%] md:group-hover:translate-y-[-30%]"
              >
                <p className="text-white md:text-7xl text-5xl font-bold text-center">
                  Automotive Parts
                </p>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 delay-300
              md:group-hover:translate-x-[15%] md:group-hover:translate-y-[-30%] md:group-hover:scale-70"
                style={textStyle}
              >
                <p className="text-transparent border-2 md:text-7xl text-5xl font-bold text-center">
                  Automotive Parts
                </p>
              </div>

              <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start pb-68 pl-68 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-xl font-bold">
                  Your satisfaction guaranteed
                </p>
              </div>

              <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-xl font-medium">
                  Drive excellence in automotive performance with our
                  meticulously crafted sub-assemblies. Engineered to seamlessly
                  integrate into vehicle systems, our automotive parts
                  sub-assemblies ensure optimal functionality and reliability.
                  From engines to transmissions, our precision manufacturing
                  processes guarantee superior quality and compatibility.
                </p>
              </div>
            </div>

            {/* col 2 */}
            <div className="relative bg-black h-110 rounded-2xl overflow-hidden group transition-all duration-500 delay-300md:hoverscale-103">
              <img
                src={image6}
                alt="prototypes"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-95 z-10 transition-all duration-500 delay-300
                md:group-hover:scale-55 md:group-hover:top-26 md:group-hover:left-32"
              />

              <div className="absolute inset-0 flex items-center justify-center z-0 transition-all duration-500 delay-300 md:group-hover:scale-65
              md:group-hover:translate-x-[16%] md:group-hover:translate-y-[-28%]">
                <p className="text-white md:text-6xl text-5xl font-bold text-center">
                  Aluminium Components
                </p>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 delay-300 md:group-hover:scale-65
              md:group-hover:translate-x-[16%] md:group-hover:translate-y-[-28%]"
                style={textStyle}
              >
                <p className="text-transparent border-2 md:text-6xl text-5xl font-bold text-center">
                  Aluminium Components
                </p>
              </div>

              <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-xl font-medium">
                  <div className="absolute inset-0 flex flex-wrap items-end delay-300 justify-start p-6 mb-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-30">
                    <p className="text-white text-xl font-medium">
                      Drive excellence in automotive performance with our
                      meticulously crafted sub-assemblies. Engineered to seamlessly
                      integrate into vehicle systems, our automotive parts
                      sub-assemblies ensure optimal functionality and reliability.
                      From engines to transmissions, our precision manufacturing
                      processes guarantee superior quality and compatibility.
                    </p>
                  </div>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <ServiceExplanation />
    </motion.div>
    // </div>
  );
};

export default Services;
