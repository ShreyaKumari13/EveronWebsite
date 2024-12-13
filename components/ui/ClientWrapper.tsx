'use client'

import React, { ReactNode } from 'react'
import CustomCursor from './CustomCursor'

interface ClientWrapperProps {
  children: ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  )
}
