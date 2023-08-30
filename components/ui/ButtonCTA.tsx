'use client'
import { tailwindClassMerge } from '@/app/utils/tailwindClassMerge'
import Link from 'next/link'
import React from 'react'

interface IButtonCTA {
  children: string,
  link: string,
  className?: string,
}

const ButtonCTA = ({ children, link, className }: IButtonCTA) => {
  return (
    <div className={tailwindClassMerge(`bg-brand-red text-brand-white rounded-xl px-2 md:px-4 py-2 ${className}`)}>
      <Link href={link}>
        {children}
      </Link>
    </div>
  )
}

export default ButtonCTA