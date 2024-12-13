'use client'

import Image from 'next/image'
import FlashImage from '../ui/FlashImage'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { translations } from '@/lib/i18n/translations'

const WhyChooseUsSection = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      title: t.tailoredSolutionsTitle,
      description: t.tailoredSolutionsDesc
    },
    {
      title: t.experiencedTeamTitle,
      description: t.experiencedTeamDesc
    },
    {
      title: t.comprehensiveServicesTitle,
      description: t.comprehensiveServicesDesc
    }
  ]

  return (
    <section className="relative w-full py-8 md:py-16" style={{ backgroundColor: '#B3925533' }}>
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative md:pl-[90px]">
            <h2 className="text-2xl md:text-3xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] mb-6 md:mb-[28px]">
              {t.whyChooseUs}
            </h2>
            <div className="w-full md:w-[416px]">
              <div className="space-y-6 md:space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-lato text-lg md:text-[26px] font-semibold leading-tight md:leading-[31.2px] text-[#1C1C1C] flex items-center">
                      <span className="w-2 h-2 bg-[#1C1C1C] rounded-full mr-4"></span>
                      {feature.title}
                    </h3>
                    <p className="font-lato text-base md:text-[24px] font-normal leading-relaxed md:leading-[28.8px] text-[#1C1C1C] ml-6">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
            <div className="relative flex flex-col space-y-4">
              <div className="relative w-full h-[200px] md:h-[241px] overflow-hidden rounded-[30px]">
                <FlashImage
                  src="/images/Why choose us 1.jpg"
                  alt={t.whyChooseUsImage1}
                  priority
                />
              </div>
              <div className="relative w-full h-[200px] md:h-[241px] overflow-hidden rounded-[30px]">
                <FlashImage
                  src="/images/Why choose us 2.jpg"
                  alt={t.whyChooseUsImage2}
                />
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[498px] overflow-hidden rounded-[30px] mt-4 sm:mt-0">
              <FlashImage
                src="/images/Why choose us 3.jpg"
                alt={t.whyChooseUsImage3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
