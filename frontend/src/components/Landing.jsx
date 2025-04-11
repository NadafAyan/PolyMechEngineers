import React from 'react'
import Logo from '../assets/landingPage/LogoImage.png';
import Text from '../assets/landingPage/PolymechText.png';
import { Link } from 'react-router-dom';
import image1 from '../assets/landingPage/1.png';
import image2 from '../assets/landingPage/2.png';
import image3 from '../assets/landingPage/3.png';
import image4 from '../assets/landingPage/4.png';


const Landing = () => {
  return (
    <div className='relative bg-[#EEF6FA] min-h-screen overflow-hidden'>

        <img src={image1} alt="image" className='absolute top-10 -right-30 opacity-60  rotate-35' />
        {/* <img src={image2} alt="image" className='absolute bottom-1 left-25 rotate-12 opacity-70 animate-pulse'/> */}
        <img src={image4} alt="image" className='absolute -left-70 top-50 -rotate-45 opacity-70 '/>


        <div className='w-full flex justify-center items-center min-h-screen'>
            <div className='flex flex-col justify-center items-center'>
            <img src={Logo} alt="PolyMech Logo" className=''/> <br />
            <img src={Text} alt="Text" className=''/>
            
            <Link to="/home">
            <button className="bg-black text-white text-2xl font-semibold px-12 py-4 rounded-3xl hover:bg-gray-800 transition mt-24">
              Get Started
            </button>
          </Link>
            </div>
        </div>
    </div>
  )
}

export default Landing