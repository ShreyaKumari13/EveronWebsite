import Image from 'next/image';
import React from 'react';

const OurMission = () => {
  return (
    <div className="relative w-full py-8 md:py-0">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[10px] md:h-[500px]">
          {/* Left Side - Content */}
          <div className="relative flex flex-col md:pl-[100px] h-full order-2 md:order-1">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex flex-col space-y-1 sm:space-y-2 mb-3 sm:mb-4 md:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px] text-left whitespace-normal md:whitespace-nowrap">
                    Our Mission
                  </h2>
                </div>
                <p className="w-full md:w-[511px] text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left">
                  At Everon Property & Mortgage Consultancy Limited, our mission is to be your trusted partner in achieving your property and financial goals. We are committed to providing personalized, professional, and comprehensive solutions that cater to your unique needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center md:justify-end items-start md:pr-[100px] h-full order-1 md:order-2">
            <div className="relative w-full max-w-[600px] h-[240px] md:h-[360px]">
              <Image
                src="/aboutimage/Our Mission.jpg"
                alt="Our Mission"
                fill
                className="rounded-[30px] object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
