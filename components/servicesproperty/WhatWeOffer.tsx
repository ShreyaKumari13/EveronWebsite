import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const services = [
    {
        imageSrc: "/serviceproperty/analysis.png",
        title: "Analysis",
        description: "In-depth market analysis to identify lucrative opportunities.",
    },
    {
        imageSrc: "/serviceproperty/valuation.png",
        title: "Valuation",
        description: "Assistance in evaluating property values and negotiating deals.",
    },
    {
        imageSrc: "/serviceproperty/strategy.png",
        title: "Strategy",
        description: "Expert guidance on investment strategies for long-term gains.",
    },
    {
        imageSrc: "/serviceproperty/compliance.png",
        title: "Compliance",
        description: "Legal and regulatory advice to simplify property transactions.",
    },
]

export default function WhatWeOffer() {
    return (
        <section className="px-3 sm:px-4 py-8 sm:py-10 md:py-12 mx-auto max-w-7xl">
            <div className="mb-8 sm:mb-10 md:mb-12">
                <h2 className="font-lato text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] 
                             font-[700] leading-[1.2] 
                             text-left text-underline-position-from-font 
                             decoration-skip-ink-none 
                             mb-3 sm:mb-4">
                    Property Consultancy Services
                </h2>
                <p className="font-lato text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] 
                             font-[400] leading-[1.2] 
                             text-left text-underline-position-from-font 
                             decoration-skip-ink-none 
                             mb-3 sm:mb-4">
                    At Everon Property & Mortgage Consultancy Limited, we specialize in
                    providing comprehensive property consultancy services tailored to meet
                    your goals, whether you're <strong>buying</strong>, <strong>selling</strong>, or <strong>investing</strong>.
                </p>
                <p className="font-lato text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] 
                             font-[400] leading-[1.2] 
                             text-left text-underline-position-from-font 
                             decoration-skip-ink-none">
                    Our team of experienced consultants ensures you receive 
                    <span className="font-[600]"> strategic advice </span> 
                    to maximize your property investments while minimizing risks.
                </p>
            </div>

            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
                What We Offer:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className="relative bg-[#f5f0e9] border-0 
                                 min-h-[220px] sm:min-h-[240px] 
                                 transition-transform duration-300 ease-in-out 
                                 hover:scale-[1.02] hover:shadow-lg"
                    >
                        <div className="pt-4 sm:pt-5 md:pt-6 pb-2 flex justify-center">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                                        bg-white rounded-full 
                                        flex items-center justify-center 
                                        shadow-lg overflow-hidden 
                                        transition-transform duration-300 ease-in-out">
                                <Image
                                    src={service.imageSrc}
                                    alt={service.title}
                                    width={32}
                                    height={32}
                                    className="object-contain w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8"
                                />
                            </div>
                        </div>
                        <CardHeader className="pb-2 sm:pb-3">
                            <div className="bg-[#00472f] text-white 
                                        text-center py-1.5 sm:py-2 
                                        rounded-md 
                                        font-lato text-[18px] sm:text-[20px] md:text-[24px] 
                                        leading-[1.2] font-[600] 
                                        text-underline-position-from-font 
                                        decoration-skip-ink-none">
                                {service.title}
                            </div>
                        </CardHeader>
                        <CardContent className="pb-3 sm:pb-4">
                            <p className="text-center 
                                      text-[16px] sm:text-[18px] md:text-[20px] 
                                      leading-[1.2] font-[400] 
                                      font-lato 
                                      text-underline-position-from-font 
                                      decoration-skip-ink-none">
                                {service.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
