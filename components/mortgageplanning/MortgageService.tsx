import Image from 'next/image';
import React from 'react';
import FlashImage from '../ui/FlashImage';

const MortgageService = () => {
    return (
        <section className="px-4 py-8 mx-auto max-w-7xl">
            <div className="mb-12">
                <h2 className="font-lato text-[40px] font-[700] leading-[48px] text-left text-underline-position-from-font decoration-skip-ink-none mb-4">
                    Mortgage Planning
                </h2>
                <p className="font-lato text-[24px] font-[400] leading-[28.8px] text-left text-underline-position-from-font decoration-skip-ink-none mb-4">
                    Navigating the complexities of property financing can be daunting, but with <span className="font-lato text-[24px] font-[600] leading-[28.8px]">Everon Property & Mortgage Consultancy Limited</span>, you're in expert hands.
                </p>
                <p className="font-lato text-[24px] font-[400] leading-[28.8px] text-left text-underline-position-from-font decoration-skip-ink-none">
                    We specialize in helping you <span className="font-lato text-[24px] font-[600] leading-[28.8px]">secure the best mortgage rates</span> and terms to make your property dreams a reality.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[10px]">
                {/* Left Side - Image */}
                <div className="relative flex justify-center items-start pt-8 md:pt-[1px]">
                    <div className="relative w-full max-w-[600px] h-[240px] md:h-[360px]">
                        {/* Square Border Effect */}
                        <div className="absolute inset-0 border-[1px] border-[#00492C] rounded-[30px] translate-x-6 translate-y-6"></div>
                        {/* Actual Image */}
                        <div className="relative w-full h-full overflow-hidden rounded-[30px] bg-white">
                            <FlashImage
                                src="/mortgageimage/2.1_mortgage-planning included.jpg"
                                alt="Mortgage Planning Services"
                                priority
                            />
                        </div>
                    </div>
                </div>



                {/* Right Side - Content */}
                <div className="relative flex flex-col pl-10">
                    <div className="flex flex-col">
                        <div>
                            <p className="w-full md:w-[474px] text-3xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left mb-6">
                                Our Mortgage Planning Services Include:
                            </p>
                            <p className="w-full md:w-[511px] font-lato text-[24px] font-[400] leading-[28.8px] text-left text-underline-position-from-font decoration-skip-ink-none text-[#1C1C1C] mb-6">
                                Purchasing a home or refinancing your mortgage is a significant financial decision that requires careful planning and expertise. At the heart of our service is a commitment to guiding you through every step of the process, ensuring your mortgage aligns seamlessly with your financial goals. Here's what we offer:
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MortgageService;