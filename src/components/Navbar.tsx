import React from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div className="container pt-1 ">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="ml-3 text-xl font-bold">
          <a href="#hero">
            <Image
              src="/images/logo2-removebg-preview.png"
              alt="logo"
              width={80}
              height={65}
              priority
            />
          </a>
        </div>

        {/* Desktop Menu */}
         <ul className="gap-5 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#explore">Explore</a></li>
          <li className="menuLink"><a href="#about">About us</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 md-4 md:hidden">
          <li className="menuLink">
            <a href="#hero" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="menuLink">
            <a href="#explore" onClick={toggleMenu}>
              Explore
            </a>
          </li>
          <li className="menuLink">
            <a href="#about" onClick={toggleMenu}>
              About Us
            </a>
          </li>
          <li className="menuLink">
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
    </div>
  );
};


export default Navbar;
