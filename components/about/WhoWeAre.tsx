'use client'

import Image from 'next/image'
import React from 'react'
import FlashImage from '../ui/FlashImage'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { translations } from '@/lib/i18n/translations'

const WhoWeAre = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="relative w-full py-8">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[10px] md:h-[500px]">
          {/* Left Side - Content */}
          <div className="relative flex flex-col md:pl-[100px] h-full">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex flex-col space-y-1 sm:space-y-2 mb-3 sm:mb-4 md:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px] text-left whitespace-normal md:whitespace-nowrap">
                    {t.whoWeAreTitle1}
                  </h2>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px] text-left">
                    {t.whoWeAreTitle2}
                  </h2>
                </div>
                <p className="w-full md:w-[474px] text-2xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left pt-4 md:pt-[15px] pb-4 md:pb-[25px]">
                  {t.whoWeAreSubtitle}
                </p>
                <p className="w-full md:w-[511px] text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left">
                  {t.whoWeAreDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center md:justify-start items-start pt-8 md:pt-[80px] md:pl-[10px] h-full">
            <div className="relative w-full max-w-[600px] h-[240px] md:h-[360px] overflow-hidden rounded-[30px]">
              <FlashImage
                src="/aboutimage/Who we are.jpg"
                alt={t.whoWeAreImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
