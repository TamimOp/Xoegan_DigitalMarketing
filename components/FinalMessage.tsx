"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const FinalMessage = () => {
  // Animation variants with proper TypeScript typing
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const profileVariants: Variants = {
    hidden: { opacity: 0, scale: 0, x: 50, y: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const quoteVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const authorVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-5 bg-gradient-to-b from-[#F2F2F2] to-[#F6E7DE]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="relative w-full max-w-7xl p-6 sm:p-8 md:p-10 lg:p-15 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[#2F1A05]"
        variants={cardVariants}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        {/* Profile image - positioned absolute top-right on the #2F1A05 div */}
        <motion.div
          className="absolute top-0 right-0 w-36 h-32 sm:w-48 sm:h-40 md:w-56 md:h-48 lg:w-64 lg:h-56 overflow-hidden rounded-bl-[250px] sm:rounded-bl-[350px] lg:rounded-bl-[505px] bg-[#FF7D45] z-50"
          variants={profileVariants}
        >
          <motion.div
            className="w-full h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/dp4.png')",
              backgroundPosition: "-217.527px -75.525px",
              backgroundSize: "236.655% 421.414%",
            }}
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          className="relative p-6 sm:p-8 md:p-10 lg:p-15 rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] bg-gradient-to-r from-[rgba(86,43,0,0.4)] to-[rgba(47,26,5,0.4)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="w-full text-white">
            {/* Quote icon */}
            <motion.div
              className="mb-4 sm:mb-6 lg:mb-8"
              variants={quoteVariants}
            >
              <Image
                src="/assets/messageTopQuote.svg"
                alt="Quote"
                width={100}
                height={100}
                className="w-24 h-auto sm:w-32 md:w-40 lg:w-[160px]"
              />
            </motion.div>

            {/* Main message */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-white pr-0 sm:pr-4 md:pr-12 lg:pr-16"
              variants={textVariants}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              At our core, we believe in empowering businesses to achieve their
              fullest potential through strategic digital marketing. Every
              solution we create is driven by data, creativity, and a commitment
              to seeing our clients succeed. Our goal isn&apos;t just to deliver
              results, but to foster lasting growth and build meaningful
              partnerships along the way.
            </motion.p>

            {/* Author info */}
            <motion.div
              className="flex items-center gap-3 sm:gap-4 lg:gap-5"
              variants={authorVariants}
            >
              <div>
                <motion.h4
                  className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                >
                  Elona Mosco
                </motion.h4>
                <motion.p
                  className="text-xs sm:text-sm text-white/70"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  Head of Community @Goldman
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FinalMessage;
