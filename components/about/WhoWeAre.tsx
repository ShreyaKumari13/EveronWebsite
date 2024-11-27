import Image from 'next/image';
import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="relative w-full py-8">
      <div className="relative w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] h-[500px]">
          {/* Left Side - Content */}
          <div className="relative flex flex-col pl-[100px] h-full">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex flex-col space-y-2 mb-4">
                  <h2 className="text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px] whitespace-nowrap text-left font-[800]">
                    About Everon Property & Mortgage
                  </h2>
                  <h2 className="text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px] text-left font-[800]">
                    Consultancy Limited
                  </h2>
                </div>
                <p className="w-[474px] text-[40px] font-lato font-[700] text-[#1C1C1C] leading-[48px] text-left mb-3">
                  Who We Are
                </p>
                <p className="w-[511px] mt-4 text-[24px] font-lato font-[400] text-[#1C1C1C] leading-[28.8px] text-left">
                  Everon Property & Mortgage Consultancy Limited is a trusted name in the consultancy sector, specializing in property, mortgage, and financial services. Based in the heart of Tsim Sha Tsui, Kowloon, we have been empowering individuals and businesses with tailored financial solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-start items-start pt-[80px] pl-[10px] h-full">
            <div className="relative w-[600px] h-[360px]">
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
