'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../lib/i18n/LanguageContext'
import { translations } from '../lib/i18n/translations'

interface HeaderProps {
  variant?: 'transparent' | 'solid'
  className?: string
}

const Header = ({ variant = 'transparent', className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const router = useRouter()
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const textColor = variant === 'transparent' ? 'text-white' : 'text-[#00492C]'

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) {
      setIsServiceDropdownOpen(false)
    }
  }

  const handleServicesClick = (e: React.MouseEvent) => {
    // Only prevent default if clicking the dropdown arrow
    if ((e.target as HTMLElement).tagName === 'svg' || (e.target as HTMLElement).tagName === 'path') {
      e.preventDefault()
      setIsServiceDropdownOpen(!isServiceDropdownOpen)
    }
  }

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
              {t.home}
            </Link>
            <Link href="/aboutus" className={`font-lato font-light text-base md:text-[20px] leading-normal md:leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap mx-2 md:mx-4`}>
              {t.about}
            </Link>
            <div className="relative group">
              <Link href="/services" className={`font-lato font-light text-base md:text-[20px] leading-normal md:leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap flex items-center mx-2 md:mx-4`}>
                {t.services}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} onClick={(e) => e.preventDefault()}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Dropdown menu for Services - Desktop */}
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/serviceproperty" className="block px-4 py-2 text-sm text-[#00492C] hover:bg-gray-100" role="menuitem">
                    {t.propertyConsultancy}
                  </Link>
                  <Link href="/mortgage" className="block px-4 py-2 text-sm text-[#00492C] hover:bg-gray-100" role="menuitem">
                    {t.mortgagePlanning}
                  </Link>
                  <Link href="/financialplanning" className="block px-4 py-2 text-sm text-[#00492C] hover:bg-gray-100" role="menuitem">
                    {t.financialPlanning}
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contactus" className={`font-lato font-light text-base md:text-[20px] leading-normal md:leading-[24px] ${textColor} hover:font-bold active:font-bold whitespace-nowrap mx-2 md:mx-4`}>
              {t.contact}
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center">
            <LanguageSwitcher variant={variant} />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden ${textColor} ml-4`}
            onClick={toggleMobileMenu}
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
              <Link href="/" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">
                {t.home}
              </Link>
              <Link href="/aboutus" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">
                {t.about}
              </Link>
              {/* Services with dropdown - Mobile */}
              <div>
                <div className="flex items-center justify-between">
                  <Link href="/services" className="flex-1 py-2 px-4 text-[#00492C] hover:bg-gray-100">
                    {t.services}
                  </Link>
                  <button 
                    onClick={handleServicesClick}
                    className="p-4 text-[#00492C] hover:bg-gray-100"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-transform duration-300 ${isServiceDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {isServiceDropdownOpen && (
                  <div className="bg-gray-50">
                    <Link href="/serviceproperty" className="block py-2 px-8 text-sm text-[#00492C] hover:bg-gray-100">
                      {t.propertyConsultancy}
                    </Link>
                    <Link href="/mortgage" className="block py-2 px-8 text-sm text-[#00492C] hover:bg-gray-100">
                      {t.mortgagePlanning}
                    </Link>
                    <Link href="/financialplanning" className="block py-2 px-8 text-sm text-[#00492C] hover:bg-gray-100">
                      {t.financialPlanning}
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/contactus" className="block py-2 px-4 text-[#00492C] hover:bg-gray-100">
                {t.contact}
              </Link>
              <div className="py-2 px-4">
                <LanguageSwitcher variant="solid" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header