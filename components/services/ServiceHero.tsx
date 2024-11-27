// 'use client'

// import Image from 'next/image'
// import Header from '../Header'

// const ServiceHero = () => {
//   return (
//     <section className="relative w-full min-h-[85vh] flex items-center">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image 
//           src="/serviceimage/Banner.jpg"
//           alt="Services background"
//           fill
//           className="object-cover"
//           priority
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
//       </div>
      
//       {/* Header */}
//       <Header variant="transparent" />

//       {/* Hero Content */}
//       <div className="relative z-10 w-full flex items-center justify-center -mt-12">
//         <div className="container mx-auto px-4 flex items-center justify-center">
//           <div className="w-[901px] bg-[#1C1C1C59] rounded-[15px] py-8 px-12 border border-white/20">
//             <div className="text-white text-center flex flex-col items-center">
//               <h1 className="text-5xl font-bold mb-4 w-full text-center">
//                 Our Services
//               </h1>
//               <p className="text-2xl mb-3 whitespace-nowrap text-center">
//                 Comprehensive Consultancy for Property, Mortgage, and Finance
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServiceHero
'use client'

import Image from 'next/image'
import Header from '../Header'

const ServiceHero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/serviceimage/Banner.jpg"
          alt="Services background"
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
      <div className="relative z-10 w-full flex items-center justify-center mt-16 md:mt-0">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="w-full max-w-[901px] bg-[#1C1C1C59] rounded-[15px] py-6 md:py-8 px-4 md:px-12 border border-white/20">
            <div className="text-white text-center flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 w-full text-center">
                Our Services
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-3 text-center">
                Comprehensive Consultancy for Property, Mortgage, and Finance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero

