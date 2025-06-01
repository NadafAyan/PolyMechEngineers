import {React, useEffect} from 'react'
import { motion } from "framer-motion";
import Text from '../assets/landingPage/PolymechText.png';
import { Link } from 'react-router-dom';
import Logo from '../assets/Polymech_Logo_updated-removebg-preview.png';
import graphite1 from '../assets/landingPage/graphite bg removed 1.png';
import graphite2 from '../assets/landingPage/trode.png';

const Landing = () => {
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
      <title>Welcome to PolyMech Engineers</title>
      <div className='relative bg-[#EEF6FA] min-h-screen overflow-hidden'>
        <img 
          src={graphite1} 
          alt="background decoration" 
          className="absolute w-[150%] md:w-[100%] top-[40%] -right-[20%] md:-right-[10%] -rotate-[74deg] z-0 blur-[1.8px] opacity-50 md:opacity-100"
        />
        <img 
          src={graphite2} 
          alt="background decoration" 
          className='absolute w-[150%] md:w-[100%] top-[40%] -left-[20%] md:-left-[10%] rotate-[38deg] blur-[1.8px] z-0 opacity-50 md:opacity-100'
        />

        <div className='relative z-10 w-full flex justify-center items-center min-h-screen px-4'>
          <div className='flex flex-col justify-center items-center max-w-xl'>
            <img 
              src={Logo} 
              alt="PolyMech Logo" 
              className='w-[80%] md:w-auto max-h-[200px] md:max-h-none'
            />
            <img 
              src={Text} 
              alt="PolyMech Engineers" 
              className='w-[90%] md:w-auto mt-4 md:mt-8'
            />
            
            <Link to="/home" className="mt-12 md:mt-24">
              <button className="bg-black text-white text-lg md:text-2xl font-semibold px-8 md:px-12 py-3 md:py-4 rounded-3xl hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;