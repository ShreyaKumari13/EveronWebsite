'use client'

import HeroSection from '@/components/home/HeroSection'
import RatesTermsSection from '@/components/home/RatesTermsSection'
import WelcomeSection from '@/components/home/WelcomeSection'
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection'
import TestimonialSection from '@/components/TestimonialSection'
import ContactSection from '@/components/ContactSection'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <HeroSection />
        <RatesTermsSection />
        <WelcomeSection />
        <WhyChooseUsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      {/* <Footer /> */}
    </>
  )
}
