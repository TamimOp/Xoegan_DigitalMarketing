"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex min-h-screen bg-[#FDFBF6]">
      {/* Left Section */}
      <div
        className="flex items-center flex-shrink-0 rounded-br-[10px]"
        style={{
          width: "860px",
          height: "754px",
          padding: "89px 52px",
          gap: "10px",
          background:
            "linear-gradient(180deg, rgba(255, 238, 188, 0.30) 0%, rgba(247, 193, 158, 0.23) 91.5%, rgba(255, 125, 69, 0.12) 100%)",
          boxShadow:
            "-4px -4px 9.727px 0px rgba(203, 197, 177, 0.60) inset, 0px 0px 9.727px 0px rgba(255, 255, 255, 0.60) inset",
          backdropFilter: "blur(12.64466667175293px)",
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-7xl font-bold text-[#4A2E23] leading-tight">
            We are Creative Digital & Marketing Agency
          </h1>
          <p className="mt-6 text-lg text-[#4A2E23] max-w-xl">
            We Offer A Full Suite Of Digital Marketing Services Including SEO,
            PPC, Social Media Marketing, And More. Explore Each Service To Find
            The Right Solution For Your Business.
          </p>
          <div className="mt-12 flex items-center gap-6">
            <button className="flex items-center justify-center w-16 h-16 border-2 border-[#FF7D45] rounded-full">
              <Image
                src="/assets/pauseplay.png"
                alt="Play"
                width={24}
                height={24}
              />
            </button>
            <button className="bg-[#FF7D45] text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg">
              Book a Call
            </button>
          </div>
          <div className="mt-16 flex items-center gap-10">
            <Image
              src="/assets/Slack.svg"
              alt="Slack"
              width={110}
              height={30}
            />
            <Image
              src="/assets/Google.svg"
              alt="Google"
              width={110}
              height={30}
            />
            <Image
              src="/assets/Netflix.svg"
              alt="Netflix"
              width={110}
              height={30}
            />
            <Image
              src="/assets/amazon.svg"
              alt="Amazon"
              width={110}
              height={30}
            />
            <Image
              src="/assets/Linkedin.svg"
              alt="LinkedIn"
              width={110}
              height={30}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex items-center justify-center gap-4">
        {/* heroImage1.jpg - smaller image */}
        <div
          className="w-[190px] h-[285px] rounded-full flex-shrink-0"
          style={{
            background:
              "url('/assets/heroImage1.jpg') lightgray 50% / cover no-repeat",
            boxShadow:
              "-34px 137px 39px 0px rgba(0, 0, 0, 0.00), -22px 87px 36px 0px rgba(0, 0, 0, 0.02), -12px 49px 30px 0px rgba(0, 0, 0, 0.08), -5px 22px 23px 0px rgba(215, 216, 202, 0.13), -1px 5px 12px 0px rgba(0, 0, 0, 0.15)",
          }}
        />

        {/* heroImage2.png - larger image */}
        <div
          className="w-[280px] h-[468px] rounded-full flex-shrink-0"
          style={{
            background:
              "url('/assets/heroImage2.png') lightgray 50% / cover no-repeat",
            boxShadow:
              "-77px 217px 64px 0px rgba(0, 0, 0, 0.00), -49px 139px 59px 0px rgba(0, 0, 0, 0.02), -28px 78px 50px 0px rgba(0, 0, 0, 0.07), -12px 35px 37px 0px rgba(0, 0, 0, 0.11), -3px 9px 20px 0px rgba(211, 212, 198, 0.13)",
          }}
        />

        {/* Floating cards */}
        <div
          className="absolute top-[20%] right-[-50px] flex flex-col justify-center items-center gap-[10px] flex-shrink-0 w-[170px] h-[56px] px-[10px] py-[8px]"
          style={{
            borderRadius: "12px 12px 12px 0px",
            background: "rgba(255, 255, 255, 0.60)",
            boxShadow: "-2px 4px 26px 1px rgba(0, 0, 0, 0.18)",
          }}
        >
          <div className="flex items-center gap-3">
            <p className="font-semibold">Contact more</p>
            <Image
              src="/assets/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </div>
        </div>

        <div
          className="absolute bottom-[20%] right-10 flex flex-col justify-center items-center gap-[10px] flex-shrink-0 w-[239px] h-[61px] px-[32px] py-[14px]"
          style={{
            borderRadius: "12px 0px 12px 12px",
            background: "rgba(255, 255, 255, 0.86)",
            boxShadow: "-2px 4px 26px 1px rgba(0, 0, 0, 0.18)",
          }}
        >
          <div className="flex items-center gap-2">
            <p className="font-bold text-blue-600 text-xl">500+</p>
            <p className="text-sm text-gray-600">
              Clients and book a demo today
            </p>
          </div>
        </div>
      </div>

      {/* Star Rating */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[57%] bg-white p-3 rounded-full shadow-lg flex items-center gap-2">
        <Image src="/assets/star.svg" alt="Star" width={24} height={24} />
        <span className="font-bold text-lg">5.0</span>
      </div>
    </div>
  );
};

export default Hero;
