import React from 'react'
import ContactForm from '@/components/contact/ContactForm'
import FinancialContactSection from '@/components/contact/FinancialContactSection'
import Header from '@/components/Header'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header variant="solid" className="bg-gray-50" />
      <ContactForm />
      <FinancialContactSection/>
    </main>
  )
}