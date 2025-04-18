import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/landingPage/Logo.png";

const styles = {
  fontFamily: "Montserrat, sans-serif",
};

const NavBar = () => {
  return (
    <nav
      className="fixed top-0 w-full z-50 shadow-md bg-[#edf5f9]"
      style={styles}
    >
      <div className="flex justify-between items-center px-4 py-3 md:px-10">
        <Link to="/">
          <img src={logo} alt="PolyMech Engineers" className="h-18 w-auto " />
        </Link>

        <ul className="flex space-x-14 text-2xl font-semibold">
          <li>
            <Link to="/home" className="relative group">
              <span className="transition-colors duration-300">HOME</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 transition-all duration-350 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="relative group">
              <span className="transition-colors duration-300">SERVICES</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="relative group">
              <span className="transition-colors duration-300">GALLERY</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>          
          <Link to="/about" className="relative group">
              <span className="transition-colors duration-300">ABOUT</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
          <Link to="/contact" className="relative group">
              <span className="transition-colors duration-300">CONTACT</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
