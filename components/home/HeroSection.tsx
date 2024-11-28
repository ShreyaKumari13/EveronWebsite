'use client'

import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
        <img
          src="/images/Banner Image.jpg"
          alt="Luxury home background"
          className="object-cover w-full h-full"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>
      
      {/* Header */}
      <Header variant="transparent" />

      {/* Content Container */}
      <div className="relative z-20 w-full mt-auto">
        <div className="container mx-auto">
          {/* Rectangle 1 */}
          <div className="relative">
            <div className="w-screen sm:w-[585px] h-[83px] bg-white rounded-r-[30px] flex items-center">
              <div className="pl-[100px] ml-auto">
                <p className="text-3xl sm:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px] whitespace-nowrap pr-[90px]">
                  Buy Your Next
                </p>
              </div>
            </div>
          </div>

          {/* Rectangle 2 and Learn More Button */}
          <div className="flex items-center">
            <div className="relative">
              <div className="w-screen sm:w-[396px] h-[83px] bg-white flex items-center [clip-path:path('M0_-1_h367_c-20_0_-20_85_0_85_h-367_z')]">
                <div className="pl-[100px] ml-auto">
                  <p className="text-3xl sm:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px] pr-[60px]">
                    Home
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center sm:ml-[-15px]">
              <button className="w-[137px] h-[40px] bg-[#8E8154] rounded-[10px] flex items-center justify-center">
                <span className="text-[20px] font-lato font-normal text-white">Learn More</span>
              </button>
              <div className="ml-[5px] w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-55.32deg]">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#8E8154" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Rectangle 3 */}
          <div className="relative">
            <div className="w-screen sm:w-[590px] h-[112px] bg-white rounded-tr-[30px] flex items-center">
              <div className="pl-[100px] ml-auto">
                <div className="pr-[70px] max-w-[450px] flex flex-col pr-[54x]">
                  <p className="text-xl sm:text-[24px] font-lato font-normal text-[#1C1C1C] whitespace-nowrap">
                    Amazing luxury home waiting
                  </p>
                  <p className="text-xl sm:text-[24px] font-lato font-normal text-[#1C1C1C]">
                    for your presence!
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

