// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// interface HeaderProps {
//   variant?: 'transparent' | 'solid'
//   className?: string
// }

// const Header = ({ variant = 'transparent', className = '' }: HeaderProps) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   const textColor = variant === 'transparent' ? 'text-white' : 'text-[#00492C]'

//   return (
//     <header className={`w-full fixed top-0 left-0 right-0 z-50 ${className}`}>
//       <nav className={`w-full h-[79px] flex items-center justify-between ${
//         variant === 'transparent' 
//           ? 'bg-gradient-to-b from-black/30 to-transparent' 
//           : 'bg-gray-50'
//       }`}>
//         <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" aria-label="Everon Home">
//               <Image 
//                 src={variant === 'transparent' 
//                   ? "/images/Everon_logo_green 1.png"
//                   : "/serviceimage/Everon_logo_green 1.png"
//                 }
//                 alt="Everon Logo"
//                 width={100}
//                 height={64.08}
//                 className="object-contain"
//                 priority
//               />
//             </Link>
//           </div>
          
//           {/* Navigation Menu - Desktop */}
//           <div className="hidden lg:flex items-center justify-center flex-1">
//             <Link href="/" className={`font-lato font-light text-[20px] leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap mx-4`}>
//               Home
//             </Link>
//             <Link href="/aboutus" className={`font-lato font-light text-[20px] leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap mx-4`}>
//               About Us
//             </Link>
//             <div className="relative group">
//               <Link href="/services" className={`font-lato font-light text-[20px] leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap flex items-center mx-4`}>
//                 Services
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </Link>
//               {/* Dropdown menu for Services */}
//               <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
//                 <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                   <Link href="/services/mortgage" className="block px-4 py-2 text-sm text-[#00492C] hover:bg-gray-100" role="menuitem">Mortgage Services</Link>
//                   <Link href="/services/property" className="block px-4 py-2 text-sm text-[#00492C] hover:bg-gray-100" role="menuitem">Property Services</Link>
//                   <Link href="/services/financial" className="block px-4 py-2 text-sm text-[#00492C] hover:bg-gray-100" role="menuitem">Financial Consultancy</Link>
//                 </div>
//               </div>
//             </div>
//             <Link href="/contactus" className={`font-lato font-light text-[20px] leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap mx-4`}>
//               Contact Us
//             </Link>
//           </div>

//           {/* Search Icon */}
//           <div className="flex items-center">
//             <button 
//               className={`${textColor} hover:opacity-80 transition-opacity`}
//               aria-label="Search"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className={`lg:hidden ${textColor} ml-4`}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle mobile menu"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
//             <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
//               <Link href="/" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">Home</Link>
//               <Link href="/aboutus" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">About Us</Link>
//               <Link href="/services" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">Services</Link>
//               <Link href="/contactus" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">Contact Us</Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }

// export default Header


'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  variant?: 'transparent' | 'solid'
  className?: string
}

const Header = ({ variant = 'transparent', className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const textColor = variant === 'transparent' ? 'text-white' : 'text-[#00492C]'

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 ${className}`}>
      <nav className={`w-full h-16 md:h-[79px] flex items-center justify-between ${
        variant === 'transparent' 
          ? 'bg-gradient-to-b from-black/30 to-transparent' 
          : 'bg-gray-50'
      }`}>
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Everon Home">
              <Image 
                src={variant === 'transparent' 
                  ? "/images/Everon_logo_green 1.png"
                  : "/serviceimage/Everon_logo_green 1.png"
                }
                alt="Everon Logo"
                width={80}
                height={51}
                className="object-contain md:w-[100px] md:h-[64px]"
                priority
              />
            </Link>
          </div>
          
          {/* Navigation Menu - Desktop */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <Link href="/" className={`font-lato font-light text-base md:text-[20px] leading-normal md:leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap mx-2 md:mx-4`}>
              Home
            </Link>
            <Link href="/aboutus" className={`font-lato font-light text-base md:text-[20px] leading-normal md:leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap mx-2 md:mx-4`}>
              About Us
            </Link>
            <div className="relative group">
              <Link href="/services" className={`font-lato font-light text-base md:text-[20px] leading-normal md:leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap flex items-center mx-2 md:mx-4`}>
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Dropdown menu for Services */}
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/services/mortgage" className="block px-4 py-2 text-sm text-[#00492C] hover:bg-gray-100" role="menuitem">Mortgage Services</Link>
                  <Link href="/services/property" className="block px-4 py-2 text-sm text-[#00492C] hover:bg-gray-100" role="menuitem">Property Services</Link>
                  <Link href="/services/financial" className="block px-4 py-2 text-sm text-[#00492C] hover:bg-gray-100" role="menuitem">Financial Consultancy</Link>
                </div>
              </div>
            </div>
            <Link href="/contactus" className={`font-lato font-light text-base md:text-[20px] leading-normal md:leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap mx-2 md:mx-4`}>
              Contact Us
            </Link>
          </div>

          {/* Search Icon */}
          <div className="flex items-center">
            <button 
              className={`${textColor} hover:opacity-80 transition-opacity`}
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden ${textColor} ml-4`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
              <Link href="/" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">Home</Link>
              <Link href="/aboutus" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">About Us</Link>
              <Link href="/services" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">Services</Link>
              <Link href="/contactus" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
