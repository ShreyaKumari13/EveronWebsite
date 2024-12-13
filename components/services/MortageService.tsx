'use client'

import Image from 'next/image';
import React from 'react';
import FlashImage from '../ui/FlashImage';
import AnimatedButton from '../ui/AnimatedButton';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { translations } from '@/lib/i18n/translations';

const MortageService = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative w-full -mt-8 md:-mt-16">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[10px] md:h-[500px]">
          {/* Content Section */}
          <div className="relative flex flex-col px-4 md:pl-[100px] pt-8 md:pt-[60px] h-full">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex items-center pt-6 md:pt-0">
                  <div className="relative w-[40px] h-[40px] md:w-[80px] md:h-[80px] mr-4">
                    <Image
                      src="/serviceimage/Group.png"
                      alt={t.mortgageIconAlt}
                      fill
                      sizes="(max-width: 768px) 50px, 60px"
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="w-full md:w-[474px] text-3xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left">
                  {t.mortgagePlanningTitle}
                </p>
                <p className="w-full md:w-[511px] pt-4 text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left">
                  {t.mortgagePlanningDesc}
                </p>
                <div className="flex justify-center md:justify-start mt-8 md:mt-5">
                  <Link href="/mortgage" className="cursor-pointer">
                    <AnimatedButton 
                      text={t.readMore}
                      variant="dark-green"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center md:justify-end items-start pt-8 md:pt-[55px] md:pr-[100px] h-full">
            <div className="relative w-full md:w-[600px] h-[240px] md:h-[360px] overflow-hidden rounded-[30px]">
              <FlashImage
                src="/serviceimage/Mortgage.jpg"
                alt={t.mortgageServiceAlt}
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
