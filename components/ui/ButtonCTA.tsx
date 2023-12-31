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
    <Link href={link}>
      <div className={tailwindClassMerge(`
        bg-brand-red 
        flex items-center justify-center 
        text-brand-white 
        rounded-3xl 
        ml-4 
        py-2 px-4 
        text-center 
        min-h-[50px] 
        ${className}
      `)}>
        {children}
      </div>
    </Link>
  )
}

export default ButtonCTA