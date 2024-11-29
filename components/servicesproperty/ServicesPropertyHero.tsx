'use client'

import Image from 'next/image'
import Header from '../Header'

const ServicesPropertyHero = () => {
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/serviceproperty/1.0_Property Consultancy Services Banner Image.jpg"
          alt="Property Services background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>
      
      {/* Header */}
      <Header variant="transparent" />

      {/* Hero Content */}
      <div className="relative z-10 w-full flex items-center justify-center -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-12">
        <div className="container mx-auto px-3 sm:px-4 flex items-center justify-center">
          <div className="w-full max-w-[901px] bg-[#1C1C1C59] backdrop-blur-sm rounded-[10px] sm:rounded-[15px] 
                         py-4 sm:py-6 md:py-12 lg:py-16 
                         px-3 sm:px-4 md:px-8 lg:px-12 
                         border border-white/20">
            <div className="text-white text-center flex flex-col items-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                           font-bold 
                           mb-2 sm:mb-3 md:mb-4 
                           w-full text-center
                           leading-tight sm:leading-tight md:leading-tight
                           tracking-normal sm:tracking-wide
                           px-2 sm:px-4">
                Property Consultancy Services
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPropertyHero