'use client'

import { useState } from 'react'
import Image from 'next/image'

const countryCodes = [
  { code: '+1', country: 'USA/Canada' },
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'India' },
  { code: '+86', country: 'China' },
  { code: '+852', country: 'Hong Kong' },
  { code: '+81', country: 'Japan' },
  { code: '+82', country: 'South Korea' },
  { code: '+65', country: 'Singapore' },
  { code: '+61', country: 'Australia' },
  { code: '+64', country: 'New Zealand' },
]

const ContactForm = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('+852')

  return (
    <div className="w-full bg-white pt-[79px]">
      <div className="w-full bg-gray-50">
        <div className="w-full px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-6 pb-12">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/contactimage/image (9).png"
                alt="Contact Us Building"
                width={716}
                height={847}
                className="rounded-[20px_0_0_0] object-cover w-full "
                style={{ gap: "0px" }}
              />
            </div>


            {/* Right Section - Contact Form */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[32px] font-lato font-[700] text-[#1C1C1C] leading-[40px] mb-3">Let's Get In Touch.</h1>
              <p className="text-[16px] font-lato text-[#1C1C1C] mb-4">
                or just reach out manually to <span className="font-semibold">info@everonmortgage.com</span>
              </p>
              <form className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-[16px] font-lato text-[#1C1C1C] mb-1">
                    Name:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
                    />
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 5a3 3 0 116 0 3 3 0 01-6 0zM2 13a8 8 0 0116 0H2z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-[16px] font-lato text-[#1C1C1C] mb-1">
                    Email Address:
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
                    />
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.94 6.94A1.5 1.5 0 014.5 6h11a1.5 1.5 0 011.56.94L10 11 2.94 6.94z" />
                        <path d="M2.05 8.35l7.94 5.8a1 1 0 001.02 0l7.94-5.8A1.5 1.5 0 0116.5 14h-13a1.5 1.5 0 01-1.45-1.65z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-[16px] font-lato text-[#1C1C1C] mb-1">
                    Phone Number:
                  </label>
                  <div className="flex gap-2">
                    <div className="relative w-32">
                      <select
                        value={selectedCountryCode}
                        onChange={(e) => setSelectedCountryCode(e.target.value)}
                        className="w-full pl-3 pr-8 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154] appearance-none bg-white"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.code} {country.country}
                          </option>
                        ))}
                      </select>
                      <span className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter phone number"
                        className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
                      />
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-[16px] font-lato text-[#1C1C1C] mb-1">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter your main text here"
                    rows={4}
                    className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154] resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <button type="submit" className="bg-[#004400] text-white px-6 py-2 text-[16px] font-medium rounded-lg inline-flex items-center space-x-2">
                    <span>Submit Form</span>
                    <Image
                      src="/images/Group 5.png"
                      alt="Arrow Right"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
