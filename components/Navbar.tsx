"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home" },
    { name: "Services" },
    { name: "About" },
    { name: "Blog" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (name: string) => {
    setActiveNav(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 flex items-center justify-between w-full px-4 sm:px-6 lg:px-18 py-2 z-50">
      <div className="flex items-center">
        <Image
          src="/assets/xoegan_logo.svg"
          alt="Xoegan Logo"
          width={135}
          height={135}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-[135px] lg:h-[135px]"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href="#"
            onClick={() => handleNavClick(link.name)}
            className={`px-3 lg:px-4 py-2 text-base lg:text-lg font-medium transition-colors ${
              activeNav === link.name
                ? "text-black bg-no-repeat bg-center"
                : "text-gray-600 hover:text-black"
            }`}
            style={{
              backgroundImage:
                activeNav === link.name
                  ? "url('/assets/activeNavBg.svg')"
                  : "none",
              backgroundSize: "contain",
            }}
          >
            {link.name}
          </a>
        ))}
        <button className="px-4 lg:px-6 py-2 lg:py-3 text-base lg:text-lg font-medium text-black bg-white border border-gray-800 rounded-xl shadow-md hover:bg-gray-100 transition-colors">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
          <div className="flex flex-col py-4 px-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={() => handleNavClick(link.name)}
                className={`px-4 py-3 text-lg font-medium transition-colors rounded-lg ${
                  activeNav === link.name
                    ? "text-black bg-gray-100"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="mt-4 mx-4 px-6 py-3 text-lg font-medium text-black bg-white border border-gray-800 rounded-xl shadow-md hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
