import React from 'react';
// import image1 from '../assets/landingPage/1.png';
import image2 from '../assets/landingPage/4.png';
// import image3 from '../assets/landingPage/2.png';
import image4 from '../assets/homeImage.png';



const Home = () => {
  return (
    <div className="font-montserrat relative bg-[#EEF6FA] min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="space-y-10 text-center">
        
        {/* <img src={image1} alt="image1" className='absolute rotate-55 top-30 -right-30 z-0 opacity-60 '/> */}
        <img src={image2} alt="image2" className='-rotate-38 absolute -left-60 -top-1 opacity-60 z-0'/>
        {/* <img src={image3} alt="image3" className='absolute top-150 -left-30 opacity-60 '/> */}
        <img src={image4} alt="image4" className='absolute -rotate-110 opacity-60 top-150 left-350'/>

        <div className="flex flex-wrap justify-center items-center gap-2">
          <h3 className=" text-4xl font-bold">INNOVATING TOMORROW</h3>
          <span className="bg-[#feb602]  py-1 pl-1.5 pr-14 rounded-r-2xl text-4xl  font-bold">
            TODAY
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3">
          <span className="bg-[#feb602] px-4 py-2 text-6xl rounded-l-2xl pl-14 font-bold tracking-wider z-10">
            PRECISION
          </span>
          <h1 className="text-6xl font-bold tracking-wider z-10">
            EDM GRAPHITE ELECTRODE
          </h1>
        </div>

        <p className="text-4xl pt-12 tracking-wider font-normal leading-relaxed">
          Engineered for accuracy, durability,<br className="hidden md:block" />
          and unmatched performance
        </p>
      </div>
    </div>
  );
};

export default Home;
