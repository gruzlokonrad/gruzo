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
    <div className={tailwindClassMerge(`bg-brand-red text-brand-white rounded-xl ml-4 px-1 py-1 md:px-4 text-center ${className}`)}>
      <Link href={link}>
        {children}
      </Link>
    </div>
  )
}

export default ButtonCTA