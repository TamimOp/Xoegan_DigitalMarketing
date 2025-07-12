"use client";
import React, { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { motion, Variants, AnimatePresence } from "framer-motion";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Demo testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Mikel Simit",
      position: "Owner & Director Of Marketing",
      image: "/assets/dp1.jpg",
      text: "Awesome Product Highly Recommended Lorem Ipsum Dolor Alamet, Nsectetur Mayalipol Tempor Elusmod Tempor Recommended Lorem Ipsum Dolor Alamet, Nsec Tetur Mayalipol Tempor Elusmod Tempor Incubto Ectetur Alasiqua Enim Ad Nim Veniam, Quis Nostrud Ullam",
      isDark: false,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "/assets/dp2.jpg",
      text: "Outstanding service and exceptional results! The team delivered beyond our expectations. Their digital marketing strategies helped us grow our business by 300% in just 6 months. Highly professional and dedicated team.",
      isDark: true,
    },
    {
      id: 3,
      name: "David Chen",
      position: "Marketing Manager",
      image: "/assets/dp3.jpg",
      text: "Working with this agency has been a game-changer for our brand. Their creative approach and data-driven strategies have significantly improved our online presence and customer engagement rates.",
      isDark: false,
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      position: "E-commerce Director",
      image: "/assets/dp1.jpg",
      text: "The ROI we've seen from their campaigns is incredible. They understand our market and deliver results consistently. Their team is responsive, creative, and always goes the extra mile.",
      isDark: false,
    },
    {
      id: 5,
      name: "Michael Brown",
      position: "Startup Founder",
      image: "/assets/dp2.jpg",
      text: "From social media to SEO, they've covered all aspects of our digital marketing needs. The results speak for themselves - increased traffic, better conversions, and stronger brand recognition.",
      isDark: true,
    },
    {
      id: 6,
      name: "Lisa Wang",
      position: "Product Manager",
      image: "/assets/dp3.jpg",
      text: "Their strategic approach and attention to detail is impressive. They helped us launch our product successfully and reach our target audience effectively. Couldn't be happier with the results!",
      isDark: false,
    },
  ];

  // Responsive slides per view
  const getSlidesPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [slidesPerView] = useState(getSlidesPerView());
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  // Professional animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const slideVariants: Variants = {
    enter: {
      x: 120,
      opacity: 0,
      scale: 0.9,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      x: -120,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: [0.55, 0.055, 0.675, 0.19],
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "240px",
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
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

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * slidesPerView;
    return testimonials.slice(startIndex, startIndex + slidesPerView);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-start mb-8 sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-[#EF7440] text-lg sm:text-xl lg:text-2xl font-medium tracking-widest uppercase mb-2 sm:mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            testimonials
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4">
            <motion.h2
              className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 ${mangoGrotesque.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              What Our Customer Say
            </motion.h2>
            <motion.div
              className="h-1 bg-[#EF7440] rounded-full hidden sm:block"
              variants={lineVariants}
            />
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative mb-8 sm:mb-12" style={{ minHeight: "400px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`${
                    testimonial.isDark ? "bg-[#2F1A05] text-white" : "bg-white"
                  } flex flex-col items-start gap-2.5 flex-shrink-0 overflow-hidden w-full max-w-[346px] mx-auto`}
                  style={{
                    height: "auto",
                    minHeight: "320px",
                    padding: "30px 20px",
                    borderRadius: "40px 40px 0px 40px",
                    boxShadow:
                      "-139px 163px 60px 0px rgba(0, 0, 0, 0.00), -89px 104px 55px 0px rgba(0, 0, 0, 0.01), -50px 59px 46px 0px rgba(0, 0, 0, 0.05), -22px 26px 34px 0px rgba(0, 0, 0, 0.09), -6px 7px 19px 0px rgba(0, 0, 0, 0.10)",
                  }}
                  variants={cardVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    boxShadow: testimonial.isDark
                      ? "0 25px 50px rgba(47, 26, 5, 0.25)"
                      : "0 25px 50px rgba(0, 0, 0, 0.15)",
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                >
                  <motion.div
                    className="flex items-center mb-4 sm:mb-6 w-full"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={63}
                      height={63}
                      className="rounded-full object-cover mr-3 sm:mr-4 flex-shrink-0"
                      style={{
                        width: "50px",
                        height: "50px",
                        minWidth: "50px",
                        minHeight: "50px",
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-lg sm:text-xl lg:text-2xl truncate ${
                          testimonial.isDark ? "text-white" : "text-black"
                        }`}
                      >
                        {testimonial.name}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm ${
                          testimonial.isDark
                            ? "text-[#CBCBCB]"
                            : "text-[#6B6B6B]"
                        }`}
                      >
                        {testimonial.position}
                      </p>
                    </div>
                  </motion.div>
                  <motion.p
                    className={`leading-relaxed text-xs sm:text-sm ${
                      testimonial.isDark ? "text-amber-100" : "text-gray-700"
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {testimonial.text}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center space-x-2 sm:space-x-3 pt-4 sm:pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-500 ease-out ${
                index === currentSlide
                  ? "w-12 sm:w-16 bg-[#F57431] shadow-lg"
                  : "w-6 sm:w-8 bg-[#2F1A05] opacity-30 hover:opacity-60"
              }`}
              variants={dotVariants}
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.1 },
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
