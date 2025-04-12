import React from 'react';

const About = ({ fullHeight = true }) => {
  return (
    <div className={`bg-[#ffff] w-full flex flex-col items-center justify-center ${fullHeight ? 'min-h-screen' : 'my-10'}`}>
      <h1 className="text-black mb-6 mt-4 text-6xl xl:text-6xl font-bold">ABOUT US</h1>

      <div className="bg-[#484848] text-white p-8 rounded-lg shadow-lg max-w-4xl w-full relative">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-200">
          Driving Innovation in EDM Solutions
        </h2>

        <div className="flex items-center justify-center mb-6 ">
          <span className="text-2xl font-bold text-white">Our</span>
          <span className="text-2xl font-bold bg-[#feb602] text-black  h-9 rounded ml-2 w-35 text-left rounded-r-xl">
            Mission
          </span>
        </div>

        <p className="text-lg text-center text-gray-300">
          We empower industries with precision-engineered graphite electrodes that optimize EDM performance.
        </p>
      </div>
    </div>
  );
};

export default About;