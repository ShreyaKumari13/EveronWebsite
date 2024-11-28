// import Image from 'next/image';
// import React from 'react';

// const WelcomeSection = () => {
//   return (
//     <div className="relative w-full py-16">
//       <div className="relative w-full max-w-[1280px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] h-[575px]">
//           {/* Left Side - Content */}
//           <div className="relative flex flex-col pl-[100px] h-full">
//             <div className="flex flex-col h-full">
//               <div>
//                 <div className="flex flex-col space-y-2 mb-8">
//                   <h2 className="text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px] whitespace-nowrap">
//                     Welcome to Everon Property & Mortgage
//                   </h2>
//                   <h2 className="text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px]">
//                     Consultancy Limited
//                   </h2>
//                 </div>
//                 <p className="w-[474px] text-[32px] font-lato font-medium text-[#1C1C1C] leading-[38.4px]">
//                   Your Trusted Partner for Property & Financial Solutions
//                 </p>
//                 <p className="w-[511px] mt-8 text-[24px] font-lato text-[#1C1C1C] leading-[28.8px]">
//                   At Everon Property & Mortgage Consultancy Limited, we specialize in offering personalized property, mortgage, and financial consultancy services in Hong Kong. With a team of seasoned professionals boasting over a decade of experience in the banking and financial sectors, we are dedicated to solving your personal and corporate financial challenges.
//                 </p>
//               </div>

//               {/* Learn More Button */}
//               <div className="mt-auto">
//                 <button className="bg-[#004400] text-white px-6 py-3 text-[16px] md:text-[20px] font-medium rounded-lg inline-flex items-center space-x-2">
//                   <span>Learn More</span>
//                   <Image
//                     src="/images/Group 5.png"
//                     alt="Arrow Right"
//                     width={24}
//                     height={24}
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Image */}
//           <div className="relative flex justify-center items-end h-full">
//             <div className="relative w-[637px] h-[498px] overflow-hidden">
//               <Image
//                 src="/images/Welcome to image.jpg"
//                 alt="House"
//                 fill
//                 className="rounded-[30px] object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 quality={100}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomeSection;
// import Image from 'next/image';
// import React from 'react';

// const WelcomeSection = () => {
//   return (
//     <div className="relative w-full py-8 sm:py-16">
//       <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[10px]">
//           {/* Left Side - Content */}
//           <div className="relative flex flex-col h-full pl-[80px]">
//             <div className="flex flex-col h-full">
//               <div>
//                 <div className="flex flex-col space-y-2 mb-4 sm:mb-8">
//                 <h2 className="text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-[54px] whitespace-nowrap">
//                     Welcome to Everon Property & Mortgage
//                   </h2>
//                   <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight sm:leading-[54px]">
//                     Consultancy Limited
//                   </h2>
//                 </div>
//                 <p className="w-full sm:w-[474px] text-2xl sm:text-[32px] font-lato font-medium text-[#1C1C1C] leading-tight sm:leading-[38.4px] mb-4 sm:mb-8">
//                   Your Trusted Partner for Property & Financial Solutions
//                 </p>
//                 <p className="w-full sm:w-[511px] text-lg sm:text-[24px] font-lato text-[#1C1C1C] leading-relaxed sm:leading-[28.8px]">
//                   At Everon Property & Mortgage Consultancy Limited, we specialize in offering personalized property, mortgage, and financial consultancy services in Hong Kong. With a team of seasoned professionals boasting over a decade of experience in the banking and financial sectors, we are dedicated to solving your personal and corporate financial challenges.
//                 </p>
//               </div>

//               {/* Learn More Button */}
//               <div className="mt-8 lg:mt-7">
//                 <button className="bg-[#004400] text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-[20px] font-medium rounded-lg inline-flex items-center space-x-2">
//                   <span>Learn More</span>
//                   <Image
//                     src="/images/Group 5.png"
//                     alt="Arrow Right"
//                     width={24}
//                     height={24}
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Image */}
//           <div className="relative flex justify-center items-end h-full lg:mt-5">
//             <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[498px] lg:w-[637px] overflow-hidden">
//               <Image
//                 src="/images/Welcome to image.jpg"
//                 alt="House"
//                 fill
//                 className="rounded-[30px] object-cover"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 637px"
//                 quality={100}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomeSection;

import Image from 'next/image';
import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="relative w-full py-8 md:py-16">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[10px]">
          {/* Left Side - Content */}
          <div className="relative flex flex-col h-full md:pl-[80px]">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex flex-col space-y-2 mb-4 md:mb-8">
                  <h2 className="text-3xl md:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px]">
                    Welcome to Everon Property & Mortgage
                  </h2>
                  <h2 className="text-2xl md:text-[45px] font-lato font-extrabold text-[#1C1C1C] leading-tight md:leading-[54px]">
                    Consultancy Limited
                  </h2>
                </div>
                <p className="w-full md:w-[474px] text-xl md:text-[32px] font-lato font-medium text-[#1C1C1C] leading-tight md:leading-[38.4px] mb-4 md:mb-8">
                  Your Trusted Partner for Property & Financial Solutions
                </p>
                <p className="w-full md:w-[511px] text-base md:text-[24px] font-lato text-[#1C1C1C] leading-relaxed md:leading-[28.8px]">
                  At Everon Property & Mortgage Consultancy Limited, we specialize in offering personalized property, mortgage, and financial consultancy services in Hong Kong. With a team of seasoned professionals boasting over a decade of experience in the banking and financial sectors, we are dedicated to solving your personal and corporate financial challenges.
                </p>
              </div>

              {/* Learn More Button */}
              <div className="mt-8 lg:mt-7">
                <button className="bg-[#004400] text-white px-4 md:px-6 py-2 md:py-3 text-base md:text-[20px] font-medium rounded-lg inline-flex items-center space-x-2">
                  <span>Learn More</span>
                  <Image
                    src="/images/Group 5.png"
                    alt="Arrow Right"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center items-end h-full lg:mt-5">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[498px] lg:w-[637px] overflow-hidden">
              <Image
                src="/images/Welcome to image.jpg"
                alt="House"
                fill
                className="rounded-[30px] object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 637px"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

