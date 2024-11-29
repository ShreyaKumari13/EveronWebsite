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
            <div className="mb-12">
                <h2 className="font-lato text-[40px] font-[700] leading-[48px] text-left text-underline-position-from-font decoration-skip-ink-none mb-4">
                    Financial Solutions
                </h2>
                <p className="font-lato text-[24px] font-[400] leading-[28.8px] text-left text-underline-position-from-font decoration-skip-ink-none mb-4">
                    At <span className="font-lato text-[24px] font-[600] leading-[28.8px]">Everon Property & Mortgage Consultancy Limited</span>, we understand that every financial journey is unique. That's why we offer a range of <span className="font-lato text-[24px] font-[600] leading-[28.8px]">tailored financial solutions</span> to suit both individuals and businesses.
                </p>
            </div>

            <div className="grid grid-cols-[35%,60%] gap-8 md:gap-12 items-start pb-8">
                {/* Left Side - Heading */}
                <div className="relative flex flex-col justify-start items-start text-left">
                    <h2 className="font-lato text-[40px] font-[700] leading-[48px] text-left text-underline-position-from-font decoration-skip-ink-none">
                        Our Financial Planning <br /> Services Include:
                    </h2>
                </div>

                {/* Right Side - Paragraph */}
                <div className="relative flex flex-col">
                    <p className="w-full font-lato text-[24px] font-[400] leading-[28.8px] text-left text-underline-position-from-font decoration-skip-ink-none text-[#1C1C1C]">
                        Financial planning and management are essential to achieving your personal and business goals. We offer a wide range of tailored financial solutions designed to address the diverse needs of individuals and organizations. Here's how our expertise can help secure your financial future:
                    </p>
                </div>
            </div>

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
