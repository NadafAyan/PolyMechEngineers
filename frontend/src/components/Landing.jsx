import {React, useEffect} from 'react'
import { motion } from "framer-motion";
// import Logo from '../assets/landingPage/LogoImage.webp';
import Text from '../assets/landingPage/PolymechText.webp';
import { Link } from 'react-router-dom';
import image1 from '../assets/landingPage/1.webp';
import image3 from '../assets/landingPage/3.webp';
import image4 from '../assets/landingPage/4.webp';
import Logo from '../assets/LandingLogo.webp';
import graphite1 from '../assets/landingPage/graphite bg removed 1.webp';
import graphite2 from '../assets/replace.webp';

const Landing = () => {
    // useEffect(() => {
    //   document.body.style.overflow = "hidden";
    
    //   const timer = setTimeout(() => {
    //     document.body.style.overflow = "auto";
    //   }, 1000);
    
    //   return () => clearTimeout(timer);
    // }, []);
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-[#6ebae0] min-h-screen overflow-hidden"
        >
          <title>Welcome to Polymech Engineers</title>
    <div className='relative bg-[#EEF6FA] min-h-screen overflow-hidden'>

        {/* <img src={graphite1} alt="image" className="absolute md:top-120 md:-right-75 md:-rotate-[73.99deg] z-0 blur-[1.8px]
        top-140 -right-55 -rotate-[73.99deg]  md:z-0" />
        <img src={graphite2} alt="image" className='absolute md:-left-50 md:top-120 md:rotate-[45deg] blur-[1.8px] z-0
        top-140 scale-60 rotate-[38deg] -left-60'/> */}


        <div className='w-full flex justify-center items-center min-h-screen'>
            <div className='flex flex-col justify-center items-center mt-20'>
            <img src={Logo} alt="Polymech Logo" className='h-55 w-auto'/> <br />
            <img src={Text} alt="Text" className=''/>
            
            <Link to="/home">
            <button className="bg-black text-white text-2xl font-semibold px-12 py-4 rounded-3xl z-1 hover:bg-gray-800 transition mt-24">
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