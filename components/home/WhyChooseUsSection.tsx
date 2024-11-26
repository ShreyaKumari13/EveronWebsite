import Image from 'next/image';
import React from 'react';

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Tailored Solutions",
      description: "We understand that every client is unique, and so are their financial needs."
    },
    {
      title: "Experienced Team",
      description: "Our team has over 10 years of expertise in property, mortgage, and financial consultancy."
    },
    {
      title: "Comprehensive Services",
      description: "From property investments to mortgage planning, we've got you covered."
    }
  ];

  return (
    <section className="w-full bg-[#B3925533]">
      <div className="relative w-full max-w-[1280px] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] px-4 md:px-0">
          {/* Left Side - Content */}
          <div className="relative flex flex-col pl-4 md:pl-[100px]">
            <h2 className="text-[32px] md:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px]">
              WHY CHOOSE US?
            </h2>
            <div className="mt-8 space-y-8 max-w-[511px]">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-lato text-[26px] font-semibold leading-[31.2px] text-[#1C1C1C] flex items-center">
                    <span className="w-2 h-2 bg-[#1C1C1C] rounded-full mr-4"></span>
                    {feature.title}
                  </h3>
                  <p className="font-lato text-[24px] font-normal leading-[28.8px] text-[#1C1C1C] ml-6">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative mt-8 md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative space-y-4">
                <div className="relative w-full h-[241px]">
                  <Image
                    src="/images/image (1).png"
                    alt="Clients discussing with consultant"
                    fill
                    className="rounded-tl-[30px] object-cover"
                    priority
                  />
                </div>
                <div className="relative w-full h-[241px]">
                  <Image
                    src="/images/image (2).png"
                    alt="Family consultation"
                    fill
                    className="rounded-tl-[30px] object-cover"
                  />
                </div>
              </div>
              <div className="relative w-full h-[498px]">
                <Image
                  src="/images/image (3).png"
                  alt="Professional consultation"
                  fill
                  className="rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;