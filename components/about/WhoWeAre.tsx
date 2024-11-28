import Image from 'next/image';
import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="relative w-full py-8">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[10px] md:h-[500px]">
          {/* Left Side - Content */}
          <div className="relative flex flex-col md:pl-[100px] h-full">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex flex-col space-y-1 sm:space-y-2 mb-3 sm:mb-4 md:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px] text-left md:whitespace-nowrap break-words">
                    About Everon Property & Mortgage
                  </h2>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px] text-left">
                    Consultancy Limited
                  </h2>
                </div>
                <p className="w-full md:w-[474px] text-2xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left pt-4 md:pt-[15px] pb-4 md:pb-[25px]">
                  Who We Are
                </p>
                <p className="w-full md:w-[511px] text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left">
                  Everon Property & Mortgage Consultancy Limited is a trusted name in the consultancy sector, specializing in property, mortgage, and financial services. Based in the heart of Tsim Sha Tsui, Kowloon, we have been empowering individuals and businesses with tailored financial solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center md:justify-start items-start pt-8 md:pt-[80px] md:pl-[10px] h-full">
            <div className="relative w-full max-w-[600px] h-[240px] md:h-[360px]">
              <Image
                src="/aboutimage/Who we are.jpg"
                alt="House"
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

export default WhoWeAre;
