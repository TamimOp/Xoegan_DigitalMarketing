"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import localFont from "next/font/local";

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

const Services = () => {
  // Animation variants with proper typing
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const serviceVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#F8F6F3] overflow-hidden">
      {/* Background SVGs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/assets/service_bg.svg"
            alt=""
            width={800}
            height={600}
            className="absolute top-0 left-0 w-auto h-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/assets/service_bg2.svg"
            alt=""
            width={800}
            height={600}
            className="absolute bottom-0 right-0 w-auto h-auto"
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div className="mb-16" variants={headerVariants}>
          <motion.p
            className="text-[#FF6B35] text-lg font-medium mb-4 tracking-wide"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            services
          </motion.p>
          <motion.h2
            className={`text-[#4A4A4A] text-6xl lg:text-7xl font-bold mb-4 ${mangoGrotesque.className}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            What we do
            <motion.span
              className="inline-block ml-6 w-32 h-1 bg-[#FF6B35] align-middle"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
        >
          {/* Service 1 */}
          <motion.div
            className="bg-transparent"
            variants={serviceVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <Image
                src="/assets/rocket.svg"
                alt="Rocket"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </motion.div>
            <motion.h3
              className="text-[#4A4A4A] text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              Grow your Business
            </motion.h3>
            <motion.p
              className="text-[#6B6B6B] text-base leading-relaxed mb-6"
              variants={itemVariants}
            >
              Our tailored digital strategies help your brand grow by expanding
              its reach and increasing visibility. Whether it&apos;s through
              SEO, social media marketing, or PPC, we craft the perfect growth
              plan for you.
            </motion.p>
            <motion.a
              href="#"
              className="text-[#FF6B35] text-base font-medium hover:underline"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              Read more
            </motion.a>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-transparent"
            variants={serviceVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/assets/speaker.svg"
                alt="Speaker"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </motion.div>
            <motion.h3
              className="text-[#4A4A4A] text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              Drive more sales
            </motion.h3>
            <motion.p
              className="text-[#6B6B6B] text-base leading-relaxed mb-6"
              variants={itemVariants}
            >
              Boost your sales with data-driven marketing campaigns that
              convert. From optimized landing pages to targeted advertising, we
              help you capture more leads and turn them into customers.
            </motion.p>
            <motion.a
              href="#"
              className="text-[#FF6B35] text-base font-medium hover:underline"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              Read more
            </motion.a>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-transparent"
            variants={serviceVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Image
                src="/assets/Medal.svg"
                alt="Medal"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </motion.div>
            <motion.h3
              className="text-[#4A4A4A] text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              Handle experts
            </motion.h3>
            <motion.p
              className="text-[#6B6B6B] text-base leading-relaxed mb-6"
              variants={itemVariants}
            >
              Work with our team of experienced digital marketing professionals
              who specialize in growing businesses like yours. Rest easy knowing
              your marketing efforts are in the hands of experts.
            </motion.p>
            <motion.a
              href="#"
              className="text-[#FF6B35] text-base font-medium hover:underline"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              Read more
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
