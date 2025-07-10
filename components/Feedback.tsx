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

const Feedback = () => {
  // Animation variants with proper TypeScript typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "240px",
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  const dotVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-start mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-[#EF7440] text-2xl font-medium tracking-widest uppercase mb-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            testimonials
          </motion.p>
          <div className="flex items-center gap-6 mb-4">
            <motion.h2
              className={`text-4xl md:text-7xl font-bold text-gray-900 ${mangoGrotesque.className}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              What Our Customer Say
            </motion.h2>
            <motion.div className="h-1 bg-[#EF7440]" variants={lineVariants} />
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 */}
          <motion.div
            className="bg-white flex flex-col items-start gap-2.5 flex-shrink-0 overflow-hidden"
            style={{
              width: "346px",
              height: "365px",
              padding: "50px 30px",
              borderRadius: "40px 40px 0px 40px",
              boxShadow:
                "-139px 163px 60px 0px rgba(0, 0, 0, 0.00), -89px 104px 55px 0px rgba(0, 0, 0, 0.01), -50px 59px 46px 0px rgba(0, 0, 0, 0.05), -22px 26px 34px 0px rgba(0, 0, 0, 0.09), -6px 7px 19px 0px rgba(0, 0, 0, 0.10)",
            }}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <Image
                src="/assets/dp1.jpg"
                alt="Mikel Simit"
                width={63}
                height={63}
                className="rounded-full object-cover mr-4"
                style={{
                  width: "63px",
                  height: "63px",
                  minWidth: "63px",
                  minHeight: "63px",
                }}
              />
              <div>
                <h3 className="font-semibold text-2xl text-black">
                  Mikel Simit
                </h3>
                <p className="text-[12px] text-[#6B6B6B]">
                  Owner & Director Of Marketing
                </p>
              </div>
            </motion.div>
            <motion.p
              className="text-gray-700 leading-relaxed text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Awesome Product Highly Recommended Lorem Ipsum Dolor Alamet,
              Nsectetur Mayalipol Tempor Elusmod Tempor Recommended Lorem Ipsum
              Dolor Alamet, Nsec Tetur Mayalipol Tempor Elusmod Tempor Incubto
              Ectetur Alasiqua Enim Ad Nim Veniam, Quis Nostrud Ullam
            </motion.p>
          </motion.div>

          {/* Card 2 - Dark Theme */}
          <motion.div
            className="bg-[#2F1A05] text-white flex flex-col items-start gap-2.5 flex-shrink-0 overflow-hidden"
            style={{
              width: "346px",
              height: "365px",
              padding: "50px 30px",
              borderRadius: "40px 40px 0px 40px",
              boxShadow:
                "-139px 163px 60px 0px rgba(0, 0, 0, 0.00), -89px 104px 55px 0px rgba(0, 0, 0, 0.01), -50px 59px 46px 0px rgba(0, 0, 0, 0.05), -22px 26px 34px 0px rgba(0, 0, 0, 0.09), -6px 7px 19px 0px rgba(0, 0, 0, 0.10)",
            }}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/assets/dp2.jpg"
                alt="Mikel Simit"
                width={63}
                height={63}
                className="rounded-full object-cover mr-4"
                style={{
                  width: "63px",
                  height: "63px",
                  minWidth: "63px",
                  minHeight: "63px",
                }}
              />
              <div>
                <h3 className="font-semibold text-2xl text-white">
                  Mikel Simit
                </h3>
                <p className="text-[12px] text-[#CBCBCB]">
                  Owner & Director Of Marketing
                </p>
              </div>
            </motion.div>
            <motion.p
              className="text-amber-100 leading-relaxed text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Awesome Product Highly Recommended Lorem Ipsum Dolor Alamet,
              Nsectetur Mayalipol Tempor Elusmod Tempor Recommended Lorem Ipsum
              Dolor Alamet, Nsec Tetur Mayalipol Tempor Elusmod Tempor Incubto
              Ectetur Alasiqua Enim Ad Nim Veniam, Quis Nostrud Ullam
            </motion.p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white flex flex-col items-start gap-2.5 flex-shrink-0 overflow-hidden"
            style={{
              width: "346px",
              height: "365px",
              padding: "50px 30px",
              borderRadius: "40px 40px 0px 40px",
              boxShadow:
                "-139px 163px 60px 0px rgba(0, 0, 0, 0.00), -89px 104px 55px 0px rgba(0, 0, 0, 0.01), -50px 59px 46px 0px rgba(0, 0, 0, 0.05), -22px 26px 34px 0px rgba(0, 0, 0, 0.09), -6px 7px 19px 0px rgba(0, 0, 0, 0.10)",
            }}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Image
                src="/assets/dp3.jpg"
                alt="Mikel Simit"
                width={63}
                height={63}
                className="rounded-full object-cover mr-4"
                style={{
                  width: "63px",
                  height: "63px",
                  minWidth: "63px",
                  minHeight: "63px",
                }}
              />
              <div>
                <h3 className="font-semibold text-2xl text-black">
                  Mikel Simit
                </h3>
                <p className="text-[12px] text-[#6B6B6B]">
                  Owner & Director Of Marketing
                </p>
              </div>
            </motion.div>
            <motion.p
              className="text-gray-700 leading-relaxed text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              Awesome Product Highly Recommended Lorem Ipsum Dolor Alamet,
              Nsectetur Mayalipol Tempor Elusmod Tempor Recommended Lorem Ipsum
              Dolor Alamet, Nsec Tetur Mayalipol Tempor Elusmod Tempor Incubto
              Ectetur Alasiqua Enim Ad Nim Veniam, Quis Nostrud Ullam
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center space-x-2 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="w-6 h-2 bg-[#2F1A05] rounded-full"
            variants={dotVariants}
          />
          <motion.div
            className="w-14 h-2 bg-[#F57431] rounded-full"
            variants={dotVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
