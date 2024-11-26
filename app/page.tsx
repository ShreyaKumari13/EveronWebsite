import HeroSection from '@/components/home/HeroSection'
import RatesTermsSection from '@/components/home/RatesTermsSection'
import WelcomeSection from '@/components/home/WelcomeSection'
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection'
import TestimonialSection from '@/components/TestimonialSection'
import ContactSection from '@/components/ContactSection'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Header />
      <HeroSection />
      <RatesTermsSection />
      <WelcomeSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  )
}
