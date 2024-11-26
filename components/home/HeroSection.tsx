'use client'

import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/image_bg.png"
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

      {/* Left Side Details */}
      <div className="absolute left-0 bottom-0 z-20 pb-20">
        {/* Rectangle 1 */}
        <div className="relative ml-24">
          <div className="w-[470px] h-[83px] bg-white rounded-r-[30px] flex items-center pl-[111px]">
            <p className="text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px] whitespace-nowrap">
              Buy Your Next
            </p>
          </div>
        </div>

        {/* Rectangle 2 */}
        <div className="relative mt-0 ml-24">
          <div className="w-[296px] h-[83px] bg-white rounded-r-[30px] flex items-center pl-[111px]">
            <p className="text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px]">
              Home
            </p>
          </div>
        </div>

        {/* Learn More Button and Arrow */}
        <div className="flex items-center mt-[-10px] ml-[415px]">
          <button className="w-[137px] h-[40px] bg-[#8E8154] rounded-[10px] flex items-center justify-center">
            <span className="text-[20px] font-lato font-normal text-white">Learn More</span>
          </button>
          <div className="ml-[13px] w-[40px] h-[40px] bg-white rounded-[10px] flex items-center justify-center">
            <Image
              src="/images/arrow-right.png"
              alt="Arrow Right"
              width={24}
              height={24}
              className="brightness-0"
              priority
            />
          </div>
        </div>

        {/* Rectangle 3 */}
        <div className="relative mt-[-10px] ml-24">
          <div className="w-[470px] h-[112px] bg-white rounded-tr-[30px] flex items-center pl-[111px]">
            <p className="text-[24px] font-lato font-normal text-[#1C1C1C] leading-[28.8px] max-w-[310px]">
              Amazing luxury home waiting for your presence!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
