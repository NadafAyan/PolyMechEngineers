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
    <div className="bg-white text-gray-800 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-10">
          <img
            src={logo}
            alt="PolyMech Engineers"
            className="h-16 sm:h-20 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold">Address</h3>
                <a
                  href="https://www.google.com/maps/place/Polymech+Engineers/@16.712985,74.449895,21z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition-colors duration-300"
                >
                  Industrial Estate 22/68 Ganesh nagar 9th lane, Ichalkaranji
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p>polymecheng@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold">Contact</h3>
                <p>Tel: +91 9665756396, +91 9422582439</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-6">
              <a
                href="https://x.com/polymecheng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaTwitter className="text-black hover:text-yellow-400 transition-colors" size={24} />
              </a>
              <a
                href="https://www.instagram.com/polymech_engineers/profilecard/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-black hover:text-yellow-400 transition-colors" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/polymech-engineers/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedinIn className="text-black hover:text-yellow-400 transition-colors" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-4 text-center text-sm">
          <p className="mb-2">
            Copyright © 2025 | All Rights Reserved by PolyMech Engineers. ® ISO 9001 Certified Company
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/ayan-nadaf-8119462ba/"
              className="hover:text-yellow-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ayan
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/vaibhav-t-793173277/"
              className="hover:text-yellow-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vaibhav
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;