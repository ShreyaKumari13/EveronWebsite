import Image from 'next/image';
import React from 'react';

const OurMission = () => {
  return (
    <div className="relative w-full py-8 md:py-0">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[10px] md:h-[500px]">
          {/* Right Side - Content */}
          <div className="relative flex flex-col md:pl-[100px] h-full order-1 md:order-2">
            <div className="flex flex-col h-full">
              <div>
                <p className="w-full md:w-[474px] text-3xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left mb-3">
                  Our Mission
                </p>
                <p className="w-full md:w-[511px] pt-4 md:pt-[40px] text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left">
                  To deliver professional, reliable, and personalized consultancy services that
                  address our clients&apos; unique challenges in property, mortgage, and financial
                  matters.
                </p>
              </div>
            </div>
          </div>

          {/* Left Side - Image */}
          <div className="relative flex justify-center md:justify-start items-start pt-8 md:pt-[20px] md:pl-[100px] h-full order-2 md:order-1">
            <div className="relative w-full max-w-[600px] h-[240px] md:h-[360px]">
              <Image
                src="/aboutimage/Our mission.jpg"
                alt="Two people discussing in an office"
                fill
                className="rounded-[30px] object-cover"
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
