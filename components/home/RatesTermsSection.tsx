import Image from 'next/image';
import React from 'react';

const RatesTermsSection = () => {
  return (
    <section className="w-full bg-[#B392550D]">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-[100px] py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 flex items-center justify-center text-white rounded-full">
              <Image
                src="/images/pie-chart.png"
                alt="Rates Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[16px] font-lato font-normal text-[#1C1C1C] uppercase">
                RATES  US  LOW  AS
              </p>
              <p className="mt-1 whitespace-nowrap">
                <span className="font-lato text-[20px] font-normal leading-[28.8px] text-[#1C1C1C] text-left">From </span>
                <span className="font-lato text-[50px] font-normal leading-[60px] text-[#1C1C1C] text-left">3.74%</span>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 flex items-center justify-center text-white rounded-full">
              <Image
                src="/images/Group 132.png"
                alt="Process Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[16px] font-lato font-normal text-[#1C1C1C] uppercase">
                FAST  &  EASY  PROCESS
              </p>
              <p className="mt-1 whitespace-nowrap">
                <span className="font-lato text-[20px] font-normal leading-[28.8px] text-[#1C1C1C] text-left">Only </span>
                <span className="font-lato text-[50px] font-normal leading-[60px] text-[#1C1C1C] text-left">7 Days</span>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 flex items-center justify-center text-white rounded-full">
              <Image
                src="/images/Group 131.png"
                alt="Loan Term Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[16px] font-lato font-normal text-[#1C1C1C] uppercase">
                LONG LOAN TERM
              </p>
              <p className="mt-1 whitespace-nowrap">
                <span className="font-lato text-[20px] font-normal leading-[28.8px] text-[#1C1C1C] text-left">Up  to </span>
                <span className="font-lato text-[50px] font-normal leading-[60px] text-[#1C1C1C] text-left">30 Years</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesTermsSection;
