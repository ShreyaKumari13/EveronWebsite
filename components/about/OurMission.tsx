import Image from 'next/image';
import React from 'react';

const OurMission = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] h-[500px]">
          {/* Left Side - Image */}
          <div className="relative flex justify-start items-start pt-[20px] pl-[100px] h-full">
            <div className="relative w-[600px] h-[360px]">
              <Image
                src="/aboutimage/Our mission.jpg"
                alt="Two people discussing in an office"
                fill
                className="rounded-[30px] object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="relative flex flex-col pl-[100px] h-full">
            <div className="flex flex-col h-full">
              <div>
                <p className="w-[474px] text-[40px] font-lato font-[700] text-[#1C1C1C] leading-[48px] text-left mb-3">
                  Our Mission
                </p>
                <p className="w-[511px]  pt-4 text-[24px] font-lato font-[400] text-[#1C1C1C] leading-[28.8px] text-left">
                  To deliver professional, reliable, and personalized consultancy services that
                  address our clients&apos; unique challenges in property, mortgage, and financial
                  matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
