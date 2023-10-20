import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbg from "../assets/images/bg-footer.png";

import xicon from "../assets/images/xclose.png";
import logo from "../assets/images/peniel.png";
import NavMenuComponent from "./NavMenuComponent";
import menu from '../assets/images/menu.png'

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="w-[100%]  ">
      <nav
        
        className=" bg-white shadow-lg border-none w-[100%] fixed z-50 lg:-my-20 -my-20 animate animate-fade-down animate-ease-linear "
      >
        <div className=" container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between sm:h-10 h-16 lg:h-20 container">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  {/* <img
                    className="lg:h-20 lg:w-20   sm:w-14 w-14"
                    src={logo}
                    alt="Logo"
                    onClick={closeMenu}
                  /> */}
                  <h2 className="font-bold text-lg">PENIEL CHURCH</h2>
                </Link>
              </div>
            </div>
            <div className="hidden md:block animate animate-fade-down animate-ease-linear ">
              <div className="ml-10 flex   items-baseline space-x-14">
                <Link
                  to="/"
                  className="group text-black   rounded-md text-sm font-medium"
                >
                  <NavMenuComponent menu={"Home"} />
                </Link>

                <Link
                  to="/About"
                  className="group text-black   rounded-md text-sm font-medium"
                >
                  <NavMenuComponent menu={"About"} />
                </Link>

                <Link
                  to="/Holyservices"
                  className=" group text-black   rounded-md text-sm font-medium"
                >
                  <NavMenuComponent menu={"Holyservices"} />
                </Link>

                <Link
                  to="/Kids"
                  className=" group text-black   rounded-md text-sm font-medium"
                >
                  <NavMenuComponent menu={"Kids"} />
                </Link>

                <Link
                  to="/contact"
                  className=" group text-black   rounded-md text-sm font-medium"
                >
                  <NavMenuComponent menu={"Contact"} />
                </Link>
                <Link
                  to="/donate"
                  className=" group text-black   rounded-md text-sm font-medium"
                >
                  <NavMenuComponent menu={"Donate"} />
                </Link>
              </div>
            </div>
            <div className="md:hidden  flex items-center animate animate-fade-down animate-ease-linear">
              {open ? (
                <button
                  type="button"
                  className="text-gray-800 hover:text-gray-600 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <img src={xicon} alt="Menu" className="h-8 w-8" />
                </button>
              ) : (
                <button
                  type="button"
                  className="text-gray-800   focus:outline-none"
                  onClick={toggleMenu}
                >
                  <img src={menu} alt="Close" className="h-8 w-8" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-500 transition-all    z-50 my-20 w-full  flex justify-start px-5 scroll-smooth animate-fade-down animate-ease-in ">
        {open && (
          <ul className="text-white  font-semibold md:hidden lg:hidden sm:hidden transform transition-all animate animate-fade-down animate-ease-linear ease-out duration-300 select-none fontstyle ">
            <li className="p-1 fontstyle">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="p-1 fontstyle">
              <Link to="/About" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="p-1 fontstyle">
              <Link to="/Holyservices" onClick={closeMenu}>
                Holyservices
              </Link>
            </li>
            <li className="p-1 fontstyle">
              <Link to="/Kids" onClick={closeMenu}>
                Kids
              </Link>
            </li>
            <li className="p-1 fontstyle">
              <Link to="/Contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
             <li className="p-1 fontstyle">
              <Link to="/Donate" onClick={closeMenu}>
                Donate
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
