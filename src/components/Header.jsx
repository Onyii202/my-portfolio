import React, { useState, useRef } from "react";

import { FaAddressBook, FaAmazon, FaBars, FaBriefcase, FaBriefcaseMedical, FaBroom } from "react-icons/fa";
import { Link } from "react-router-dom";
import tech from '../assets/images/tech.png'


const Header = ({scrollToSection, scrollToFeatured, scrollToContact}) => {
  let links = [
    { name: "HOME", link: "/" },
    { name: "FEATURED PRODUCTS", link: "/" },
    { name: "ABOUT ME", link: "/" },
    { name: "CONTACT ME", link: "/" },
  ];

  const  [open, setOpen] =useState(false);
  return (
    <div className="md:flex items-center justify-center h-16 bg-gray-500 justify-around poppins font-semibold sticky top-0 z-50">
      <div className="font-bold text-white">Leinad.</div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <ul
        className={`md:flex md:items-center gap-6 text-md md:pb-0 pb-12 absolute md:static
          bg-gray-500 md:z-auto z-10 left-0 w-72 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "left-0 opacity-100"
              : "left-[-490px] md:opacity-100 opacity-0"
          }`}
      >
        {links.map((link) => (
          <li className="md:my-0 my-7" key={link.name}>
            {link.name === "FEATURED PRODUCTS" ? (
              <span
                onClick={scrollToFeatured}
                className="text-black hover:text-indigo-600 duration-500 cursor-pointer"
              >
                {link.name}
              </span>
            ) : link.name === "ABOUT ME" ? (
              <span
                onClick={scrollToSection}
                className="text-black hover:text-indigo-600 duration-500 cursor-pointer"
              >
                {link.name}
              </span>
            ) : link.name === "CONTACT ME" ? (
              <span
                onClick={scrollToContact}
                className="text-black hover:text-indigo-600 duration-500 cursor-pointer"
              >
                {link.name}
              </span>
            ) : (
              <a href={links.link}>{link.name}</a>
            )}
          </li>
        ))}
        <button className="bg-green-300 w-40 h-12 rounded-md inline-flex items-center justify-center space-x-2 gap-2">
          View Resume
          <FaBriefcase />
        </button>
      </ul>
    </div>
  );
};

export default Header;
