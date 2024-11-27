import ServiceHero from '@/components/services/ServiceHero'
import FinancialService from '@/components/services/FinancialService'
import MortageService from '@/components/services/MortageService'
import PropertyService from '@/components/services/PropertyService'
import TestimonialSection from '@/components/TestimonialSection'
import ContactSection from '@/components/ContactSection'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero />
      <PropertyService />
      <MortageService />
      <FinancialService />
      <TestimonialSection />
      <ContactSection />

    </main>
  )
}
