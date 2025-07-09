"use client";
import React from "react";
import Image from "next/image";

const FinalMessage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-5 bg-gradient-to-b from-[#F2F2F2] to-[#F6E7DE]">
      <div className="relative w-full max-w-7xl p-15 rounded-[40px] bg-[#2F1A05]">
        {/* Profile image - positioned absolute top-right on the #2F1A05 div */}
        <div className="absolute top-0 right-0 w-64 h-56 overflow-hidden rounded-bl-[505px] bg-[#FF7D45] z-50">
          <div
            className="w-full h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/dp4.png')",
              backgroundPosition: "-217.527px -75.525px",
              backgroundSize: "236.655% 421.414%",
            }}
          />
        </div>

        <div className="relative p-15 rounded-[32px] bg-gradient-to-r from-[rgba(86,43,0,0.4)] to-[rgba(47,26,5,0.4)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
          <div className="w-full text-white">
            {/* Quote icon */}
            <div className="mb-8">
              <Image
                src="/assets/messageTopQuote.svg"
                alt="Quote"
                width={160}
                height={160}
              />
            </div>

            {/* Main message */}
            <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-10 text-white">
              At our core, we believe in empowering businesses to achieve their
              fullest potential through strategic digital marketing. Every
              solution we create is driven by data, creativity, and a commitment
              to seeing our clients succeed. Our goal isn&apos;t just to deliver
              results, but to foster lasting growth and build meaningful
              partnerships along the way.
            </p>

            {/* Author info */}
            <div className="flex items-center gap-5">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  Elona Mosco
                </h4>
                <p className="text-sm text-white/70">
                  Head of Community @Goldman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalMessage;
