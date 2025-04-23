import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt,  FaInstagram, FaLinkedinIn,FaTwitter } from "react-icons/fa";
import logo from "../assets/landingPage/Logo.png";

const Footer = () => {
  return (
    <div className="bg-white py-5  text-gray-800 px-10 py-10">
        {/* Logo in Center */}
        <div className="flex-1 text-center">
            <img src={logo} alt="PolyMech Engineers" className="h-18 w-auto mx-auto" />
        </div>
        
        <div className="flex flex-row px-20 w-full mt-10  " >
       
            <div className="flex-1 row-1 space-y-5 mt-0  ">
                {/* Info */}
                <div className="flex items-start gap-4">
                    <FaMapMarkerAlt size={24} className="text-yellow-400 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold">Address</h3>
                        <p>
                            Industrial Estate 22/68 Ganesh nagar 9th lane, Ichalkaranji
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <FaEnvelope size={24} className="text-yellow-400 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold">Email</h3>
                        <p>polymecheng@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <FaPhoneAlt size={24} className="text-yellow-400 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold">Contact</h3>
                        <p>Tel: +91 9665756396, +91 9422582439</p>
                    </div>
                </div>
            </div>
      

            <div className="flex-1  row-1  jusify-center items-center text-center">
                <div className="flex flex-col items-center justify-center h-full ">
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <div className="flex justify-center items-top gap-4">                
                    <a href="https://x.com/polymecheng" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} className="text-black hover:text-yellow-400 transition" />
                    </a>
                    <a href="https://www.instagram.com/polymech_engineers/profilecard/?igsh=NTd1bDVxeGM5eXJ0" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} className="text-black hover:text-yellow-400 transition" />
                    </a>
                    <a href="https://www.linkedin.com/company/polymech-engineers/about/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size={24} className="text-black hover:text-yellow-400 transition" />
                    </a>
            </div>
            </div>
           
    
    </div>
</div>
       
    </div>
  );
};

export default Footer;