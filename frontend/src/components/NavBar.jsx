import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/landingPage/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: "/home", label: "HOME" },
    { path: "/services", label: "SERVICES" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-sm border-b border-white/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex-shrink-0">
            <img src={logo} alt="PolyMech Engineers" className="h-12 w-auto sm:h-14" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative text-sm lg:text-base font-semibold transition-colors duration-300 ${
                  currentPath === path ? "text-black" : "text-gray-600 hover:text-black"
                }`}
              >
                <span>{label}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    currentPath === path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md rounded-b-lg">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  currentPath === path
                    ? "text-black bg-yellow-100"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;