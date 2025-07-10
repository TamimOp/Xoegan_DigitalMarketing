"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll position to navbar background opacity
  const navbarOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const navbarBlur = useTransform(scrollY, [0, 100], [0, 10]);

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
    <motion.nav
      className="absolute top-0 left-0 right-0 flex items-center justify-between w-full px-4 sm:px-6 lg:px-18 py-2 z-50"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${navbarOpacity})`,
        backdropFilter: `blur(${navbarBlur}px)`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/assets/xoegan_logo.svg"
          alt="Xoegan Logo"
          width={135}
          height={135}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-[135px] lg:h-[135px]"
        />
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div
        className="hidden md:flex items-center gap-6 lg:gap-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {navLinks.map((link, index) => (
          <motion.a
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.name}
          </motion.a>
        ))}
        <motion.button
          className="p-2 text-base lg:text-lg font-medium text-black border border-gray-800 transition-colors"
          style={{
            borderRadius: "8px",
            background: "rgba(217, 217, 217, 0.20)",
            boxShadow:
              "4.767px -4.767px 4.767px 0px rgba(165, 165, 165, 0.20) inset, -4.767px 4.767px 4.767px 0px rgba(255, 255, 255, 0.20) inset",
            backdropFilter: "blur(0.762666642665863px)",
            width: "178.296px",
            height: "49.306px",
            flexShrink: 0,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
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
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-4 px-4 space-y-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href="#"
                onClick={() => handleNavClick(link.name)}
                className={`px-4 py-3 text-lg font-medium transition-colors rounded-lg ${
                  activeNav === link.name
                    ? "text-black bg-gray-100"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              className="mt-4 mx-4 px-6 py-3 text-lg font-medium text-black border border-gray-800 transition-colors"
              style={{
                borderRadius: "4px",
                background: "rgba(217, 217, 217, 0.20)",
                boxShadow:
                  "4.767px -4.767px 4.767px 0px rgba(165, 165, 165, 0.20) inset, -4.767px 4.767px 4.767px 0px rgba(255, 255, 255, 0.20) inset",
                backdropFilter: "blur(0.762666642665863px)",
                width: "178.296px",
                height: "49.306px",
                flexShrink: 0,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
