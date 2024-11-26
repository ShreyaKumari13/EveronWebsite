import Image from 'next/image';
import React from 'react';

const OurExpertise = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] h-[500px]">
          {/* Left Side - Content */}
          <div className="relative flex flex-col pl-[100px] h-full">
            <div className="flex flex-col h-full">
              <div>
                <p className="w-[474px] text-[40px] font-lato font-[700] text-[#1C1C1C] leading-[48px] text-left mb-3">
                  Our Expertise
                </p>
                <ul className="w-[511px] pt-4 text-[24px] font-lato font-[400] text-[#1C1C1C] leading-[28.8px] text-left list-disc list-inside space-y-4">
                  <li>
                    <strong>Banking Background:</strong> Each team member brings over
                    10 years of experience in banking and financial services.
                  </li>
                  <li>
                    <strong>Client-Centric Approach:</strong> We focus on understanding
                    your needs to craft tailored strategies.
                  </li>
                  <li>
                    <strong>Proven Track Record:</strong> Successfully assisted numerous
                    clients with property investments and financial planning.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-start items-start pt-[20px] pl-[100px] h-full">
            <div className="relative w-[600px] h-[360px]">
              <Image
                src="/aboutimage/image (7).png"
                alt="Team of experts discussing"
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

export default OurExpertise;