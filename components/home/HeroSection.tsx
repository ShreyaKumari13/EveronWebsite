'use client'

import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
        <div className="relative w-full h-full border-[10px] border-[#FFFFFF]">
          <img
            src="/images/Banner Image.jpg"
            alt="Luxury home background"
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
                  Buy Your Next
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
                    Home
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 md:mt-0 md:ml-[-15px] pl-4 md:pl-5">
              <button 
                onClick={() => router.push('/services')}
                className="w-[180px] h-[40px] bg-[#8E8154] rounded-[10px] flex items-center justify-center gap-3 px-4 hover:bg-[#A2925F] active:bg-[#72683E] transition"
              >
                <span className="text-[16px] md:text-[20px] font-lato font-normal text-white">Learn More</span>
                <div className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="14"
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

          {/* Rectangle 3 */}
          <div className="relative flex justify-center md:justify-start mt-4 md:mt-0">
            <div className="w-full md:w-[590px] h-[90px] md:h-[112px] bg-white rounded-[15px] md:rounded-tr-[30px] md:rounded-l-none flex items-center">
              <div className="px-4 md:pl-[100px] md:ml-auto w-full md:w-auto">
                <div className="md:pr-[70px] md:max-w-[450px] flex flex-col items-center md:items-start">
                  <p className="text-lg md:text-xl lg:text-[24px] font-lato font-normal text-[#1C1C1C] text-center md:text-left">
                    Amazing luxury home waiting
                  </p>
                  <p className="text-lg md:text-xl lg:text-[24px] font-lato font-normal text-[#1C1C1C] text-center md:text-left">
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
