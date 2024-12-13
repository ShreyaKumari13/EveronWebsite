'use client'

import Image from 'next/image'
import React from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { translations } from '@/lib/i18n/translations'

const RatesTermsSection = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="w-full bg-[#B392550D] py-8 md:py-12">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-white rounded-full">
              <Image
                src="/images/pie-chart.png"
                alt={t.ratesIcon}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm md:text-[16px] font-lato font-normal text-[#1C1C1C] uppercase">
                {t.ratesAsLowAs}
              </p>
              <p className="mt-1 whitespace-nowrap">
                <span className="font-lato text-base md:text-[20px] font-normal leading-tight md:leading-[28.8px] text-[#1C1C1C] text-left">{t.from} </span>
                <span className="font-lato text-3xl md:text-[50px] font-normal leading-tight md:leading-[60px] text-[#1C1C1C] text-left">3.74%</span>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-white rounded-full">
              <Image
                src="/images/Group 132.png"
                alt={t.processIcon}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm md:text-[16px] font-lato font-normal text-[#1C1C1C] uppercase">
                {t.fastEasyProcess}
              </p>
              <p className="mt-1 whitespace-nowrap">
                <span className="font-lato text-base md:text-[20px] font-normal leading-tight md:leading-[28.8px] text-[#1C1C1C] text-left">{t.only} </span>
                <span className="font-lato text-3xl md:text-[50px] font-normal leading-tight md:leading-[60px] text-[#1C1C1C] text-left">{t.sevenDays}</span>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-white rounded-full">
              <Image
                src="/images/Group 131.png"
                alt={t.loanTermIcon}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm md:text-[16px] font-lato font-normal text-[#1C1C1C] uppercase">
                {t.longLoanTerm}
              </p>
              <p className="mt-1 whitespace-nowrap">
                <span className="font-lato text-base md:text-[20px] font-normal leading-tight md:leading-[28.8px] text-[#1C1C1C] text-left">{t.upTo} </span>
                <span className="font-lato text-3xl md:text-[50px] font-normal leading-tight md:leading-[60px] text-[#1C1C1C] text-left">{t.thirtyYears}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RatesTermsSection
