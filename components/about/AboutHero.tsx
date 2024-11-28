'use client'

import Image from 'next/image'
import Header from '../Header'

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/aboutimage/Banner.jpg"
          alt="Luxury home background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Header */}
      <Header variant="transparent" />

      {/* Hero Content */}
      <div className="relative z-10 w-full flex items-center justify-center -mt-12">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="w-[950px] bg-[#1C1C1C59] rounded-[15px] py-10 px-12 border border-white/20">
            <div className="text-white text-center flex flex-col items-center">
              {/* Title */}
              <h1 className="font-lato text-[60px] font-extrabold leading-[72px] text-center mb-6  decoration-white">
                Find Your Dream Property Here
              </h1>
              {/* Subtitle */}
              <p className="font-lato text-[30px] font-extrabold leading-[36px] text-center mb-6 decoration-white">
                Property & Mortgage Consultancy in Hong Kong | Everon
              </p>
              {/* Description */}
              <div className="font-lato text-[24px] leading-[28.8px] font-normal text-center">
                <p className="mx-auto max-w-[850px]">
                  Everon Property & Mortgage Consultancy Limited offers tailored
                </p>
                <p className="mx-auto max-w-[850px]">
                  property, mortgage, and financial services to individuals
                </p>
                <p className="mx-auto max-w-[850px]">
                  and corporations in Hong Kong.
                </p>
              </div>
              {/* Button */}
              <div className="flex items-center justify-center mt-8">
                <button className="w-[200px] h-[50px] bg-[#8E8154] rounded-[10px] flex items-center justify-center shadow-md hover:bg-[#A2925F] active:bg-[#72683E] transition">
                  <span className="text-[20px] font-lato font-medium text-white mr-3">
                    Learn More
                  </span>
                  <div className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="#8E8154"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
