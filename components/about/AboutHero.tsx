'use client'

import Image from 'next/image'
import Header from '../Header'

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/aboutimage/image (2).png"
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
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="w-[901px] bg-[#1C1C1C59] rounded-[15px] p-12 border border-white/20">
            <div className="text-white text-center flex flex-col items-center">
              <h1 className="text-5xl font-bold mb-6 w-full text-center">
                Find Your Dream Property Here
              </h1>
              <p className="text-2xl mb-4 max-w-[80%] whitespace-nowrap text-center">
                Property & Mortgage Consultancy in Hong Kong | Everon
              </p>
              <div className="font-lato text-[24px] leading-[28.8px] mb-8 font-normal text-center w-full">
                <p className="mx-auto w-[600px]">Everon Property & Mortgage Consultancy Limited offers tailored</p>
                <p className="mx-auto w-[500px]">property, mortgage, and financial services to individuals and</p>
                <p className="mx-auto w-[350px]">corporations in Hong Kong.</p>
              </div>
              <div className="flex items-center justify-center">
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
          </div>
        </div>
      </div>
    </section>
  )
}
