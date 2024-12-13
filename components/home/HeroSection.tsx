'use client'

import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'
import AnimatedButton from '../ui/AnimatedButton'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { translations } from '@/lib/i18n/translations'

const HeroSection = () => {
  const router = useRouter();
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
        <div className="relative w-full h-full border-[10px] border-[#FFFFFF]">
          <img
            src="/images/Banner Image.jpg"
            alt={t.luxuryHomeBackground}
            className="object-cover w-full h-full"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>
      </div>
      
      {/* Header */}
      <Header variant="transparent" />

      {/* Content Container */}
      <div className="relative z-20 w-full mt-auto md:mt-auto mt-[30vh]">
        <div className="container mx-auto px-4 md:px-0">
          {/* Rectangle 1 */}
          <div className="relative flex justify-center md:justify-start">
            <div className="w-full md:w-[585px] h-[60px] md:h-[83px] bg-white rounded-[15px] md:rounded-r-[30px] md:rounded-l-none flex items-center">
              <div className="px-4 md:pl-[100px] md:ml-auto w-full md:w-auto text-center md:text-left">
                <p className="text-2xl md:text-3xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px] md:whitespace-nowrap md:pr-[90px]">
                  {t.buyYourNext}
                </p>
              </div>
            </div>
          </div>

          {/* Rectangle 2 and Learn More Button */}
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
            <div className="relative w-full md:w-auto">
              <div className="w-full md:w-[396px] h-[60px] md:h-[83px] bg-white rounded-[15px] md:rounded-none md:rounded-r-[30px] flex items-center justify-center md:justify-start">
                <div className="px-4 md:pl-[100px] md:ml-auto">
                  <p className="text-2xl md:text-3xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px] text-center md:text-left">
                    {t.home}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 md:mt-0 md:ml-[-15px] pl-4 md:pl-5">
              <AnimatedButton 
                onClick={() => router.push('/services')}
                text={t.learnMore}
              />
            </div>
          </div>

          {/* Rectangle 3 */}
          <div className="relative flex justify-center md:justify-start mt-4 md:mt-0">
            <div className="w-full md:w-[590px] h-[90px] md:h-[112px] bg-white rounded-[15px] md:rounded-tr-[30px] md:rounded-l-none flex items-center">
              <div className="px-4 md:pl-[100px] md:ml-auto w-full md:w-auto">
                <div className="md:pr-[70px] md:max-w-[450px] flex flex-col items-center md:items-start">
                  <p className="text-lg md:text-xl lg:text-[24px] font-lato font-normal text-[#1C1C1C] text-center md:text-left">
                    {t.amazingLuxuryHome1}
                  </p>
                  <p className="text-lg md:text-xl lg:text-[24px] font-lato font-normal text-[#1C1C1C] text-center md:text-left">
                    {t.amazingLuxuryHome2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
