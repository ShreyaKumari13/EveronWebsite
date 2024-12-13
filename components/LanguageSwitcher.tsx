// 'use client'

// import { useLanguage } from '../lib/i18n/LanguageContext'

// interface LanguageSwitcherProps {
//   variant?: 'transparent' | 'solid'
// }

// const LanguageSwitcher = ({ variant = 'transparent' }: LanguageSwitcherProps) => {
//   const { language, setLanguage } = useLanguage()
//   const textColor = variant === 'transparent' ? 'text-white' : 'text-[#00492C]'

//   return (
//     <button
//       onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
//       className={`flex items-center justify-center px-3 py-1 rounded-md border ${
//         variant === 'transparent' 
//           ? 'border-white hover:bg-white/10' 
//           : 'border-[#00492C] hover:bg-[#00492C]/5'
//       } transition-all duration-300 ease-in-out`}
//     >
//       <span className={`font-lato text-base font-medium ${textColor}`}>
//         {language === 'en' ? '中文' : 'EN'}
//       </span>
//     </button>
//   )
// }

// export default LanguageSwitcher


'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'

interface LanguageSwitcherProps {
  variant?: 'transparent' | 'solid'
}

const LanguageSwitcher = ({ variant = 'transparent' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage()
  const textColor = variant === 'transparent' ? 'text-white' : 'text-[#00492C]'

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      className={`flex items-center justify-center px-3 py-1 rounded-md border ${
        variant === 'transparent' 
          ? 'border-white hover:bg-white/10' 
          : 'border-[#00492C] hover:bg-[#00492C]/5'
      } transition-all duration-300 ease-in-out`}
    >
      <span className={`font-lato text-base font-medium ${textColor}`}>
        {language === 'en' ? '中文' : 'EN'}
      </span>
    </button>
  )
}

export default LanguageSwitcher

