import Image from 'next/image';

const WhyChooseUs = () => {
    return (
        <section className="px-4 py-8 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[10px]">
                {/* Left Side - Image */}
                <div className="relative flex justify-center items-start pt-8 md:pt-[1px]">
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-[15px] overflow-hidden">
                        <Image
                            src="/mortgageimage/2.3_mortgage-planning Why to choose us.jpg"
                            alt="Why Choose Everon for Mortgage Planning"
                            fill
                            className="object-cover rounded-[15px]"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="relative flex flex-col pl-10">
                    <div className="flex flex-col">
                        <div>
                            <p className="w-full md:w-[474px] text-3xl md:text-[40px] font-lato font-bold text-[#1C1C1C] leading-tight md:leading-[48px] text-left mb-3">
                                Why Choose Us
                            </p>
                            <ul className="w-full md:w-[511px] pt-4 text-lg md:text-[24px] font-lato font-normal text-[#1C1C1C] leading-normal md:leading-[28.8px] text-left list-none">
                                <li className="flex items-start mb-6">
                                    <span className="mr-2 mt-2">•</span>
                                    <span>Strong relationships with leading financial institutions.

                                    </span>
                                </li>
                                <li className="flex items-start mb-6">
                                    <span className="mr-2 mt-2">•</span>
                                    <span>Transparent and unbiased recommendations.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-2">•</span>
                                    <span>Streamlined processes to save you time and effort.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-14 mb-8">
                <p className="font-lato text-[40px] font-[700] leading-[48px] text-left text-underline-position-from-font decoration-skip-ink-none">
                    Empower your property decisions with smart mortgage planning.
                </p>
            </div>
        </section>
    )
}

export default WhyChooseUs