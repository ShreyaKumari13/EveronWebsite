// import ServiceHero from '@/components/services/ServiceHero'
// import FinancialService from '@/components/services/FinancialService'
// import MortageService from '@/components/services/MortageService'
// import PropertyService from '@/components/services/PropertyService'
// import TestimonialSection from '@/components/TestimonialSection'
// import ContactSection from '@/components/ContactSection'

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen">
//       <ServiceHero />
//       <PropertyService />
//       <MortageService />
//       <FinancialService />
//       <TestimonialSection />
//       <ContactSection />

//     </main>
//   )
// }

import ServiceHero from '@/components/services/ServiceHero'
import FinancialService from '@/components/services/FinancialService'
import MortageService from '@/components/services/MortageService'
import PropertyService from '@/components/services/PropertyService'
import TestimonialSection from '@/components/TestimonialSection'
import ContactSection from '@/components/ContactSection'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ServiceHero />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-8 sm:my-12 md:my-16">
          <PropertyService />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <MortageService />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <FinancialService />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <TestimonialSection />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <ContactSection />
        </div>
      </div>
    </main>
  )
}

