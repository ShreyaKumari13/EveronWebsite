// import Image from 'next/image'

// const WhyChooseUsSection = () => {
//   const features = [
//     {
//       title: "Tailored Solutions",
//       description: "We understand that every client is unique, and so are their financial needs."
//     },
//     {
//       title: "Experienced Team",
//       description: "Our team has over 10 years of expertise in property, mortgage, and financial consultancy."
//     },
//     {
//       title: "Comprehensive Services",
//       description: "From property investments to mortgage planning, we've got you covered."
//     }
//   ]

//   return (
//     <section className="relative w-full py-16" style={{ backgroundColor: '#B3925533' }}>
//       <div className="relative w-full max-w-[1280px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Column - Content */}
//           <div className="relative pl-[100px]">
//             <h2 className="text-3xl md:text-[45px] font-lato font-extrabold text-[#1C1C1C] mb-[28px]">
//               WHY CHOOSE US?
//             </h2>
//             <div className="w-[416px]">
//               <div className="space-y-8">
//                 {features.map((feature, index) => (
//                   <div key={index} className="space-y-2">
//                     <h3 className="font-lato text-[26px] font-semibold leading-[31.2px] text-[#1C1C1C] flex items-center">
//                       <span className="w-2 h-2 bg-[#1C1C1C] rounded-full mr-4"></span>
//                       {feature.title}
//                     </h3>
//                     <p className="font-lato text-[24px] font-normal leading-[28.8px] text-[#1C1C1C] ml-6">
//                       {feature.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Images */}
//           <div className="relative grid grid-cols-2 gap-4">
//             <div className="relative flex flex-col space-y-4">
//               <div className="relative w-full h-[241px] overflow-hidden">
//                 <Image
//                   src="/images/Why choose us 1.jpg"
//                   alt="Why Choose Us Image 1"
//                   fill
//                   className="rounded-[30px] object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   quality={100}
//                 />
//               </div>
//               <div className="relative w-full h-[241px] overflow-hidden">
//                 <Image
//                   src="/images/Why choose us 2.jpg"
//                   alt="Why Choose Us Image 2"
//                   fill
//                   className="rounded-[30px] object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   quality={100}
//                 />
//               </div>
//             </div>
//             <div className="relative h-[498px] overflow-hidden">
//               <Image
//                 src="/images/Why choose us 3.jpg"
//                 alt="Why Choose Us Image 3"
//                 fill
//                 className="rounded-[30px] object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 quality={100}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default WhyChooseUsSection

import Image from 'next/image'

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Tailored Solutions",
      description: "We understand that every client is unique, and so are their financial needs."
    },
    {
      title: "Experienced Team",
      description: "Our team has over 10 years of expertise in property, mortgage, and financial consultancy."
    },
    {
      title: "Comprehensive Services",
      description: "From property investments to mortgage planning, we've got you covered."
    }
  ]

  return (
    <section className="relative w-full py-8 sm:py-16" style={{ backgroundColor: '#B3925533' }}>
      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Content */}
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-[45px] font-lato font-extrabold text-[#1C1C1C] mb-6 sm:mb-[28px]">
              WHY CHOOSE US?
            </h2>
            <div className="w-full sm:w-[416px]">
              <div className="space-y-6 sm:space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-lato text-xl sm:text-[26px] font-semibold leading-tight sm:leading-[31.2px] text-[#1C1C1C] flex items-center">
                      <span className="w-2 h-2 bg-[#1C1C1C] rounded-full mr-4"></span>
                      {feature.title}
                    </h3>
                    <p className="font-lato text-base sm:text-[24px] font-normal leading-relaxed sm:leading-[28.8px] text-[#1C1C1C] ml-6">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
            <div className="relative flex flex-col space-y-4">
              <div className="relative w-full h-[200px] sm:h-[241px] overflow-hidden">
                <Image
                  src="/images/Why choose us 1.jpg"
                  alt="Why Choose Us Image 1"
                  fill
                  className="rounded-[30px] object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={100}
                />
              </div>
              <div className="relative w-full h-[200px] sm:h-[241px] overflow-hidden">
                <Image
                  src="/images/Why choose us 2.jpg"
                  alt="Why Choose Us Image 2"
                  fill
                  className="rounded-[30px] object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={100}
                />
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[498px] overflow-hidden mt-4 sm:mt-0">
              <Image
                src="/images/Why choose us 3.jpg"
                alt="Why Choose Us Image 3"
                fill
                className="rounded-[30px] object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection

