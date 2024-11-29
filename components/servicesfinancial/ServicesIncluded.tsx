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
        <section className="px-3 sm:px-4 md:px-6 
                        py-8 sm:py-10 md:py-12 
                        mx-auto max-w-7xl">
            <div className="mb-8 sm:mb-10 md:mb-12">
                <h2 className="font-lato 
                           text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] 
                           font-[700] 
                           leading-tight md:leading-[1.2] 
                           text-left 
                           mb-3 sm:mb-4">
                    Financial Solutions
                </h2>
                <p className="font-lato 
                          text-base sm:text-lg md:text-xl lg:text-[24px] 
                          font-[400] 
                          leading-relaxed 
                          text-left">
                    At <span className="font-[600]">Everon Property & Mortgage Consultancy Limited</span>, 
                    we understand that every financial journey is unique. That's why we offer a range of 
                    <span className="font-[600]"> tailored financial solutions</span> to suit both individuals and businesses.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[35%,60%] 
                        gap-6 sm:gap-8 md:gap-10 lg:gap-12 
                        items-start pb-6 sm:pb-8">
                {/* Left Side - Heading */}
                <div className="relative flex flex-col justify-start items-start text-left">
                    <h2 className="font-lato 
                               text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] 
                               font-[700] 
                               leading-tight md:leading-[1.2] 
                               text-left">
                        Our Financial Planning <br className="hidden sm:block" /> Services Include:
                    </h2>
                </div>

                {/* Right Side - Paragraph */}
                <div className="relative flex flex-col">
                    <p className="font-lato 
                              text-base sm:text-lg md:text-xl lg:text-[24px] 
                              font-[400] 
                              leading-relaxed 
                              text-left 
                              text-[#1C1C1C]">
                        Financial planning and management are essential to achieving your personal and business goals. 
                        We offer a wide range of tailored financial solutions designed to address the diverse needs 
                        of individuals and organizations. Here's how our expertise can help secure your financial future:
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                        gap-4 sm:gap-5 md:gap-6">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className={`relative border-0 
                                min-h-[250px] sm:min-h-[280px] 
                                flex flex-col justify-between 
                                transform hover:scale-[1.02] 
                                transition-all duration-300 
                                shadow-sm hover:shadow-lg
                                ${index === 1 ? 'bg-[#F0E9DD]' : ''}`}
                    >
                        <div>
                            <div className="pt-4 sm:pt-6 pb-2 flex justify-center">
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                                            ${index === 1 ? 'bg-white' : 'bg-[#F0E9DD]'} 
                                            rounded-full 
                                            flex items-center justify-center 
                                            shadow-lg 
                                            overflow-hidden 
                                            transform hover:scale-110 
                                            transition-all duration-300`}>
                                    <Image
                                        src={service.imageSrc}
                                        alt={service.title}
                                        width={32}
                                        height={32}
                                        className="object-contain w-6 sm:w-7 md:w-8"
                                    />
                                </div>
                            </div>
                            <CardHeader className="pb-2">
                                <div className="text-[#00472f] 
                                            font-lato 
                                            text-lg sm:text-xl md:text-2xl lg:text-[24px] 
                                            font-[600] 
                                            leading-tight 
                                            text-center">
                                    {service.title}
                                </div>
                                <p className="text-[#1C1C1C] 
                                          font-lato 
                                          text-sm sm:text-base md:text-lg 
                                          leading-relaxed 
                                          text-center 
                                          mt-2">
                                    {service.description}
                                </p>
                            </CardHeader>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}
