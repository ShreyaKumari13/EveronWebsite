import Image from 'next/image';
import React from 'react';

const MortageService = () => {
  return (
    <div className="relative w-full -mt-8 md:-mt-16">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[10px] md:h-[500px]">
          {/* Content Section */}
          <div className="relative flex flex-col px-4 md:pl-[100px] pt-8 md:pt-[60px] h-full">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex items-center">
                  <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] mr-4">
                    <Image
                      src="/serviceimage/Group.png"
                      alt="Mortgage Icon"
                      fill
                      sizes="(max-width: 768px) 40px, 50px"
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="w-full md:w-[474px] text-3xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left">
                  Mortgage Planning
                </p>
                <p className="w-full md:w-[511px] pt-4 text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left">
                  We help you secure the most competitive mortgage rates and favorable terms for your needs. Our experts simplify the complexities of property financing, ensuring a smooth and stress-free process. Trust us to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center md:justify-end items-start pt-8 md:pt-[55px] md:pr-[100px] h-full">
            <div className="relative w-full md:w-[600px] h-[240px] md:h-[360px]">
              <Image
                src="/serviceimage/Mortgage.jpg"
                alt="Mortgage Service"
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

export default MortageService;
