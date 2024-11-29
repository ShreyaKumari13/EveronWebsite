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
        <section className="px-4 py-12 mx-auto max-w-7xl">
            <div className="mb-12">
                <h2 className="font-lato text-[40px] font-[700] leading-[48px] text-left text-underline-position-from-font decoration-skip-ink-none mb-4">
                    Property Consultancy Services
                </h2>
                <p className="font-lato text-[24px] font-[400] leading-[28.8px] text-left text-underline-position-from-font decoration-skip-ink-none mb-4">
                    At Everon Property & Mortgage Consultancy Limited, we specialize in
                    providing comprehensive property consultancy services tailored to meet
                    your goals, whether you're <strong>buying</strong>, <strong>selling</strong>, or <strong>investing</strong>.
                </p>
                <p className="font-lato text-[24px] font-[400] leading-[28.8px] text-left text-underline-position-from-font decoration-skip-ink-none">
                    Our team of experienced consultants ensures you receive <span className="font-lato text-[24px] font-[600] leading-[28.8px] text-left text-underline-position-from-font decoration-skip-ink-none">strategic advice</span> to maximize your property investments while minimizing risks.
                </p>
            </div>
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className="relative bg-[#f5f0e9] border-0 min-h-[240px]"
                    >
                        <div className="pt-6 pb-2 flex justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                                <Image
                                    src={service.imageSrc}
                                    alt={service.title}
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <CardHeader className="pb-3">
                            <div className="bg-[#00472f] text-white text-center py-2 rounded-md font-lato text-[24px] leading-[28.8px] font-[600] text-underline-position-from-font decoration-skip-ink-none">
                                {service.title}
                            </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                            <p className="text-center text-[20px] leading-[24px] font-[400] font-lato text-underline-position-from-font decoration-skip-ink-none">
                                {service.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
