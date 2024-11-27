'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

interface Testimonial {
  id: number
  projectName: string
  description: string
  quote: string
  author: string
  authorImage: string
  projectImage: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    projectName: "Mint Realty Project",
    description: "Client praise our exceptional service, noting our expert marketing and sales strategies that lead to above-reserve prices in a tough market.",
    quote: "Thank you, Team, for exceeding our expectations. You sold our investment properties effectively, achieving impressive prices even in a challenging market.",
    author: "Chang Ching",
    authorImage: "/images/Ellipse 5.png",
    projectImage: "/images/WHAT OUR CLIENT SAY.jpg",
  },
  // Add more testimonials as needed
]

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

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
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          <div className="relative pl-4 md:pl-[100px]">
            <h2 className="text-[32px] md:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px]">
              WHAT OUR <span className="text-[#8E8154]">CLIENT SAY</span>
            </h2>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-[#8E8154] hover:bg-[#8E8154] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-[#8E8154] hover:bg-[#8E8154] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Image */}
          <div className="relative h-[498px] w-full overflow-hidden">
            <Image
              src={testimonials[currentIndex].projectImage}
              alt={testimonials[currentIndex].projectName}
              fill
              className="rounded-[30px] object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              priority
            />
          </div>

          {/* Testimonial Content */}
          <div className="flex flex-col justify-center space-y-8 pl-4 md:pl-[60px]">
            <div>
              <h3 className="text-[32px] font-lato font-bold mb-4 text-[#1C1C1C] leading-[38.4px]">
                {testimonials[currentIndex].projectName}
              </h3>
              <p className="text-[24px] font-lato text-[#1C1C1C] leading-[28.8px]">
                {testimonials[currentIndex].description}
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="bg-[#B392550D] p-8 rounded-[30px]">
              <blockquote className="text-[24px] font-lato mb-6 text-[#1C1C1C] leading-[28.8px]">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].authorImage}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[24px] font-lato font-bold text-[#1C1C1C]">
                    {testimonials[currentIndex].author}
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