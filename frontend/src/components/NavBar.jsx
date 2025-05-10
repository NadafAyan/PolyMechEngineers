import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/landingPage/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const styles = {
  fontFamily: "Montserrat, sans-serif",
};

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
  <div className="max-w-[1280px] mx-auto w-full flex justify-between items-center px-4 py-3 md:px-10">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="PolyMech Engineers" className="h-16 w-auto" />
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl text-black focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-base lg:text-xl font-semibold">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`relative group ${
                  currentPath === path ? "text-black" : ""
                }`}
              >
                <span className="transition-colors duration-300">{label}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-yellow-400 transition-all duration-300 ${
                    currentPath === path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 text-lg font-semibold pb-6 bg-white/90 backdrop-blur-md">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`relative group ${
                  currentPath === path ? "text-black" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="transition-colors duration-300">{label}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-yellow-400 transition-all duration-300 ${
                    currentPath === path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
