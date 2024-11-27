// import React from 'react'
// import ContactForm from '@/components/contact/ContactForm'
// import FinancialContactSection from '@/components/contact/FinancialContactSection'
// import Header from '@/components/Header'

// export default function ContactPage() {
//   return (
//     <main className="min-h-screen bg-gray-50">
//       <Header variant="solid" className="bg-gray-50" />
//       <ContactForm />
//       <FinancialContactSection/>
//     </main>
//   )
// }

import React from 'react'
import ContactForm from '@/components/contact/ContactForm'
import FinancialContactSection from '@/components/contact/FinancialContactSection'
import Header from '@/components/Header'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header variant="solid" className="bg-gray-50" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-8 sm:my-12 md:my-16">
          <ContactForm />
        </div>
        <div className="my-8 sm:my-12 md:my-16">
          <FinancialContactSection />
        </div>
      </div>
    </main>
  )
}

