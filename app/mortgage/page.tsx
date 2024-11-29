import MortgageHero from '@/components/mortgageplanning/MortgageHero'
import MortgageMoney from '@/components/mortgageplanning/MortgageMoney'
import MortgageService from '@/components/mortgageplanning/MortgageService'
import WhyChooseUs from '@/components/mortgageplanning/WhyChooseUs'

export default function MortgagePage() {
  return (
    <main>
      <MortgageHero />
      <MortgageService/>
      <MortgageMoney />
      <WhyChooseUs />

    </main>
  )
}