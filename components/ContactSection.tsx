import { Phone, Mail, MapPin } from 'lucide-react'
import React from 'react'

const ContactSection = () => {
  return (
    <section className="w-full bg-white pb-5">
      <div className="mx-auto max-w-[954px] px-4 md:px-0">
        <div className="relative bg-white rounded-[30px] overflow-hidden h-auto md:h-[400px]">
          {/* Background color section */}
          <div className="absolute w-full h-[calc(100%-80px)] bottom-0 bg-[#B392550D] z-0" />
          
          <div className="relative z-10 h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative h-full px-4 py-12">
              {/* Contact Column */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00492C] rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <Phone className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-[26px] font-lato font-bold mb-2 md:mb-4 text-[#1C1C1C]">Contact Us</h2>
                <div className="space-y-1 md:space-y-2 text-lg md:text-[24px] font-lato text-[#1C1C1C]">
                  <p>6501 6890</p>
                  <p>2712 8382</p>
                </div>
              </div>

              {/* Email Column */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00492C] rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <Mail className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-[26px] font-lato font-bold mb-2 md:mb-4 text-[#1C1C1C]">Email</h2>
                <a 
                  href="mailto:info@everonmortgage.com"
                  className="text-lg md:text-[20px] font-lato font-normal leading-normal md:leading-[40px] text-center text-[#1C1C1C] hover:text-[#8E8154] transition-colors [text-underline-position:from-font] [text-decoration-skip-ink:none]"
                >
                  info@everonmortgage.com
                </a>
              </div>

              {/* Location Column */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00492C] rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-[26px] font-lato font-bold mb-2 md:mb-4 text-[#1C1C1C]">Location</h2>
                <div className="space-y-1 md:space-y-2 text-lg md:text-[20px] font-lato font-normal leading-normal md:leading-[40px] text-center text-[#1C1C1C]">
                  <p>Room 1314A, 13/F, Lippo</p>
                  <p>Sun Plaza, 28 Canton Road,</p>
                  <p>Tsim Sha Tsui, Kowloon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
