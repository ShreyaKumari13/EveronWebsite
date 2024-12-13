'use client'

import Image from 'next/image'
import React from 'react'
import FlashImage from '../ui/FlashImage'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { translations } from '@/lib/i18n/translations'

const OurExpertise = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="relative w-full py-8 md:py-0">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[10px] md:h-[500px]">
          {/* Left Side - Content */}
          <div className="relative flex flex-col md:pl-[100px] h-full">
            <div className="flex flex-col h-full">
              <div>
                <p className="w-full md:w-[474px] text-3xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left mb-3">
                  {t.ourExpertiseTitle}
                </p>
                <ul className="w-full md:w-[511px] pt-4 text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left list-disc list-inside space-y-4">
                  <li>
                    <strong>{t.bankingTitle}</strong> {t.bankingDesc}
                  </li>
                  <li>
                    <strong>{t.clientCentricTitle}</strong> {t.clientCentricDesc}
                  </li>
                  <li>
                    <strong>{t.trackRecordTitle}</strong> {t.trackRecordDesc}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center md:justify-start items-start pt-8 md:pt-[20px] md:pl-[100px] h-full">
            <div className="relative w-full max-w-[600px] h-[240px] md:h-[360px] overflow-hidden rounded-[30px]">
              <FlashImage
                src="/aboutimage/Our Expertise.jpg"
                alt={t.ourExpertiseImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurExpertise
