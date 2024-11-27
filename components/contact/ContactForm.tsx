// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'

// const countryCodes = [
//   { code: '+1', country: 'USA/Canada' },
//   { code: '+44', country: 'UK' },
//   { code: '+91', country: 'India' },
//   { code: '+86', country: 'China' },
//   { code: '+852', country: 'Hong Kong' },
//   { code: '+81', country: 'Japan' },
//   { code: '+82', country: 'South Korea' },
//   { code: '+65', country: 'Singapore' },
//   { code: '+61', country: 'Australia' },
//   { code: '+64', country: 'New Zealand' },
// ]

// const ContactForm = () => {
//   const [selectedCountryCode, setSelectedCountryCode] = useState('+852')

//   return (
//     <div className="w-full bg-white pt-[79px] pb-[30px]">
//       <div className="w-full bg-gray-50">
//         <div className="w-full px-4">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-4">
//             {/* Left Section - Image */}
//             <div className="w-full lg:w-1/2 h-[650px]">
//               <div className="relative w-full h-full">
//                 <Image
//                   src="/contactimage/Contact Us.jpg"
//                   alt="Contact Us Building"
//                   fill
//                   className="rounded-[30px] object-cover"
//                   sizes="(max-width: 800px) 100vw, 50vw"
//                   quality={100}
//                 />
//               </div>
//             </div>

//             {/* Right Section - Contact Form */}
//             <div className="w-full lg:w-1/2 flex items-start justify-center h-full py-8">
//               <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-sm">
//                 <h1 className="text-[32px] font-lato font-[700] text-[#1C1C1C] leading-[40px] text-center mb-3">Let&apos;s Get In Touch</h1>
//                 <p className="text-[16px] font-lato text-[#1C1C1C] text-center mb-6">
//                   or just reach out manually to <span className="font-semibold">info@everonmortgage.com</span>
//                 </p>
//                 <form className="space-y-4">
//                   {/* Name Field */}
//                   <div>
//                     <label htmlFor="name" className="block text-[16px] font-lato text-[#1C1C1C] mb-1">
//                       Name:
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         id="name"
//                         placeholder="Enter your name"
//                         className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
//                       />
//                       <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                           <path d="M4 5a3 3 0 116 0 3 3 0 01-6 0zM2 13a8 8 0 0116 0H2z" />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>

//                   {/* Email Field */}
//                   <div>
//                     <label htmlFor="email" className="block text-[16px] font-lato text-[#1C1C1C] mb-1">
//                       Email Address:
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="email"
//                         id="email"
//                         placeholder="Enter your email address"
//                         className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
//                       />
//                       <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                           <path d="M2.94 6.94A1.5 1.5 0 014.5 6h11a1.5 1.5 0 011.56.94L10 11 2.94 6.94z" />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>

//                   {/* Phone Field */}
//                   <div>
//                     <label htmlFor="phone" className="block text-[16px] font-lato text-[#1C1C1C] mb-1">
//                       Phone Number:
//                     </label>
//                     <div className="flex gap-2">
//                       <div className="relative w-32">
//                         <select
//                           value={selectedCountryCode}
//                           onChange={(e) => setSelectedCountryCode(e.target.value)}
//                           className="w-full pl-3 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154] appearance-none bg-white"
//                         >
//                           {countryCodes.map((country) => (
//                             <option key={country.code} value={country.code}>
//                               {country.code} {country.country}
//                             </option>
//                           ))}
//                         </select>
//                         <span className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
//                           <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                           </svg>
//                         </span>
//                       </div>
//                       <div className="relative flex-1">
//                         <input
//                           type="tel"
//                           id="phone"
//                           placeholder="Enter your phone number"
//                           className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
//                         />
//                         <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                           </svg>
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Message Field */}
//                   <div>
//                     <label htmlFor="message" className="block text-[16px] font-lato text-[#1C1C1C] mb-1">
//                       Message:
//                     </label>
//                     <div className="relative">
//                       <textarea
//                         id="message"
//                         rows={3}
//                         placeholder="Write your message here..."
//                         className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
//                       ></textarea>
//                       <span className="absolute top-2 left-0 pl-3 flex items-start text-gray-400">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     className="w-full bg-[#004400] text-white py-2 rounded-lg hover:bg-[#003300] transition-colors font-lato mt-4"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactForm

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
    <div className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-8">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]">
              <div className="relative w-full h-full">
                <Image
                  src="/contactimage/Contact Us.jpg"
                  alt="Contact Us Building"
                  fill
                  className="rounded-[30px] object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                />
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-full lg:w-1/2 flex items-start justify-center h-full py-8">
              <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-sm">
                <h1 className="text-2xl sm:text-3xl md:text-[32px] font-lato font-bold text-[#1C1C1C] leading-tight text-center mb-3">Let&apos;s Get In Touch</h1>
                <p className="text-sm sm:text-base md:text-[16px] font-lato text-[#1C1C1C] text-center mb-6">
                  or just reach out manually to <span className="font-semibold">info@everonmortgage.com</span>
                </p>
                <form className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base md:text-[16px] font-lato text-[#1C1C1C] mb-1">
                      Name:
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
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
                    <label htmlFor="email" className="block text-sm sm:text-base md:text-[16px] font-lato text-[#1C1C1C] mb-1">
                      Email Address:
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
                      />
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.94 6.94A1.5 1.5 0 014.5 6h11a1.5 1.5 0 011.56.94L10 11 2.94 6.94z" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm sm:text-base md:text-[16px] font-lato text-[#1C1C1C] mb-1">
                      Phone Number:
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative w-full sm:w-32">
                        <select
                          value={selectedCountryCode}
                          onChange={(e) => setSelectedCountryCode(e.target.value)}
                          className="w-full pl-3 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154] appearance-none bg-white"
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
                          placeholder="Enter your phone number"
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
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
                    <label htmlFor="message" className="block text-sm sm:text-base md:text-[16px] font-lato text-[#1C1C1C] mb-1">
                      Message:
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Write your message here..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E8154] focus:border-[#8E8154]"
                      ></textarea>
                      <span className="absolute top-2 left-0 pl-3 flex items-start text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#004400] text-white py-2 rounded-lg hover:bg-[#003300] transition-colors font-lato mt-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

