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

const Booking = () => {
  return (
    <div
      className="py-16 px-4"
      style={{
        background: "linear-gradient(180deg, #F8F2E4 0%, #F5E4DC 100%)",
      }}
    >
      {/* First Section - Left Image, Right Content */}
      <div className="max-w-6xl mx-auto mb-20">
        <div
          className="flex flex-col lg:flex-row items-center"
          style={{ gap: "106px" }}
        >
          {/* Left Image */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "333px",
              height: "397px",
              borderRadius: "40px 40px 0px 40px",
              boxShadow:
                "-34px 137px 39px 0px rgba(0, 0, 0, 0.00), -22px 87px 36px 0px rgba(0, 0, 0, 0.02), -12px 49px 30px 0px rgba(0, 0, 0, 0.08), -5px 22px 23px 0px rgba(215, 216, 202, 0.13), -1px 5px 12px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Image
              src="/assets/heroImage1.jpg"
              alt="Business consultation"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-2xl">
            <h2
              className={`text-4xl lg:text-7xl font-bold text-[#4A3728] mb-6 leading-tight ${mangoGrotesque.className}`}
            >
              We Give Best Solution To Grow Up Your Business
            </h2>
            <p className="text-[#3F3F3F] text-xl mb-8 leading-relaxed">
              At Our Agency, We&apos;re Dedicated To Helping Businesses Like
              Yours Reach Their Full Potential.
            </p>
            <button
              className="bg-[#FF6B47] hover:bg-[#E55A40] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              style={{
                boxShadow:
                  "-40px 47px 17px 0px rgba(255, 125, 69, 0.00), -26px 30px 16px 0px rgba(255, 125, 69, 0.03), -15px 17px 13px 0px rgba(255, 125, 69, 0.10), -6px 7px 10px 0px rgba(255, 125, 69, 0.17), -2px 2px 5px 0px rgba(255, 125, 69, 0.20)",
              }}
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>

      {/* Second Section - Left Content, Right Image */}
      <div className="max-w-6xl mx-auto">
        <div
          className="flex flex-col lg:flex-row items-center"
          style={{ gap: "106px" }}
        >
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h2
              className={`text-4xl lg:text-7xl font-bold text-[#4A3728] mb-6 leading-tight ${mangoGrotesque.className}`}
            >
              Business Has Only Two Function- Marketing And Innovation
            </h2>
            <p className="text-[#3F3F3F] text-xl mb-8 leading-relaxed">
              At Our Agency, We&apos;re Dedicated To Helping Businesses Like
              Yours Reach Their Full Potential.
            </p>
            <button
              className="bg-[#FF6B47] hover:bg-[#E55A40] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              style={{
                boxShadow:
                  "-40px 47px 17px 0px rgba(255, 125, 69, 0.00), -26px 30px 16px 0px rgba(255, 125, 69, 0.03), -15px 17px 13px 0px rgba(255, 125, 69, 0.10), -6px 7px 10px 0px rgba(255, 125, 69, 0.17), -2px 2px 5px 0px rgba(255, 125, 69, 0.20)",
              }}
            >
              Book a Call
            </button>
          </div>

          {/* Right Image */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "333px",
              height: "397px",
              borderRadius: "40px 40px 40px 0px",
              boxShadow:
                "-34px 137px 39px 0px rgba(0, 0, 0, 0.00), -22px 87px 36px 0px rgba(0, 0, 0, 0.02), -12px 49px 30px 0px rgba(0, 0, 0, 0.08), -5px 22px 23px 0px rgba(215, 216, 202, 0.13), -1px 5px 12px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Image
              src="/assets/bookingImage.jpg"
              alt="Business team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
