import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/landingPage/Logo.png";

const styles = {
  fontFamily: "Montserrat, sans-serif",
};

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { path: "/home", label: "HOME" },
    { path: "/services", label: "SERVICES" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md"
      style={styles}
    >
      <div className="flex justify-between items-center px-4 py-3 md:px-10">
        <Link to="/">
          <img src={logo} alt="PolyMech Engineers" className="h-18 w-auto " />
        </Link>

        <ul className="flex space-x-14 text-2xl font-semibold">
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
    </nav>
  );
};

export default NavBar;
