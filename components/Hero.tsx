"use client";

import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { motion, Variants } from "framer-motion";

const mangoGrotesque = localFont({
  src: [
    {
      path: "../public/fonts/MangoGrotesque-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mango-grotesque",
});

const Hero = () => {
  // Animation variants for content only - properly typed
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative flex flex-col lg:flex-row min-h-screen bg-[#FDFBF6] pt-0 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left Section */}
      <motion.div
        className="flex items-center flex-shrink-0 rounded-br-[10px] w-full lg:w-[60%] min-h-[70vh] lg:h-[100vh] relative z-10"
        style={{
          padding: "140px 20px 50px 20px",
          gap: "10px",
          background:
            "linear-gradient(180deg, rgba(255, 238, 188, 0.30) 0%, rgba(247, 193, 158, 0.23) 91.5%, rgba(255, 125, 69, 0.12) 100%)",
          boxShadow:
            "-4px -4px 9.727px 0px rgba(203, 197, 177, 0.60) inset, 0px 0px 9.727px 0px rgba(255, 255, 255, 0.60) inset",
          backdropFilter: "blur(12.64466667175293px)",
        }}
        variants={fadeInLeft}
      >
        {/* Text Content */}
        <motion.div
          className="w-full flex flex-col relative z-30"
          variants={staggerContainer}
        >
          <div className="flex flex-col items-start text-start ml-20">
            <motion.h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#4A2E23] ${mangoGrotesque.className}`}
              style={{ letterSpacing: "0.96px" }}
              variants={fadeInUp}
            >
              We are Creative Digital & <br /> Marketing Agency
            </motion.h1>
            <motion.p
              className="mt-4 lg:mt-6 text-base sm:text-lg text-[#4A2E23]"
              variants={fadeInUp}
            >
              We Offer A Full Suite Of Digital Marketing Services Including SEO,
              PPC, Social Media <br /> Marketing, And More. Explore Each Service
              To Find The Right Solution For Your <br /> Business.
            </motion.p>
          </div>
          <motion.div
            className="mt-8 lg:mt-12 relative flex items-center gap-6"
            variants={fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: -48 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              viewport={{ once: true }}
              className="absolute top-0"
            >
              <Image
                src="/assets/pauseplay.png"
                alt="Play"
                width={215}
                height={58}
                className="hidden sm:block flex-shrink-0 w-[150px] md:w-[180px] lg:w-[215px]"
              />
            </motion.div>
            <motion.button
              className="bg-[#FF7D45] text-white px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold shadow-lg sm:ml-16 md:ml-28 lg:ml-40 mx-auto sm:mx-0"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 125, 69, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Book a Call
            </motion.button>
          </motion.div>
          <motion.div
            className="mt-10 lg:mt-16 flex flex-wrap justify-center sm:justify-start items-center gap-5 sm:gap-8 lg:gap-10 overflow-x-auto pl-0 md:pl-12 2xl:pl-25"
            variants={staggerContainer}
          >
            {[
              { src: "/assets/Slack1.svg", alt: "Slack" },
              { src: "/assets/Google.svg", alt: "Google" },
              { src: "/assets/Netflix.svg", alt: "Netflix" },
              { src: "/assets/amazon.svg", alt: "Amazon" },
              { src: "/assets/Linkedin.svg", alt: "LinkedIn" },
            ].map((logo) => (
              <motion.div
                key={logo.alt}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={110}
                  height={30}
                  className="w-20 sm:w-24 lg:w-[110px] h-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="relative flex items-center justify-center md:justify-start gap-2 sm:gap-3 lg:gap-4 flex-1 min-h-[50vh] py-10 lg:py-0 pr-4 sm:pr-6 lg:pr-8 z-40"
        variants={fadeInRight}
      >
        {/* heroImage1.jpg - smaller image */}
        <motion.div
          className="rounded-full flex-shrink-0"
          style={{
            width: "clamp(120px, 12vw, 260px)",
            height: "clamp(180px, 18vw, 390px)",
            background:
              "url('/assets/heroImage1.jpg') lightgray 50% / cover no-repeat",
            boxShadow:
              "-34px 137px 39px 0px rgba(0, 0, 0, 0.00), -22px 87px 36px 0px rgba(0, 0, 0, 0.02), -12px 49px 30px 0px rgba(0, 0, 0, 0.08), -5px 22px 23px 0px rgba(215, 216, 202, 0.13), -1px 5px 12px 0px rgba(0, 0, 0, 0.15)",
          }}
          variants={scaleIn}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />

        {/* heroImage2.png - larger image */}
        <motion.div
          className="rounded-full flex-shrink-0"
          style={{
            width: "clamp(180px, 18vw, 420px)",
            height: "clamp(300px, 30vw, 700px)",
            background:
              "url('/assets/heroImage2.png') lightgray 50% / cover no-repeat",
            boxShadow:
              "-77px 217px 64px 0px rgba(0, 0, 0, 0.00), -49px 139px 59px 0px rgba(0, 0, 0, 0.02), -28px 78px 50px 0px rgba(0, 0, 0, 0.07), -12px 35px 37px 0px rgba(0, 0, 0, 0.11), -3px 9px 20px 0px rgba(211, 212, 198, 0.13)",
          }}
          variants={scaleIn}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
        />

        {/* Floating cards */}
        <motion.div
          className="absolute top-[20%] right-2 sm:right-4 lg:right-8 flex flex-col justify-center items-center gap-[10px] flex-shrink-0 w-[120px] sm:w-[150px] lg:w-[170px] h-[45px] sm:h-[50px] lg:h-[56px] px-[8px] sm:px-[10px] py-[6px] sm:py-[8px]"
          style={{
            borderRadius: "12px 12px 12px 0px",
            background: "rgba(255, 255, 255, 0.60)",
            boxShadow: "-2px 4px 26px 1px rgba(0, 0, 0, 0.18)",
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <p className="font-semibold text-xs sm:text-sm lg:text-base">
              Contact more
            </p>
            <Image
              src="/assets/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] right-2 sm:right-4 lg:right-8 flex flex-col justify-center items-center gap-[10px] flex-shrink-0 w-[180px] sm:w-[210px] lg:w-[239px] h-[50px] sm:h-[55px] lg:h-[61px] px-[20px] sm:px-[26px] lg:px-[32px] py-[10px] sm:py-[12px] lg:py-[14px]"
          style={{
            borderRadius: "12px 0px 12px 12px",
            background: "rgba(255, 255, 255, 0.86)",
            boxShadow: "-2px 4px 26px 1px rgba(0, 0, 0, 0.18)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <p className="font-bold text-blue-600 text-base sm:text-lg lg:text-xl">
              500+
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Clients and book a demo today
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Background Elements - Ellipses with content visibility only */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3 }}
      >
        {/* Blue Ellipses */}
        <motion.div
          className="absolute top-[20%] left-[8%]"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/EllipseBlue.svg"
            alt=""
            width={15}
            height={20}
            className="opacity-70"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-[10%] right-[12%]"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Image
            src="/assets/EllipseBlue.svg"
            alt=""
            width={15}
            height={20}
            className="opacity-60"
          />
        </motion.div>

        {/* Green Ellipses */}
        <motion.div
          className="absolute top-[20%] right-[30%]"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Image
            src="/assets/EllipseGreen.svg"
            alt=""
            width={15}
            height={20}
            className="opacity-75"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-[35%] left-[35%]"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -180],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Image
            src="/assets/EllipseGreen.svg"
            alt=""
            width={15}
            height={20}
            className="opacity-65"
          />
        </motion.div>

        {/* Orange Ellipses */}
        <motion.div
          className="absolute top-[38%] left-[45%]"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 270],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Image
            src="/assets/EllipseOrange.svg"
            alt=""
            width={15}
            height={20}
            className="opacity-80"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-[5%] right-[45%]"
          animate={{
            y: [0, 25, 0],
            x: [0, 20, 0],
            rotate: [0, -270],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <Image
            src="/assets/EllipseOrange.svg"
            alt=""
            width={15}
            height={20}
            className="opacity-70"
          />
        </motion.div>

        {/* Additional ellipses for better spread */}
        <motion.div
          className="absolute top-[10%] right-[5%]"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -90],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <Image
            src="/assets/EllipseBlue.svg"
            alt=""
            width={15}
            height={20}
            className="opacity-50"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] right-[30%]"
          animate={{
            y: [0, 18, 0],
            x: [0, -12, 0],
            rotate: [0, 120],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <Image
            src="/assets/EllipseGreen.svg"
            alt=""
            width={15}
            height={20}
            className="opacity-55"
          />
        </motion.div>
      </motion.div>

      {/* Star Rating */}
      <motion.div
        className="absolute top-[55%] sm:top-1/2 -translate-y-1/2 left-[45%] sm:left-[50%] md:left-[53%] lg:left-[57%] bg-white p-2 sm:p-3 rounded-full shadow-lg flex items-center gap-1 sm:gap-2 z-40"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.15, rotate: 5 }}
      >
        <Image
          src="/assets/star.svg"
          alt="Star"
          width={24}
          height={24}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
        />
        <span className="font-bold text-sm sm:text-base lg:text-lg">5.0</span>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
