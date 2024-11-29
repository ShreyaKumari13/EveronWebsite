import WhyChooseUs from '@/components/servicesproperty/WhyChooseUs'
import ServicesPropertyHero from '@/components/servicesproperty/ServicesPropertyHero'
import WhatWeOffer from '@/components/servicesproperty/WhatWeOffer'

export default function ServicePropertyPage() {
  return (
    <main className="min-h-screen">
      <ServicesPropertyHero />
      <WhatWeOffer/>
      <WhyChooseUs/>
    </main>
  )
}
