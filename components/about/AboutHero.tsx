'use client'

import Image from 'next/image'
import Header from '../Header'
import React from 'react'
import { useRouter } from 'next/navigation'
import AnimatedButton from '../ui/AnimatedButton'

export default function AboutHero() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[85vh] flex items-center">
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
      <div className="relative z-10 w-full flex items-center justify-center -mt-6 md:-mt-12">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="w-full max-w-[950px] bg-[#1C1C1C59] rounded-[15px] py-6 md:py-10 px-4 md:px-12 border border-white/20">
            <div className="text-white text-center flex flex-col items-center">
              {/* Title */}
              <h1 className="font-lato text-3xl md:text-[60px] font-extrabold leading-tight md:leading-[72px] text-center mb-3 md:mb-6 decoration-white">
                Find Your Dream Property Here
              </h1>
              {/* Subtitle */}
              <p className="font-lato text-xl md:text-[30px] font-extrabold leading-tight md:leading-[36px] text-center mb-3 md:mb-6 decoration-white">
                Property & Mortgage Consultancy in Hong Kong | Everon
              </p>
              {/* Description */}
              <div className="font-lato text-base md:text-[24px] leading-normal md:leading-[28.8px] font-normal text-center">
                <p className="mx-auto max-w-[850px]">
                  Everon Property & Mortgage Consultancy Limited offers tailored
                  property, mortgage, and financial services to individuals
                  and corporations in Hong Kong.
                </p>
              </div>
              {/* Button */}
              <div className="flex items-center justify-center mt-6 md:mt-8">
                <AnimatedButton
                  onClick={() => router.push('/services')}
                  text="Learn More"
                  size="large"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
