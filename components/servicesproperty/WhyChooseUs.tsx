import Image from 'next/image';
import React from 'react';
import FlashImage from '../ui/FlashImage';

const WhyChooseUs = () => {
  return (
    <section className="px-4 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[10px]">
        {/* Left Side - Image */}
        <div className="relative flex justify-center items-start pt-8 md:pt-[1px]">
          <div className="relative w-full max-w-[600px] h-[240px] md:h-[360px] overflow-hidden rounded-[30px]">
            <FlashImage
              src="/serviceproperty/1.2_Property Consultancy why choose us.jpg"
              alt="Why Choose Us"
              priority
            />
          </div>
        </div>         

        {/* Right Side - Content */}
        <div className="relative flex flex-col pl-10">
          <div className="flex flex-col">
            <div>
              <p className="w-full md:w-[474px] text-3xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left mb-3">
                Why Choose Us
              </p>
              <ul className="w-full md:w-[511px] pt-4 text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left list-disc list-inside space-y-4">
                <li>
                  <strong>Expert Guidance:</strong> Our team provides comprehensive property consultancy with deep market insights.
                </li>
                <li>
                  <strong>Personalized Solutions:</strong> We tailor our services to meet your specific property investment goals.
                </li>
                <li>
                  <strong>Market Knowledge:</strong> Stay ahead with our up-to-date market analysis and property trends.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-8 mb-8">
        <p className="font-lato text-[40px] font-[700] leading-[48px] text-left text-underline-position-from-font decoration-skip-ink-none">
          Let us help you turn your property aspirations into achievements.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;