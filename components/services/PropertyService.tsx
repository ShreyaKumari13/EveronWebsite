'use client'

import Image from 'next/image';
import React from 'react';
import FlashImage from '../ui/FlashImage';
import AnimatedButton from '../ui/AnimatedButton';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { translations } from '@/lib/i18n/translations';

const PropertyService = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative w-full">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[10px] md:h-[500px]">
          {/* Content Section - Shows first on mobile */}
          <div className="relative flex flex-col px-4 md:pl-[100px] pt-8 md:pt-[80px] h-full md:order-2">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex items-center">
                  <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] mr-4">
                    <Image
                      src="/serviceimage/home.png"
                      alt={t.propertyIconAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="w-full md:w-[474px] text-3xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left mt-2">
                  {t.propertyServicesTitle}
                </p>
                <p className="w-full md:w-[511px] pt-2 pb-4  text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left">
                  {t.propertyServicesDesc}
                </p>
              </div>
              <div className="flex justify-center md:justify-start ml-0 md:ml-[-20px] mt-8 md:mt-0 pl-0 md:pl-5">
                <Link href="/serviceproperty">
                  <AnimatedButton
                    variant="dark-green"
                    text={t.readMore}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section - Shows second on mobile */}
          <div className="relative flex justify-center md:justify-start items-start pt-8 md:pt-[80px] md:pl-[100px] h-full md:order-1">
            <div className="relative w-full max-w-[600px] h-[240px] md:h-[360px] overflow-hidden rounded-[30px]">
              <FlashImage
                src="/serviceimage/Property.jpg"
                alt={t.propertyServicesAlt}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyService;