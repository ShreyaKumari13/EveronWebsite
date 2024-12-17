'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import FlashImage from './ui/FlashImage'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { translations } from '@/lib/i18n/translations'

interface Testimonial {
  id: number
  projectName: {
    en: string
    zh: string
  }
  description: {
    en: string
    zh: string
  }
  quote: {
    en: string
    zh: string
  }
  author: {
    en: string
    zh: string
  }
  authorImage: string
  projectImage: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    projectName: {
      en: "Mint Realty Project",
      zh: "明特房地产项目"
    },
    description: {
      en: "Client praise our exceptional service, noting our expert marketing and sales strategies that lead to above-reserve prices in a tough market.",
      zh: "客户赞扬我们出色的服务，特别是我们专业的营销和销售策略，即使在充满挑战的市场中也能实现高于预期的价格。"
    },
    quote: {
      en: "Thank you, Team, for exceeding our expectations. You sold our investment properties effectively, achieving impressive prices even in a challenging market.",
      zh: "感謝團隊超越了我們的期望。你們有效地銷售了我們的投資物業，即使在充滿挑戰的市場中也取得了令人印象深刻的價格。"
    },
    author: {
      en: "Chang Ching",
      zh: "張清"
    },
    authorImage: "/images/Ellipse 5.png",
    projectImage: "/images/WHAT OUR CLIENT SAY.jpg",
  },
  // Add more testimonials as needed
]

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()
  const t = translations[language]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="w-full">
      <div className="relative w-full max-w-[1280px] mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-start md:justify-between mb-8 md:mb-12">
          <div className="relative pl-4 md:pl-[120px]">
            <h2 className="text-2xl md:text-[32px] lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px]">
              {t.whatOurClientSay} <span className="text-[#8E8154]">{t.clientSay}</span>
            </h2>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0 justify-center w-full md:w-auto">
            <button
              onClick={prevSlide}
              className="p-1 md:p-2 rounded-full border border-[#8E8154] hover:bg-[#8E8154] hover:text-white transition-colors"
              aria-label={t.previousTestimonial}
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="p-1 md:p-2 rounded-full border border-[#8E8154] hover:bg-[#8E8154] hover:text-white transition-colors"
              aria-label={t.nextTestimonial}
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Image */}
          <div className="relative h-[300px] md:h-[498px] w-full overflow-hidden rounded-[30px]">
            <FlashImage
              src={testimonials[currentIndex].projectImage}
              alt={testimonials[currentIndex].projectName[language]}
              priority
            />
          </div>

          {/* Testimonial Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 pl-4 md:pl-[60px]">
            <div>
              <h3 className="text-2xl md:text-[32px] font-lato font-bold mb-2 md:mb-4 text-[#1C1C1C] leading-tight md:leading-[38.4px]">
                {testimonials[currentIndex].projectName[language]}
              </h3>
              <p className="text-lg md:text-[24px] font-lato text-[#1C1C1C] leading-normal md:leading-[28.8px]">
                {testimonials[currentIndex].description[language]}
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="bg-[#B392550D] p-6 md:p-8 rounded-[30px]">
              <blockquote className="text-lg md:text-[24px] font-lato mb-4 md:mb-6 text-[#1C1C1C] leading-normal md:leading-[28.8px]">
                &ldquo;{testimonials[currentIndex].quote[language]}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                  <FlashImage
                    src={testimonials[currentIndex].authorImage}
                    alt={testimonials[currentIndex].author[language]}
                  />
                </div>
                <div>
                  <p className="text-lg md:text-[24px] font-lato font-bold text-[#1C1C1C]">
                    {testimonials[currentIndex].author[language]}
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

export default TestimonialSection
