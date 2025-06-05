import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/landingPage/new_logo.webp";

const Footer = () => {
  return (
    <div className="bg-white text-gray-800 px-0 pt-10">

      <div className="flex-1 text-center">
        <img
          src={logo}
          alt="Polymech Engineers"
          className="h-22 w-auto mx-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row px-5 md:px-15 lg:px-25 xl:px-35 w-full mt-10  justify-between gap-10 sm:justify-center ">
        <div className="flex-1 space-y-6 mt-0  ">

          <div className="flex items-start gap-4  ">
            <FaMapMarkerAlt size={24} className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Address</h3>
              <a
                href="https://www.google.com/maps/place/Polymech+Engineers/@16.712985,74.449895,21z/data=!4m6!3m5!1s0x3bc11d75abee1e31:0x60ba7aa36bc161e3!8m2!3d16.7129848!4d74.4498953!16s%2Fg%2F11fz0tvdts?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:text-yellow-500 transition ">
                  Industrial Estate 22/68 Ganesh nagar 9th lane, Ichalkaranji
                </p>
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope size={24} className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p>Polymecheng@gmail.com</p>
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

       
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-6">
            <a
              href="https://x.com/Polymecheng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-black hover:text-yellow-400 transition" size={24} />
            </a>
            <a
              href="https://www.instagram.com/Polymech_engineers/profilecard/?igsh=NTd1bDVxeGM5eXJ0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-black hover:text-yellow-400 transition" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/Polymech-engineers/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-black hover:text-yellow-400 transition" size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-black justify-center items-center mt-10 bg-black">
        <p className="text-center text-sm py-2 px-4 text-white">
          Copyright © 2025 | All Rights Reserved by Polymech Engineers. &reg;
          ISO 9001 Certified Company
        </p>
        <p className="text-center text-sm py-2 px-4 text-white">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/ayan-nadaf-8119462ba/"
            className=" hover:text-yellow-400 transition"
            target="_blank"
          >
            Ayan
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/vaibhav-t-793173277/"
            className=" hover:text-yellow-400 transition"
            target="_blank"
          >
            Vaibhav
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
