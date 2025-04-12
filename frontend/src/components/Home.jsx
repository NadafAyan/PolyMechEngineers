import React from 'react';
import About from './About';

const Home = () => {
  return (
    <div className="Home">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] w-screen">
        <div className="space-y-5 flex flex-col justify-evenly items-center text-center md:text-middle md:py-20 md:px-0 w-screen">
          <div className="flex flex-row items-center md:items-start justify-center md:justify-start space-x-2 md:space-x-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-700">INNOVATING TOMORROW</h3>
            <div className="bg-[#feb602] w-30 h-9 rounded-r-lg text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700">TODAY</h3>
            </div>
          </div>
          <div className="flex flex-row items-center md:items-start justify-center md:justify-start space-x-2 md:space-x-4 text-center">
            <div className="bg-[#feb602] w-85 h-18 rounded-l-xl text-right">
              <h1 className="text-6xl xl:text-5xl font-bold">PRECISION</h1>
            </div>
            <h1 className="text-6xl xl:text-5xl font-bold justify-left">EDM GRAPHITE ELECTRODE</h1>
          </div>
          <p className="text-4xl whitespace-nowrap">
            Engineered for accuracy, durability,
            <p>and unmatched performance</p>
          </p>
        </div>
      </div>
      <hr />
     
      <About fullHeight={false} />
    </div>
  );
};

export default Home;