import Image from 'next/image';
import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="relative w-full py-8 md:py-16">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[10px]">
          {/* Left Side - Content */}
          <div className="relative flex flex-col h-full md:pl-[80px]">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex flex-col space-y-1 sm:space-y-2 mb-3 sm:mb-4 md:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px] whitespace-nowrap max-w-full overflow-x-auto sm:overflow-visible">
                    Welcome to Everon Property & Mortgage
                  </h2>
                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px]">
                    Consultancy Limited
                  </h2>
                </div>
                <p className="w-full md:w-[474px] text-xl md:text-[32px] font-lato font-medium text-[#1C1C1C] leading-tight md:leading-[38.4px] mb-4 md:mb-8">
                  Your Trusted Partner for Property & Financial Solutions
                </p>
                <p className="w-full md:w-[511px] text-base md:text-[24px] font-lato text-[#1C1C1C] leading-relaxed md:leading-[28.8px]">
                  At Everon Property & Mortgage Consultancy Limited, we specialize in offering personalized property, mortgage, and financial consultancy services in Hong Kong. With a team of seasoned professionals boasting over a decade of experience in the banking and financial sectors, we are dedicated to solving your personal and corporate financial challenges.
                </p>
              </div>

              {/* Learn More Button */}
              <div className="mt-8 lg:mt-7">
                <button className="bg-[#004400] text-white px-4 md:px-6 py-2 md:py-3 text-base md:text-[20px] font-medium rounded-lg inline-flex items-center space-x-2">
                  <span>Learn More</span>
                  <Image
                    src="/images/Group 5.png"
                    alt="Arrow Right"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center items-end h-full lg:mt-5">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[498px] lg:w-[637px] overflow-hidden">
              <Image
                src="/images/Welcome to image.jpg"
                alt="House"
                fill
                className="rounded-[30px] object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 637px"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
