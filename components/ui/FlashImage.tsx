'use client'

import { useState } from 'react'
import Image from 'next/image'

interface FlashImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

const FlashImage = ({ src, alt, className = '', priority = false }: FlashImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative w-full h-full group ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={100}
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        priority={priority}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Flash overlay on hover */}
      <div
        className={`absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      {/* Initial load animation */}
      <div
        className={`absolute inset-0 bg-white transition-transform duration-700 ease-in-out ${
          isLoaded ? 'translate-x-full' : 'translate-x-0'
        }`}
        style={{
          transformOrigin: 'left',
          zIndex: 1
        }}
      />
    </div>
  )
}

export default FlashImage
