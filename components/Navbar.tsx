"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const navLinks = [
    { name: "Home" },
    { name: "Services" },
    { name: "About" },
    { name: "Blog" },
  ];

  return (
    <nav className="flex items-center justify-between w-full px-30 py-2 fixed z-30">
      <div className="flex items-center">
        <Image
          src="/assets/xoegan_logo.svg"
          alt="Xoegan Logo"
          width={150}
          height={50}
        />
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href="#"
            onClick={() => setActiveNav(link.name)}
            className={`px-4 py-2 text-lg font-medium transition-colors ${
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
        <button className="px-6 py-3 text-lg font-medium text-black bg-white border border-gray-800 rounded-xl shadow-md hover:bg-gray-100">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
