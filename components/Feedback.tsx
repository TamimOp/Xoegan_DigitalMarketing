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

const Feedback = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-start mb-12">
          <p className="text-[#EF7440] text-2xl font-medium tracking-widest uppercase mb-2">
            services
          </p>
          <div className="flex items-center gap-6 mb-4">
            <h2
              className={`text-4xl md:text-7xl font-bold text-gray-900 ${mangoGrotesque.className}`}
            >
              What Our Customer Say
            </h2>
            <div className="w-60 h-1 bg-[#EF7440]"></div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div
            className="bg-white flex flex-col items-start gap-2.5 flex-shrink-0 overflow-hidden"
            style={{
              width: "346px",
              height: "365px",
              padding: "50px 30px",
              borderRadius: "40px 40px 0px 40px",
              boxShadow:
                "-139px 163px 60px 0px rgba(0, 0, 0, 0.00), -89px 104px 55px 0px rgba(0, 0, 0, 0.01), -50px 59px 46px 0px rgba(0, 0, 0, 0.05), -22px 26px 34px 0px rgba(0, 0, 0, 0.09), -6px 7px 19px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <div className="flex items-center mb-6">
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
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              Awesome Product Highly Recommended Lorem Ipsum Dolor Alamet,
              Nsectetur Mayalipol Tempor Elusmod Tempor Recommended Lorem Ipsum
              Dolor Alamet, Nsec Tetur Mayalipol Tempor Elusmod Tempor Incubto
              Ectetur Alasiqua Enim Ad Nim Veniam, Quis Nostrud Ullam
            </p>
          </div>

          {/* Card 2 - Dark Theme */}
          <div
            className="bg-[#2F1A05] text-white flex flex-col items-start gap-2.5 flex-shrink-0 overflow-hidden"
            style={{
              width: "346px",
              height: "365px",
              padding: "50px 30px",
              borderRadius: "40px 40px 0px 40px",
              boxShadow:
                "-139px 163px 60px 0px rgba(0, 0, 0, 0.00), -89px 104px 55px 0px rgba(0, 0, 0, 0.01), -50px 59px 46px 0px rgba(0, 0, 0, 0.05), -22px 26px 34px 0px rgba(0, 0, 0, 0.09), -6px 7px 19px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <div className="flex items-center mb-6">
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
            </div>
            <p className="text-amber-100 leading-relaxed text-sm">
              Awesome Product Highly Recommended Lorem Ipsum Dolor Alamet,
              Nsectetur Mayalipol Tempor Elusmod Tempor Recommended Lorem Ipsum
              Dolor Alamet, Nsec Tetur Mayalipol Tempor Elusmod Tempor Incubto
              Ectetur Alasiqua Enim Ad Nim Veniam, Quis Nostrud Ullam
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white flex flex-col items-start gap-2.5 flex-shrink-0 overflow-hidden"
            style={{
              width: "346px",
              height: "365px",
              padding: "50px 30px",
              borderRadius: "40px 40px 0px 40px",
              boxShadow:
                "-139px 163px 60px 0px rgba(0, 0, 0, 0.00), -89px 104px 55px 0px rgba(0, 0, 0, 0.01), -50px 59px 46px 0px rgba(0, 0, 0, 0.05), -22px 26px 34px 0px rgba(0, 0, 0, 0.09), -6px 7px 19px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <div className="flex items-center mb-6">
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
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              Awesome Product Highly Recommended Lorem Ipsum Dolor Alamet,
              Nsectetur Mayalipol Tempor Elusmod Tempor Recommended Lorem Ipsum
              Dolor Alamet, Nsec Tetur Mayalipol Tempor Elusmod Tempor Incubto
              Ectetur Alasiqua Enim Ad Nim Veniam, Quis Nostrud Ullam
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 pt-4">
          <div className="w-6 h-2 bg-[#2F1A05] rounded-full"></div>
          <div className="w-14 h-2 bg-[#F57431] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
