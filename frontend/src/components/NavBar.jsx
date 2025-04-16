import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/landingPage/Logo.png";

const styles = {
  fontFamily: "Montserrat, sans-serif"
};

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 shadow-md bg-[#edf5f9]" style={styles}>
      <div className="flex justify-between items-center px-4 py-3 md:px-10">
        <Link to="/"><img src={logo} alt="PolyMech Engineers" className="h-18 w-auto " /></Link>

        <ul className="flex space-x-14 text-2xl font-semibold">
          <li>
            <Link to="/home" className="hover:underline hover:decoration-yellow-400 hover:decoration-4 ">HOME</Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline hover:decoration-yellow-400 hover:decoration-4 ">SERVICES</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:decoration-yellow-400 hover:decoration-4 ">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline hover:decoration-yellow-400 hover:decoration-4 ">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
