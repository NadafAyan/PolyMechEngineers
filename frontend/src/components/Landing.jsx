import {React, useEffect} from 'react'
import { motion } from "framer-motion";
// import Logo from '../assets/landingPage/LogoImage.png';
import Text from '../assets/landingPage/PolymechText.png';
import { Link } from 'react-router-dom';
import image1 from '../assets/landingPage/1.png';
import image3 from '../assets/landingPage/3.png';
import image4 from '../assets/landingPage/4.png';
import Logo from '../assets/Polymech_Logo_updated-removebg-preview.png';
import graphite1 from '../assets/landingPage/graphite bg removed 1.png';
import graphite2 from '../assets/landingPage/trode.png';

const Landing = () => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
    
      const timer = setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1000);
    
      return () => clearTimeout(timer);
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

        <img src={graphite1} alt="image" className="absolute top-120 -right-75 -rotate-[73.99deg] z-0 blur-[1.8px]" />
        <img src={graphite2} alt="image" className='absolute -left-87 top-120 rotate-[38deg] blur-[1.8px]'/>


        <div className='w-full flex justify-center items-center min-h-screen'>
            <div className='flex flex-col justify-center items-center mt-20'>
            <img src={Logo} alt="PolyMech Logo" className='h-55 w-auto'/> <br />
            <img src={Text} alt="Text" className=''/>
            
            <Link to="/home">
            <button className="bg-black text-white text-2xl font-semibold px-12 py-4 rounded-3xl hover:bg-gray-800 transition mt-24">
              Get Started
            </button>
          </Link>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Landing