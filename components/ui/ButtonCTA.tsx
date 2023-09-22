'use client'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'
import Link from 'next/link'
import React from 'react'

interface IButtonCTA {
  children: string,
  link: string,
  className?: string,
}

const ButtonCTA = ({ children, link, className }: IButtonCTA) => {
  return (
    <div className={tailwindClassMerge(`bg-brand-red flex items-center justify-center text-brand-white rounded-xl ml-4 py-2 px-4 text-center min-h-[50px] ${className}`)}>
      <Link href={link}>
        {children}
      </Link>
    </div>
  )
}

export default ButtonCTA