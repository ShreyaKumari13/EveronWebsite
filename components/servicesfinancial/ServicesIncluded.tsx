import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const services = [
    {
        imageSrc: "/financial/Personal Finance.png",
        title: "Personal Financial Planning",
        description: "From budgeting to wealth management, we help you secure your financial future.",
    },
    {
        imageSrc: "/financial/Corporate Finance.png",
        title: "Corporate Financial Strategies",
        description: "Solutions to optimize business performance and achieve sustainable growth.",
    },
    {
        imageSrc: "/financial/Investment.png",
        title: "Investment Advisory",
        description: "Expert recommendations for diverse investment portfolios",
    },
    {
        imageSrc: "/financial/Risk.png",
        title: "Risk Management",
        description: "Comprehensive insurance and risk mitigation strategies.",
    },
]

export default function ServicesIncluded() {
    return (
        <section className="px-4 py-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className={`relative border-0 min-h-[280px] flex flex-col justify-between ${index === 1 ? 'bg-[#F0E9DD]' : ''}`}
                    >
                        <div>
                            <div className="pt-6 pb-2 flex justify-center">
                                <div className={`w-16 h-16 ${index === 1 ? 'bg-white' : 'bg-[#F0E9DD]'} rounded-full flex items-center justify-center shadow-lg overflow-hidden`}>
                                    <Image
                                        src={service.imageSrc}
                                        alt={service.title}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <CardHeader className="pb-2">
                                <div className="text-[#00472f] font-lato text-[24px] font-[600] leading-[28.8px] text-center text-underline-position-from-font decoration-skip-ink-none">
                                    {service.title}
                                </div>
                            </CardHeader>
                        </div>
                        <CardContent>
                            <p className="font-lato text-[20px] font-[400] leading-[24px] text-center text-underline-position-from-font decoration-skip-ink-none w-full">
                                {service.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}