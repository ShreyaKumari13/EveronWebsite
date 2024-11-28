import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClientWrapper from '../components/ui/ClientWrapper'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Everon Property & Mortgage Consultancy Limited',
  description: 'Your Trusted Partner for Property & Financial Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lato.variable} hidden md:cursor-none`}>
        <ClientWrapper />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
