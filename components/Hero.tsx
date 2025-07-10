"use client";

import React from "react";
import Image from "next/image";
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

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#FDFBF6] pt-0">
      {/* Left Section */}
      <div
        className="flex items-center flex-shrink-0 rounded-br-[10px] w-full lg:w-[860px] min-h-[70vh] lg:h-[100vh]"
        style={{
          padding: "140px 20px 50px 20px",
          gap: "10px",
          background:
            "linear-gradient(180deg, rgba(255, 238, 188, 0.30) 0%, rgba(247, 193, 158, 0.23) 91.5%, rgba(255, 125, 69, 0.12) 100%)",
          boxShadow:
            "-4px -4px 9.727px 0px rgba(203, 197, 177, 0.60) inset, 0px 0px 9.727px 0px rgba(255, 255, 255, 0.60) inset",
          backdropFilter: "blur(12.64466667175293px)",
        }}
      >
        {/* Text Content */}
        <div className="w-full flex flex-col">
          <div className="flex flex-col items-center text-start max-w-2xl mx-auto">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#4A2E23] ${mangoGrotesque.className}`}
              style={{ letterSpacing: "0.96px" }}
            >
              We are Creative Digital & Marketing Agency
            </h1>
            <p className="mt-4 lg:mt-6 text-base sm:text-lg text-[#4A2E23]">
              We Offer A Full Suite Of Digital Marketing Services Including SEO,
              PPC, Social Media Marketing, And More. Explore Each Service To
              Find The Right Solution For Your Business.
            </p>
          </div>
          <div className="mt-8 lg:mt-12 relative flex items-center gap-6">
            <Image
              src="/assets/pauseplay.png"
              alt="Play"
              width={215}
              height={58}
              className="hidden sm:block absolute -left-12 top-0 flex-shrink-0 w-[150px] md:w-[180px] lg:w-[215px]"
            />
            <button className="bg-[#FF7D45] text-white px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold shadow-lg sm:ml-16 md:ml-28 lg:ml-40 mx-auto sm:mx-0">
              Book a Call
            </button>
          </div>
          <div className="mt-10 lg:mt-16 flex flex-wrap justify-center sm:justify-start items-center gap-5 sm:gap-8 lg:gap-10 overflow-x-auto">
            <Image
              src="/assets/Slack1.svg"
              alt="Slack"
              width={110}
              height={30}
              className="w-20 sm:w-24 lg:w-[110px] h-auto"
            />
            <Image
              src="/assets/Google.svg"
              alt="Google"
              width={110}
              height={30}
              className="w-20 sm:w-24 lg:w-[110px] h-auto"
            />
            <Image
              src="/assets/Netflix.svg"
              alt="Netflix"
              width={110}
              height={30}
              className="w-20 sm:w-24 lg:w-[110px] h-auto"
            />
            <Image
              src="/assets/amazon.svg"
              alt="Amazon"
              width={110}
              height={30}
              className="w-20 sm:w-24 lg:w-[110px] h-auto"
            />
            <Image
              src="/assets/Linkedin.svg"
              alt="LinkedIn"
              width={110}
              height={30}
              className="w-20 sm:w-24 lg:w-[110px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 flex-1 min-h-[50vh] py-10 lg:py-0">
        {/* heroImage1.jpg - smaller image */}
        <div
          className="w-[120px] h-[180px] sm:w-[150px] sm:h-[225px] lg:w-[190px] lg:h-[285px] rounded-full flex-shrink-0"
          style={{
            background:
              "url('/assets/heroImage1.jpg') lightgray 50% / cover no-repeat",
            boxShadow:
              "-34px 137px 39px 0px rgba(0, 0, 0, 0.00), -22px 87px 36px 0px rgba(0, 0, 0, 0.02), -12px 49px 30px 0px rgba(0, 0, 0, 0.08), -5px 22px 23px 0px rgba(215, 216, 202, 0.13), -1px 5px 12px 0px rgba(0, 0, 0, 0.15)",
          }}
        />

        {/* heroImage2.png - larger image */}
        <div
          className="w-[180px] h-[300px] sm:w-[220px] sm:h-[370px] lg:w-[280px] lg:h-[468px] rounded-full flex-shrink-0"
          style={{
            background:
              "url('/assets/heroImage2.png') lightgray 50% / cover no-repeat",
            boxShadow:
              "-77px 217px 64px 0px rgba(0, 0, 0, 0.00), -49px 139px 59px 0px rgba(0, 0, 0, 0.02), -28px 78px 50px 0px rgba(0, 0, 0, 0.07), -12px 35px 37px 0px rgba(0, 0, 0, 0.11), -3px 9px 20px 0px rgba(211, 212, 198, 0.13)",
          }}
        />

        {/* Floating cards */}
        <div
          className="absolute top-[20%] right-[-15px] sm:right-[-30px] lg:right-[-50px] flex flex-col justify-center items-center gap-[10px] flex-shrink-0 w-[120px] sm:w-[150px] lg:w-[170px] h-[45px] sm:h-[50px] lg:h-[56px] px-[8px] sm:px-[10px] py-[6px] sm:py-[8px]"
          style={{
            borderRadius: "12px 12px 12px 0px",
            background: "rgba(255, 255, 255, 0.60)",
            boxShadow: "-2px 4px 26px 1px rgba(0, 0, 0, 0.18)",
          }}
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
        </div>

        <div
          className="absolute bottom-[20%] right-2 sm:right-5 lg:right-10 flex flex-col justify-center items-center gap-[10px] flex-shrink-0 w-[180px] sm:w-[210px] lg:w-[239px] h-[50px] sm:h-[55px] lg:h-[61px] px-[20px] sm:px-[26px] lg:px-[32px] py-[10px] sm:py-[12px] lg:py-[14px]"
          style={{
            borderRadius: "12px 0px 12px 12px",
            background: "rgba(255, 255, 255, 0.86)",
            boxShadow: "-2px 4px 26px 1px rgba(0, 0, 0, 0.18)",
          }}
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <p className="font-bold text-blue-600 text-base sm:text-lg lg:text-xl">
              500+
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Clients and book a demo today
            </p>
          </div>
        </div>
      </div>

      {/* Star Rating */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[50%] sm:left-[53%] lg:left-[57%] bg-white p-2 sm:p-3 rounded-full shadow-lg flex items-center gap-1 sm:gap-2 z-10">
        <Image
          src="/assets/star.svg"
          alt="Star"
          width={24}
          height={24}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
        />
        <span className="font-bold text-sm sm:text-base lg:text-lg">5.0</span>
      </div>
    </div>
  );
};

export default Hero;
