import Image from 'next/image';

const WhyChooseUs = () => {
    return (
        <section className="px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                {/* Image Side */}
                <div className="relative flex justify-center items-start pt-4 sm:pt-6 md:pt-0 order-2 md:order-1">
                    <div className="relative w-full 
                                h-[280px] sm:h-[340px] md:h-[420px] lg:h-[500px] 
                                rounded-[10px] sm:rounded-[15px] 
                                overflow-hidden 
                                shadow-md hover:shadow-xl 
                                transition-all duration-300">
                        <Image
                            src="/mortgageimage/2.3_mortgage-planning Why to choose us.jpg"
                            alt="Why Choose Everon for Mortgage Planning"
                            fill
                            className="object-cover rounded-[10px] sm:rounded-[15px] 
                                     transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>

                {/* Content Side */}
                <div className="relative flex flex-col pl-2 sm:pl-4 md:pl-6 lg:pl-10 order-1 md:order-2">
                    <div className="flex flex-col">
                        <div>
                            <p className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] 
                                      font-lato font-bold text-[#1C1C1C] 
                                      leading-tight md:leading-[1.2] 
                                      mb-4 sm:mb-6">
                                Why Choose Us
                            </p>
                            <ul className="pt-2 sm:pt-3 md:pt-4 
                                       text-base sm:text-lg md:text-xl lg:text-[24px] 
                                       font-lato font-normal text-[#1C1C1C] 
                                       leading-relaxed md:leading-[1.4] 
                                       list-none 
                                       space-y-4 sm:space-y-5 md:space-y-6">
                                <li className="flex items-start group">
                                    <span className="mr-2 mt-1.5 text-[#00492C] 
                                                 transition-transform duration-300 
                                                 group-hover:scale-125">•</span>
                                    <span className="group-hover:translate-x-1 
                                                 transition-transform duration-300">
                                        Strong relationships with leading financial institutions.
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="mr-2 mt-1.5 text-[#00492C] 
                                                 transition-transform duration-300 
                                                 group-hover:scale-125">•</span>
                                    <span className="group-hover:translate-x-1 
                                                 transition-transform duration-300">
                                        Transparent and unbiased recommendations.
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="mr-2 mt-1.5 text-[#00492C] 
                                                 transition-transform duration-300 
                                                 group-hover:scale-125">•</span>
                                    <span className="group-hover:translate-x-1 
                                                 transition-transform duration-300">
                                        Streamlined processes to save you time and effort.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-8 sm:pt-10 md:pt-14 mb-6 sm:mb-8">
                <p className="font-lato 
                          text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] 
                          font-[700] 
                          leading-tight md:leading-[1.2] 
                          text-left 
                          max-w-[900px]
                          transition-all duration-300">
                    Empower your property decisions with smart mortgage planning.
                </p>
            </div>
        </section>
    )
}

export default WhyChooseUs