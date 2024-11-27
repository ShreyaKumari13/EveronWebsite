// 'use client'

// import AboutHero from '@/components/about/AboutHero'
// import OurExpertise from '@/components/about/OurExpertise'
// import OurMission from '@/components/about/OurMission'
// import WhoWeAre from '@/components/about/WhoWeAre'
// import Header from '@/components/Header'
// import TestimonialSection from '@/components/TestimonialSection'
// import ContactSection from '@/components/ContactSection'

// export default function AboutPage() {
//   return (
//     <main className="bg-gray-50">
//       <Header />
//       <AboutHero />
//       <WhoWeAre />
//       <OurMission />
//       <OurExpertise />
//       <TestimonialSection />
//       <ContactSection />
//     </main>
//   )
// }

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
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-8 sm:my-12 md:my-16">
          <WhoWeAre />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <OurMission />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <OurExpertise />
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


