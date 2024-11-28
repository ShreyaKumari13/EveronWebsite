// import Image from 'next/image';
// import React from 'react';

// const PropertyService = () => {
//   return (
//     <div className="relative w-full">
//       <div className="relative w-full max-w-[1280px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] h-[500px]">
//           {/* Left Side - Image */}
//           <div className="relative flex justify-start items-start pt-[80px] pl-[100px] h-full">
//             <div className="relative w-[600px] h-[360px]">
//               <Image
//                 src="/serviceimage/Property.jpg"
//                 alt="Property Consultancy Services"
//                 fill
//                 className="rounded-[30px] object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="relative flex flex-col pl-[100px] pt-[80px] h-full">
//             <div className="flex flex-col h-full">
//               <div>
//                 <div className="flex items-center">
//                   <div className="relative w-[50px] h-[50px] mr-4">
//                     <Image
//                       src="/serviceimage/home.png"
//                       alt="Home Icon"
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>
//                 <p className="w-[474px] text-[40px] font-lato font-[700] text-[#1C1C1C] leading-[48px] text-left mt-4">
//                   Property Consultancy Services
//                 </p>
//                 <p className="w-[511px] pt-4 text-[24px] font-lato font-[400] text-[#1C1C1C] leading-[28.8px] text-left">
//                   Whether you&apos;re buying, selling, or investing, our experts provide tailored advice to help you make informed decisions. 
//                   We analyze market trends and craft strategies to maximize your returns while minimizing risks.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyService;


import Image from 'next/image';
import React from 'react';

const PropertyService = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[10px] md:h-[500px]">
          {/* Left Side - Image */}
          <div className="relative flex justify-center md:justify-start items-start pt-8 md:pt-[80px] md:pl-[100px] h-full">
            <div className="relative w-full max-w-[600px] h-[240px] md:h-[360px]">
              <Image
                src="/serviceimage/Property.jpg"
                alt="Property Consultancy Services"
                fill
                className="rounded-[30px] object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="relative flex flex-col px-4 md:pl-[100px] pt-8 md:pt-[80px] h-full">
            <div className="flex flex-col h-full">
              <div>
                <div className="flex items-center">
                  <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] mr-4">
                    <Image
                      src="/serviceimage/home.png"
                      alt="Home Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="w-full md:w-[474px] text-3xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left mt-4">
                  Property Consultancy Services
                </p>
                <p className="w-full md:w-[511px] pt-4 text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left">
                  Whether you&apos;re buying, selling, or investing, our experts provide tailored advice to help you make informed decisions. 
                  We analyze market trends and craft strategies to maximize your returns while minimizing risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyService;

