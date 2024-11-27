import Image from 'next/image';
import React from 'react';

const MortageService = () => {
  return (
    <div className="relative w-full -mt-16">
      <div className="relative w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] h-[500px]">
          {/* Left Side - Content */}
          <div className="relative flex flex-col pl-[100px] pt-[80px] h-full">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex items-center">
                  <div className="relative w-[50px] h-[50px] mr-4">
                    <Image
                      src="/serviceimage/group 163.png"
                      alt="Mortgage Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="w-[474px] text-[40px] font-lato font-[700] text-[#1C1C1C] leading-[48px] text-left mt-4">
                  Mortgage Planning
                </p>
                <p className="w-[511px] pt-4 text-[24px] font-lato font-[400] text-[#1C1C1C] leading-[28.8px] text-left">
                  We help you secure the most competitive mortgage rates and favorable terms for your needs. Our experts simplify the complexities of property financing, ensuring a smooth and stress-free process. Trust us to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-start items-start pt-[80px] pl-[100px] h-full">
            <div className="relative w-[600px] h-[360px]">
              <Image
                src="/serviceimage/image (10).png"
                alt="Mortgage Services"
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

export default MortageService;
