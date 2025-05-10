import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/landingPage/Logo.png";

const Footer = () => {
  return (
    <div className="bg-white text-gray-800 px-4 pt-10">
      {/* Logo */}
      <div className="text-center mb-6">
        <img src={logo} alt="PolyMech Engineers" className="h-20 mx-auto" />
      </div>

      {/* Main Info + Socials */}
      <div className="flex flex-col md:flex-row justify-between gap-10 w-full">
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt size={24} className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Address</h3>
              <a
                href="https://www.google.com/maps/place/Polymech+Engineers/@16.712985,74.449895,21z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:text-yellow-500 transition">
                  Industrial Estate 22/68 Ganesh nagar 9th lane, Ichalkaranji
                </p>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <FaEnvelope size={24} className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p>polymecheng@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhoneAlt size={24} className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Contact</h3>
              <p>Tel: +91 9665756396, +91 9422582439</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-6">
            <a
              href="https://x.com/polymecheng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-black hover:text-yellow-400 transition" size={24} />
            </a>
            <a
              href="https://www.instagram.com/polymech_engineers/profilecard/?igsh=NTd1bDVxeGM5eXJ0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-black hover:text-yellow-400 transition" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/polymech-engineers/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-black hover:text-yellow-400 transition" size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col justify-center items-center mt-10 bg-black m-0">
        <p className="text-center text-sm py-2 px-4 text-white">
          Copyright © 2025 | All Rights Reserved by PolyMech Engineers. &reg;
          ISO 9001 Certified Company
        </p>
        <p className="text-center text-sm py-2 px-4 text-white">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/ayan-nadaf-8119462ba/"
            className="hover:text-yellow-400 transition"
            target="_blank"
          >
            Ayan
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/vaibhav-t-793173277/"
            className="hover:text-yellow-400 transition"
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
