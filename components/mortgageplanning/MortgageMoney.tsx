import Image from 'next/image';
import React from 'react';
import FlashImage from '../ui/FlashImage';

const MortgageMoney = () => {
    return (
        <section className="px-3 sm:px-4 py-6 sm:py-8 md:py-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                {/* Content Side */}
                <div className="relative flex flex-col pl-2 sm:pl-4 md:pl-6 lg:pl-10 order-2 md:order-1">
                    <div className="flex flex-col">
                        <div>
                            <ul className="w-full max-w-[511px] 
                                       pt-2 sm:pt-3 md:pt-4 
                                       text-base sm:text-lg md:text-xl lg:text-[24px] 
                                       font-lato font-normal text-[#1C1C1C] 
                                       leading-normal md:leading-[1.2] 
                                       text-left list-none 
                                       space-y-4 sm:space-y-5 md:space-y-6">
                                <li className="flex items-start group">
                                    <span className="mr-2 mt-1.5 text-[#00472f] font-bold 
                                                 transition-transform duration-300 
                                                 group-hover:scale-125">•</span>
                                    <span className="transition-all duration-300 group-hover:translate-x-1">
                                        Personalized mortgage assessments based on your financial profile.
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="mr-2 mt-1.5 text-[#00472f] font-bold 
                                                 transition-transform duration-300 
                                                 group-hover:scale-125">•</span>
                                    <span className="transition-all duration-300 group-hover:translate-x-1">
                                        Identifying competitive mortgage rates tailored to your budget.
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="mr-2 mt-1.5 text-[#00472f] font-bold 
                                                 transition-transform duration-300 
                                                 group-hover:scale-125">•</span>
                                    <span className="transition-all duration-300 group-hover:translate-x-1">
                                        Assisting with documentation and ensuring compliance with lending regulations.
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="mr-2 mt-1.5 text-[#00472f] font-bold 
                                                 transition-transform duration-300 
                                                 group-hover:scale-125">•</span>
                                    <span className="transition-all duration-300 group-hover:translate-x-1">
                                        Expert advice on refinancing options to reduce long-term costs.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Image Side */}
                <div className="relative flex justify-center items-start pt-4 sm:pt-6 md:pt-8 order-1 md:order-2">
                    <div className="relative w-full max-w-[600px] 
                                h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px]">
                        {/* Square Border Effect */}
                        <div className="absolute inset-0 
                                    border-[1px] border-[#00492C] 
                                    rounded-[15px] sm:rounded-[20px] md:rounded-[30px] 
                                    translate-x-3 sm:translate-x-4 md:translate-x-5 lg:translate-x-6 
                                    translate-y-3 sm:translate-y-4 md:translate-y-5 lg:translate-y-6
                                    transition-all duration-300"></div>
                        {/* Actual Image */}
                        <div className="relative w-full h-full 
                                    overflow-hidden 
                                    rounded-[15px] sm:rounded-[20px] md:rounded-[30px] 
                                    bg-white 
                                    shadow-md hover:shadow-xl
                                    transition-all duration-300">
                            <FlashImage
                                src="/mortgageimage/2.2_mortgage-planning included_points.jpg"
                                alt="Mortgage Money Services"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MortgageMoney;