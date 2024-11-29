import Image from 'next/image';
import React from 'react';
import FlashImage from '../ui/FlashImage';

const WhyChooseUs = () => {
    return (
        <section className="px-3 sm:px-4 py-6 sm:py-8 md:py-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                {/* Left Side - Image */}
                <div className="relative flex justify-center items-start pt-4 sm:pt-6 md:pt-8">
                    <div className="relative w-full max-w-[600px] 
                                  h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px] 
                                  overflow-hidden 
                                  rounded-[15px] sm:rounded-[20px] md:rounded-[30px]
                                  shadow-md hover:shadow-xl
                                  transition-all duration-300">
                        <FlashImage
                            src="/serviceproperty/1.2_Property Consultancy why choose us.jpg"
                            alt="Why Choose Us"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="relative flex flex-col pl-2 sm:pl-4 md:pl-6 lg:pl-10">
                    <div className="flex flex-col">
                        <div>
                            <p className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] 
                                        font-lato font-bold text-[#1C1C1C] 
                                        leading-tight md:leading-[1.2] 
                                        text-left mb-2 sm:mb-3">
                                Why Choose Us
                            </p>
                            <ul className="w-full max-w-[511px] 
                                         pt-2 sm:pt-3 md:pt-4 
                                         text-base sm:text-lg md:text-xl lg:text-[24px] 
                                         font-lato font-normal text-[#1C1C1C] 
                                         leading-normal md:leading-[1.2] 
                                         text-left list-none 
                                         space-y-4 sm:space-y-5 md:space-y-6">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 text-[#00472f] font-bold">•</span>
                                    <span>Extensive market knowledge and a proven track record.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 text-[#00472f] font-bold">•</span>
                                    <span>Personalized services designed to align with your financial objectives.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 text-[#00472f] font-bold">•</span>
                                    <span>A commitment to delivering measurable results for our clients.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-14 mb-6 sm:mb-8">
                <p className="font-lato 
                          text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] 
                          font-[700] 
                          leading-tight md:leading-[1.2] 
                          text-left 
                          text-underline-position-from-font 
                          decoration-skip-ink-none
                          max-w-[900px]">
                    Let us help you turn your property aspirations into achievements.
                </p>
            </div>
        </section>
    );
};

export default WhyChooseUs;