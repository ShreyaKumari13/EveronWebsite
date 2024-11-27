'use client'

import Image from 'next/image'

const PropertyService = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-12">
          <div className="w-full lg:w-1/2">
            <Image
              src="/serviceimage/image (1).png"
              alt="Property Service"
              width={716}
              height={847}
              className="rounded-[20px] object-cover w-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-[40px] font-lato font-[700] text-[#1C1C1C] leading-[48px] mb-6">
              Property Mortgage Solutions
            </h1>
            <p className="text-[16px] font-lato text-[#1C1C1C] mb-8">
              We provide comprehensive property mortgage solutions tailored to your needs. Our experienced team will guide you through the entire process, from application to approval.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#004400] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-lato font-[600] text-[#1C1C1C] mb-2">Residential Property Mortgages</h3>
                  <p className="text-[16px] font-lato text-[#1C1C1C]">
                    Whether you&apos;re a first-time buyer or looking to refinance, we&apos;ll help you find the best mortgage rates and terms.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#004400] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-lato font-[600] text-[#1C1C1C] mb-2">Commercial Property Mortgages</h3>
                  <p className="text-[16px] font-lato text-[#1C1C1C]">
                    Secure financing for your business property with our competitive commercial mortgage solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#004400] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-lato font-[600] text-[#1C1C1C] mb-2">Investment Property Mortgages</h3>
                  <p className="text-[16px] font-lato text-[#1C1C1C]">
                    Get expert advice on financing your investment properties and maximizing your returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyService
