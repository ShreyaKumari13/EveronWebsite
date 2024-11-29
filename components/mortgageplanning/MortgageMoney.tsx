import Image from 'next/image';
import React from 'react';
import FlashImage from '../ui/FlashImage';

const MortgageMoney = () => {
    return (
        <section className="px-4 py-8 mx-auto max-w-7xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[10px]">
                {/* Left Side - Image */}

                {/* Right Side - Content */}
                <div className="relative flex flex-col pl-10">
                    <div className="flex flex-col">
                        <div>
                            <ul className="w-full md:w-[511px] pt-4 text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left list-none">
                                <li className="flex items-start mb-6 pt-2">
                                    <span className="mr-2 mt-2">•</span>
                                    <span>Personalized mortgage assessments based on your financial profile.
                                    </span>
                                </li>
                                <li className="flex items-start mb-6">
                                    <span className="mr-2 mt-2">•</span>
                                    <span>Identifying competitive mortgage rates tailored to your budget.</span>
                                </li>
                                <li className="flex items-start mb-6">
                                    <span className="mr-2 mt-2">•</span>
                                    <span>Assisting with documentation and ensuring compliance with lending regulations.</span>
                                </li>
                                <li className="flex items-start mb-6">
                                    <span className="mr-2 mt-2">•</span>
                                    <span>
                                        Expert advice on refinancing options to reduce long-term costs.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center items-start pt-8 md:pt-[1px]">
                    <div className="relative w-full max-w-[600px] h-[240px] md:h-[360px]">
                        {/* Square Border Effect */}
                        <div className="absolute inset-0 border-[1px] border-[#00492C] rounded-[30px] translate-x-6 translate-y-6"></div>
                        {/* Actual Image */}
                        <div className="relative w-full h-full overflow-hidden rounded-[30px] bg-white">
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