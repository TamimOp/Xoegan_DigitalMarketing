"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Footer = () => {
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

  const columnVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const formVariants: Variants = {
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
    <footer className="bg-[#2C1E12] text-white py-30 px-4 sm:px-8 lg:px-16">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Column 1: Logo and Description */}
        <motion.div variants={columnVariants}>
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }}>
            <Image
              src="/assets/digital_marketing_logo.png"
              alt="Digital Marketing Logo"
              width={150}
              height={100}
            />
          </motion.div>
          <motion.p
            className="mt-4 text-gray-300 text-sm leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            At our agency, we&apos;re dedicated to helping businesses like yours
            reach their full potential. Through a combination of innovative
            digital strategies and expert-driven solutions, we tailor our
            approach to meet your unique needs.
          </motion.p>
        </motion.div>

        {/* Column 2: Our Services */}
        <motion.div variants={columnVariants}>
          <motion.h3
            className="text-xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Our Services
          </motion.h3>
          <motion.ul
            className="space-y-4 text-gray-300"
            variants={containerVariants}
          >
            {[
              "Search Engine Optimization",
              "Social Media Marketing",
              "Content Marketing",
              "Branding & Creative Design",
            ].map((service, index) => (
              <motion.li
                key={service}
                variants={linkVariants}
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {service}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Column 3: Get Help */}
        <motion.div variants={columnVariants}>
          <motion.h3
            className="text-xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Get Help
          </motion.h3>
          <motion.ul
            className="space-y-4 text-gray-300"
            variants={containerVariants}
          >
            {["About Us", "Contact Us"].map((item, index) => (
              <motion.li
                key={item}
                variants={linkVariants}
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Column 4: Newsletter */}
        <motion.div variants={columnVariants}>
          <motion.h3
            className="text-xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Newsletter
          </motion.h3>
          <motion.form
            className="flex flex-col space-y-4"
            variants={formVariants}
          >
            <motion.input
              type="email"
              placeholder="Submit your message"
              className="bg-white text-gray-700 px-6 py-3 rounded-full focus:outline-none placeholder-gray-500"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="bg-[#F58634] text-white font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
