import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#2C1E12] text-white py-30 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
        {/* Column 1: Logo and Description */}
        <div>
          <Image
            src="/assets/digital_marketing_logo.png"
            alt="Digital Marketing Logo"
            width={150}
            height={100}
          />
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            At our agency, we&apos;re dedicated to helping businesses like yours
            reach their full potential. Through a combination of innovative
            digital strategies and expert-driven solutions, we tailor our
            approach to meet your unique needs.
          </p>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h3 className="text-xl font-bold mb-6">Our Services</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Search Engine Optimization
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Social Media Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Content Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Branding & Creative Design
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Get Help */}
        <div>
          <h3 className="text-xl font-bold mb-6">Get Help</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-6">Newsletter</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Submit your message"
              className="bg-white text-gray-700 px-6 py-3 rounded-full focus:outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-[#F58634] text-white font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
