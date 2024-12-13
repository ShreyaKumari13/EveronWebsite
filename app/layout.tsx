import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Lato } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClientWrapper from '../components/ui/ClientWrapper'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import { LanguageProvider } from '../lib/i18n/LanguageContext'
import React from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({ 
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Everon Property & Mortgage Consultancy Limited',
  description: 'Your Trusted Partner for Property & Financial Solutions',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.png', type: 'image/png' }
    ],
    apple: '/images/logo.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lato.variable}`}>
        <LanguageProvider>
          <ClientWrapper>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
          </ClientWrapper>
        </LanguageProvider>
      </body>
    </html>
  )
}