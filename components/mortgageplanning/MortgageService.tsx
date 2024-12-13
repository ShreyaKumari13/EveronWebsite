'use client'

import Image from 'next/image';
import React from 'react';
import FlashImage from '../ui/FlashImage';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { translations } from '@/lib/i18n/translations';

const MortgageService = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="px-3 sm:px-4 py-6 sm:py-8 md:py-12 mx-auto max-w-7xl">
            <div className="mb-8 sm:mb-10 md:mb-12">
                <h2 className="font-lato text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] 
                             font-[700] leading-[1.2] 
                             text-left text-underline-position-from-font 
                             decoration-skip-ink-none 
                             mb-3 sm:mb-4">
                    {t.mortgagePlanningTitle}
                </h2>
                <p className="font-lato text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] 
                             font-[400] leading-[1.2] 
                             text-left text-underline-position-from-font 
                             decoration-skip-ink-none 
                             mb-3 sm:mb-4"
                    dangerouslySetInnerHTML={{ __html: t.mortgagePlanningIntro }}
                />
                <p className="font-lato text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] 
                             font-[400] leading-[1.2] 
                             text-left text-underline-position-from-font 
                             decoration-skip-ink-none"
                    dangerouslySetInnerHTML={{ __html: t.mortgagePlanningDesc }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                {/* Image Side */}
                <div className="relative flex justify-center items-start pt-4 sm:pt-6 md:pt-8">
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
                                src="/mortgageimage/2.1_mortgage-planning included.jpg"
                                alt={t.mortgageServiceImageAlt}
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="relative flex flex-col pl-2 sm:pl-4 md:pl-6 lg:pl-10">
                    <div className="flex flex-col">
                        <div>
                            <p className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] 
                                      font-lato font-bold text-[#1C1C1C] 
                                      leading-tight md:leading-[1.2] 
                                      text-left 
                                      mb-4 sm:mb-5 md:mb-6">
                                {t.mortgageServicesIncludeTitle}
                            </p>
                            <p className="font-lato text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] 
                                      font-[400] leading-[1.3] 
                                      text-left text-underline-position-from-font 
                                      decoration-skip-ink-none text-[#1C1C1C] 
                                      max-w-[511px]
                                      transition-all duration-300">
                                {t.mortgageServicesIncludeDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MortgageService;