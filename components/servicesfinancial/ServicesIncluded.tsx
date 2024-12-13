// 'use client'

// import Image from 'next/image'
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { useLanguage } from '@/lib/i18n/LanguageContext';
// import { translations } from '@/lib/i18n/translations';

// const services = [
//     {
//         imageSrc: "/financial/Personal Finance.png",
//         title: "Personal Financial Planning",
//         description: "From budgeting to wealth management, we help you secure your financial future.",
//     },
//     {
//         imageSrc: "/financial/Corporate Finance.png",
//         title: "Corporate Financial Strategies",
//         description: "Solutions to optimize business performance and achieve sustainable growth.",
//     },
//     {
//         imageSrc: "/financial/Investment.png",
//         title: "Investment Advisory",
//         description: "Expert recommendations for diverse investment portfolios",
//     },
//     {
//         imageSrc: "/financial/Risk.png",
//         title: "Risk Management",
//         description: "Comprehensive insurance and risk mitigation strategies.",
//     },
// ]

// export default function ServicesIncluded() {
//     const { language } = useLanguage();
//     const t = translations[language];

//     const localizedServices = services.map((service) => {
//         return {
//             imageSrc: service.imageSrc,
//             title: t[`financialServiceTitle${services.indexOf(service) + 1}`],
//             description: t[`financialServiceDesc${services.indexOf(service) + 1}`],
//         }
//     })

//     return (
//         <section className="px-3 sm:px-4 md:px-6 
//                         py-8 sm:py-10 md:py-12 
//                         mx-auto max-w-7xl">
//             <div className="mb-8 sm:mb-10 md:mb-12">
//                 <h2 className="font-lato 
//                            text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] 
//                            font-[700] 
//                            leading-tight md:leading-[1.2] 
//                            text-left 
//                            mb-3 sm:mb-4">
//                     {t.financialSolutionsTitle}
//                 </h2>
//                 <p className="font-lato 
//                           text-base sm:text-lg md:text-xl lg:text-[24px] 
//                           font-[400] 
//                           leading-relaxed 
//                           text-left"
//                     dangerouslySetInnerHTML={{ __html: t.financialSolutionsDesc }}>
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-[35%,60%] 
//                         gap-6 sm:gap-8 md:gap-10 lg:gap-12 
//                         items-start pb-6 sm:pb-8">
//                 {/* Left Side - Heading */}
//                 <div className="relative flex flex-col justify-start items-start text-left">
//                     <h2 className="font-lato 
//                                text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] 
//                                font-[700] 
//                                leading-tight md:leading-[1.2] 
//                                text-left">
//                         {t.financialServicesIncludeTitle}
//                     </h2>
//                 </div>

//                 {/* Right Side - Paragraph */}
//                 <div className="relative flex flex-col">
//                     <p className="font-lato 
//                               text-base sm:text-lg md:text-xl lg:text-[24px] 
//                               font-[400] 
//                               leading-relaxed 
//                               text-left 
//                               text-[#1C1C1C]">
//                         {t.financialServicesIncludeDesc}
//                     </p>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
//                         gap-4 sm:gap-5 md:gap-6">
//                 {localizedServices.map((service, index) => (
//                     <Card
//                         key={index}
//                         className={`relative border-0 
//                                 min-h-[250px] sm:min-h-[280px] 
//                                 flex flex-col justify-between 
//                                 transform hover:scale-[1.02] 
//                                 transition-all duration-300 
//                                 shadow-sm hover:shadow-lg
//                                 bg-white hover:bg-[#F0E9DD]
//                                 group`}
//                     >
//                         <div>
//                             <div className="pt-4 sm:pt-6 pb-2 flex justify-center">
//                                 <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
//                                             bg-[#F0E9DD] group-hover:bg-white
//                                             rounded-full 
//                                             flex items-center justify-center 
//                                             shadow-lg 
//                                             overflow-hidden 
//                                             transform hover:scale-110 
//                                             transition-all duration-300`}>
//                                     <Image
//                                         src={service.imageSrc}
//                                         alt={service.title}
//                                         width={32}
//                                         height={32}
//                                         className={`object-contain w-6 sm:w-7 md:w-8 transition-all duration-300 ${
//                                             service.title === t.financialServiceTitle2
//                                             ? "brightness-0 sepia-[.50] saturate-[2] hue-rotate-[335deg] brightness-[1.2] group-hover:brightness-100 group-hover:sepia-0 group-hover:saturate-100 group-hover:hue-rotate-0"
//                                             : ""
//                                         }`}
//                                     />
//                                 </div>
//                             </div>
//                             <CardHeader className="pb-2">
//                                 <div className="text-[#00472f] 
//                                             font-lato 
//                                             text-lg sm:text-xl md:text-2xl lg:text-[24px] 
//                                             font-[600] 
//                                             leading-tight 
//                                             text-center">
//                                     {service.title}
//                                 </div>
//                                 <p className="text-[#1C1C1C] 
//                                           font-lato 
//                                           text-sm sm:text-base md:text-lg 
//                                           leading-relaxed 
//                                           text-center 
//                                           mt-2">
//                                     {service.description}
//                                 </p>
//                             </CardHeader>
//                         </div>
//                     </Card>
//                 ))}
//             </div>
//         </section>
//     )
// }

'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { translations } from '@/lib/i18n/translations';

const services = [
    {
        imageSrc: "/financial/Personal Finance.png",
        titleKey: "financialServiceTitle1",
        descKey: "financialServiceDesc1",
    },
    {
        imageSrc: "/financial/Corporate Finance.png",
        titleKey: "financialServiceTitle2",
        descKey: "financialServiceDesc2",
    },
    {
        imageSrc: "/financial/Investment.png",
        titleKey: "financialServiceTitle3",
        descKey: "financialServiceDesc3",
    },
    {
        imageSrc: "/financial/Risk.png",
        titleKey: "financialServiceTitle4",
        descKey: "financialServiceDesc4",
    },
]

export default function ServicesIncluded() {
    const { language } = useLanguage();
    const t = translations[language];

    const localizedServices = services.map((service) => {
        return {
            imageSrc: service.imageSrc,
            title: t[service.titleKey as keyof typeof t],
            description: t[service.descKey as keyof typeof t],
        }
    })

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
                    {t.financialSolutionsTitle}
                </h2>
                <p className="font-lato 
                          text-base sm:text-lg md:text-xl lg:text-[24px] 
                          font-[400] 
                          leading-relaxed 
                          text-left"
                    dangerouslySetInnerHTML={{ __html: t.financialSolutionsDesc }}>
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
                        {t.financialServicesIncludeTitle}
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
                        {t.financialServicesIncludeDesc}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                        gap-4 sm:gap-5 md:gap-6">
                {localizedServices.map((service, index) => (
                    <Card
                        key={index}
                        className={`relative border-0 
                                min-h-[250px] sm:min-h-[280px] 
                                flex flex-col justify-between 
                                transform hover:scale-[1.02] 
                                transition-all duration-300 
                                shadow-sm hover:shadow-lg
                                bg-white hover:bg-[#F0E9DD]
                                group`}
                    >
                        <div>
                            <div className="pt-4 sm:pt-6 pb-2 flex justify-center">
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                                            bg-[#F0E9DD] group-hover:bg-white
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
                                        className={`object-contain w-6 sm:w-7 md:w-8 transition-all duration-300 ${
                                            service.title === t.financialServiceTitle2
                                            ? "brightness-0 sepia-[.50] saturate-[2] hue-rotate-[335deg] brightness-[1.2] group-hover:brightness-100 group-hover:sepia-0 group-hover:saturate-100 group-hover:hue-rotate-0"
                                            : ""
                                        }`}
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

