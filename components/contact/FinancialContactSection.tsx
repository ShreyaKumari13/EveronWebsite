// 'use client'

// const FinancialContactSection = () => {
//   return (
//     <section className="w-full bg-gray-50 pt-10 pb-20">
//       <div className="max-w-[1280px] mx-auto px-4">
//         {/* Title Section */}
//         <div className="text-center mb-8 pt-6 pb-12">
//           <button className="mb-4 border border-[#1C1C1C] px-6 py-2 rounded-lg text-[#1C1C1C] hover:bg-gray-100 transition-colors font-lato">
//             Get in Touch
//           </button>
//           <h2 className="text-[28px] md:text-[32px] font-bold text-[#1C1C1C] mb-3 font-lato">
//             Let&apos;s Work Together to Solve Your Financial Challenges
//           </h2>
//           <p className="text-[16px] text-gray-600 font-lato">
//             or just reach out manually to <span className="font-semibold">info@everonmortgage.com</span>
//           </p>
//         </div>

//         {/* Contact Methods Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//           {/* Call Us */}
//           <div className="flex flex-col items-center text-center">
//             <div className="w-14 h-14 mb-3 flex items-center justify-center bg-[#004400] text-white rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-bold text-[#1C1C1C] mb-1.5 font-lato">Call Us Directly</h3>
//             <p className="text-gray-600 mb-1.5 font-lato text-sm">Available during working hours</p>
//             <p className="text-[#1C1C1C] font-semibold font-lato">6501 6890</p>
//             <p className="text-[#1C1C1C] font-semibold font-lato">2712 8382</p>
//           </div>

//           {/* Email Support */}
//           <div className="flex flex-col items-center text-center">
//             <div className="w-14 h-14 mb-3 flex items-center justify-center bg-[#004400] text-white rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-bold text-[#1C1C1C] mb-1.5 font-lato">Email Support</h3>
//             <p className="text-gray-600 mb-1.5 font-lato text-sm">Our team can respond in real time</p>
//             <p className="text-[#1C1C1C] font-semibold font-lato">info@everonmortgage.com</p>
//           </div>

//           {/* Visit Our Office */}
//           <div className="flex flex-col items-center text-center">
//             <div className="w-14 h-14 mb-3 flex items-center justify-center bg-[#004400] text-white rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-bold text-[#1C1C1C] mb-1.5 font-lato">Visit Our Office</h3>
//             <p className="text-gray-600 mb-1.5 font-lato text-sm">Visit our location in real life</p>
//             <p className="text-[#1C1C1C] font-semibold font-lato">Room 1314A, 13/F, Lippo Sun Plaza,</p>
//             <p className="text-[#1C1C1C] font-semibold font-lato">28 Canton Road, Tsim Sha Tsui, Kowloon</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FinancialContactSection

'use client'

const FinancialContactSection = () => {
  return (
    <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <button className="mb-4 border border-[#1C1C1C] px-4 sm:px-6 py-2 rounded-lg text-[#1C1C1C] hover:bg-gray-100 transition-colors font-lato text-sm sm:text-base">
            Get in Touch
          </button>
          <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-[#1C1C1C] mb-3 font-lato">
            Let&apos;s Work Together to Solve Your Financial Challenges
          </h2>
          <p className="text-sm sm:text-base md:text-[16px] text-gray-600 font-lato">
            or just reach out manually to <span className="font-semibold">info@everonmortgage.com</span>
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Call Us */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 flex items-center justify-center bg-[#004400] text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#1C1C1C] mb-1.5 font-lato">Call Us Directly</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-1.5 font-lato">Available during working hours</p>
            <p className="text-sm sm:text-base text-[#1C1C1C] font-semibold font-lato">6501 6890</p>
            <p className="text-sm sm:text-base text-[#1C1C1C] font-semibold font-lato">2712 8382</p>
          </div>

          {/* Email Support */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 flex items-center justify-center bg-[#004400] text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#1C1C1C] mb-1.5 font-lato">Email Support</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-1.5 font-lato">Our team can respond in real time</p>
            <p className="text-sm sm:text-base text-[#1C1C1C] font-semibold font-lato">info@everonmortgage.com</p>
          </div>

          {/* Visit Our Office */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 flex items-center justify-center bg-[#004400] text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#1C1C1C] mb-1.5 font-lato">Visit Our Office</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-1.5 font-lato">Visit our location in real life</p>
            <p className="text-sm sm:text-base text-[#1C1C1C] font-semibold font-lato">Room 1314A, 13/F, Lippo Sun Plaza,</p>
            <p className="text-sm sm:text-base text-[#1C1C1C] font-semibold font-lato">28 Canton Road, Tsim Sha Tsui, Kowloon</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancialContactSection

