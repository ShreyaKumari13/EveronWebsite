import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react'
import React from 'react'
import AnimatedButton from './ui/AnimatedButton'

const Footer = () => {
  return (
    <footer className="bg-[#01321F] text-white py-8 md:py-16">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-8 md:mb-12">
          {/* Logo and Address Column */}
          <div className="md:col-span-3 md:-mt-14 flex flex-col items-center text-center">
            <Link href="/" aria-label="Everon Home" className="block mb-4 md:mb-6">
              <Image
                src="/images/Jo jean main logo dark 2.png"
                alt="Everon Logo"
                width={160}
                height={60}
                className="brightness-0 invert"
                priority
              />
            </Link>
            <address className="not-italic text-sm md:text-[16px] font-lato leading-normal md:leading-[24px] md:-mt-5">
              Room 1314A, 13/F, Lippo Sun<br />
              Plaza, 28 Canton Road, Tsim<br />
              Sha Tsui, Kowloon
            </address>
          </div>

          {/* Navigation Links - First Column */}
          <div className="md:col-span-3 flex flex-col items-center w-full">
            <div className="flex flex-col h-full justify-start space-y-4 md:space-y-[35px] text-center w-full">
              <Link href="/" className="block text-sm md:text-[16px] font-lato hover:text-[#8E8154] transition-colors h-[24px] flex items-center justify-center">
                Home
              </Link>
              <Link href="/aboutus" className="block text-sm md:text-[16px] font-lato hover:text-[#8E8154] transition-colors h-[24px] flex items-center justify-center">
                About
              </Link>
              <Link href="/signup" className="block text-sm md:text-[16px] font-lato hover:text-[#8E8154] transition-colors h-[24px] flex items-center justify-center">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Navigation Links - Second Column */}
          <div className="md:col-span-3 flex flex-col items-center w-full">
            <div className="flex flex-col h-full justify-start space-y-4 md:space-y-[35px] text-center w-full">
              <Link href="/services" className="block text-sm md:text-[16px] font-lato hover:text-[#8E8154] transition-colors h-[24px] flex items-center justify-center">
                Services
              </Link>
              <Link href="/contactus" className="block text-sm md:text-[16px] font-lato hover:text-[#8E8154] transition-colors h-[24px] flex items-center justify-center">
                Contact
              </Link>
              <Link href="/privacy" className="block text-sm md:text-[16px] font-lato hover:text-[#8E8154] transition-colors h-[24px] flex items-center justify-center">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-3 flex flex-col items-center">
            <h3 className="text-lg md:text-[20px] font-lato font-bold mb-4 md:mb-6 text-center">Connect With Us</h3>
            <div className="flex gap-4 md:gap-6 justify-center mb-4 md:mb-[35px]">
              <Link 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8E8154] transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-6 h-6 md:w-8 md:h-8" />
              </Link>
              <Link 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8E8154] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6 md:w-8 md:h-8" />
              </Link>
              <Link 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8E8154] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6 md:w-8 md:h-8" />
              </Link>
              <Link 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8E8154] transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
              </Link>
            </div>
            <div className="h-[24px] flex items-center justify-center w-full">
              <Link href="https://klyngon.com/everonprop_erp/authentication" className="cursor-pointer w-full md:w-auto" target="_blank" rel="noopener noreferrer">
                <AnimatedButton
                  text="Visit our Property ERP link"
                  variant="primary"
                  className="w-full md:w-[280px] px-2 py-3 text-sm md:text-[16px] font-lato font-medium whitespace-nowrap"
                  showArrow={false}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-4 md:pt-8 text-center">
          <p className="text-sm md:text-[16px] font-lato"> &copy; Everon Property & Mortgage Consultancy Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
