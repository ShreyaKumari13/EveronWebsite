'use client'

import AboutHero from '@/components/about/AboutHero'
import OurExpertise from '@/components/about/OurExpertise'
import OurMission from '@/components/about/OurMission'
import WhoWeAre from '@/components/about/WhoWeAre'
import Header from '@/components/Header'
import TestimonialSection from '@/components/TestimonialSection'
import ContactSection from '@/components/ContactSection'

export default function AboutPage() {
  return (
    <main className="bg-gray-50">
      <Header />
      <AboutHero />
      <WhoWeAre />
      <OurMission />
      <OurExpertise />
      <TestimonialSection />
      <ContactSection />
    </main>
  )
}
