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

const Booking = () => {
  // Animation variants with reduced movement to prevent overflow
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageRightVariants: Variants = {
    hidden: { opacity: 0, x: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textLeftVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="py-16 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F8F2E4 0%, #F5E4DC 100%)",
      }}
    >
      {/* First Section - Left Image, Right Content */}
      <motion.div
        className="max-w-6xl mx-auto mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-[106px]">
          {/* Left Image */}
          <motion.div
            className="relative overflow-hidden w-full max-w-[333px] aspect-[333/397] flex-shrink-0"
            style={{
              borderRadius: "40px 40px 0px 40px",
              boxShadow:
                "-34px 137px 39px 0px rgba(0, 0, 0, 0.00), -22px 87px 36px 0px rgba(0, 0, 0, 0.02), -12px 49px 30px 0px rgba(0, 0, 0, 0.08), -5px 22px 23px 0px rgba(215, 216, 202, 0.13), -1px 5px 12px 0px rgba(0, 0, 0, 0.15)",
            }}
            variants={imageVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Image
              src="/assets/heroImage1.jpg"
              alt="Business consultation"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 max-w-2xl w-full"
            variants={textVariants}
          >
            <motion.h2
              className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#4A3728] mb-6 leading-tight ${mangoGrotesque.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              We Give Best Solution To Grow Up Your Business
            </motion.h2>
            <motion.p
              className="text-[#3F3F3F] text-lg lg:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              At Our Agency, We&apos;re Dedicated To Helping Businesses Like
              Yours Reach Their Full Potential.
            </motion.p>
            <motion.button
              className="bg-[#FF6B47] hover:bg-[#E55A40] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              style={{
                boxShadow:
                  "-40px 47px 17px 0px rgba(255, 125, 69, 0.00), -26px 30px 16px 0px rgba(255, 125, 69, 0.03), -15px 17px 13px 0px rgba(255, 125, 69, 0.10), -6px 7px 10px 0px rgba(255, 125, 69, 0.17), -2px 2px 5px 0px rgba(255, 125, 69, 0.20)",
              }}
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Second Section - Left Content, Right Image */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 xl:gap-[106px]">
          {/* Right Image */}
          <motion.div
            className="relative overflow-hidden w-full max-w-[333px] aspect-[333/397] flex-shrink-0"
            style={{
              borderRadius: "40px 40px 40px 0px",
              boxShadow:
                "-34px 137px 39px 0px rgba(0, 0, 0, 0.00), -22px 87px 36px 0px rgba(0, 0, 0, 0.02), -12px 49px 30px 0px rgba(0, 0, 0, 0.08), -5px 22px 23px 0px rgba(215, 216, 202, 0.13), -1px 5px 12px 0px rgba(0, 0, 0, 0.15)",
            }}
            variants={imageRightVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Image
              src="/assets/bookingImage.jpg"
              alt="Business team collaboration"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Left Content */}
          <motion.div
            className="flex-1 max-w-2xl w-full"
            variants={textLeftVariants}
          >
            <motion.h2
              className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#4A3728] mb-6 leading-tight ${mangoGrotesque.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Business Has Only Two Function- Marketing And Innovation
            </motion.h2>
            <motion.p
              className="text-[#3F3F3F] text-lg lg:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              At Our Agency, We&apos;re Dedicated To Helping Businesses Like
              Yours Reach Their Full Potential.
            </motion.p>
            <motion.button
              className="bg-[#FF6B47] hover:bg-[#E55A40] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              style={{
                boxShadow:
                  "-40px 47px 17px 0px rgba(255, 125, 69, 0.00), -26px 30px 16px 0px rgba(255, 125, 69, 0.03), -15px 17px 13px 0px rgba(255, 125, 69, 0.10), -6px 7px 10px 0px rgba(255, 125, 69, 0.17), -2px 2px 5px 0px rgba(255, 125, 69, 0.20)",
              }}
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Booking;
