import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="relative min-h-screen bg-[#F8F6F3] overflow-hidden">
      {/* Background SVGs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/assets/service_bg.svg"
          alt=""
          width={800}
          height={600}
          className="absolute top-0 left-0 w-auto h-auto"
        />
        <Image
          src="/assets/service_bg2.svg"
          alt=""
          width={800}
          height={600}
          className="absolute bottom-0 right-0 w-auto h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#FF6B35] text-lg font-medium mb-4 tracking-wide">
            services
          </p>
          <h2 className="text-[#4A4A4A] text-5xl lg:text-6xl font-bold mb-4">
            What we do
            <span className="inline-block ml-6 w-32 h-1 bg-[#FF6B35] align-middle"></span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Service 1 */}
          <div className="bg-transparent">
            <div className="mb-6">
              <Image
                src="/assets/rocket.svg"
                alt="Rocket"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-[#4A4A4A] text-2xl font-bold mb-4">
              Grow your Business
            </h3>
            <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">
              Our tailored digital strategies help your brand grow by expanding
              its reach and increasing visibility. Whether it&apos;s through
              SEO, social media marketing, or PPC, we craft the perfect growth
              plan for you.
            </p>
            <a
              href="#"
              className="text-[#FF6B35] text-base font-medium hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-transparent">
            <div className="mb-6">
              <Image
                src="/assets/speaker.svg"
                alt="Speaker"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-[#4A4A4A] text-2xl font-bold mb-4">
              Drive more sales
            </h3>
            <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">
              Boost your sales with data-driven marketing campaigns that
              convert. From optimized landing pages to targeted advertising, we
              help you capture more leads and turn them into customers.
            </p>
            <a
              href="#"
              className="text-[#FF6B35] text-base font-medium hover:underline"
            >
              Read more
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-transparent">
            <div className="mb-6">
              <Image
                src="/assets/Medal.svg"
                alt="Medal"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-[#4A4A4A] text-2xl font-bold mb-4">
              Handle experts
            </h3>
            <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">
              Work with our team of experienced digital marketing professionals
              who specialize in growing businesses like yours. Rest easy knowing
              your marketing efforts are in the hands of experts.
            </p>
            <a
              href="#"
              className="text-[#FF6B35] text-base font-medium hover:underline"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
