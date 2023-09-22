'use client'
import React from 'react'
import ButtonCTA from '@/components/ui/ButtonCTA'
import { useResize } from '@/hooks/useResize'
import Link from 'next/link'
import Image from 'next/image'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { MenuDesktop } from '@/components/views/navbar/MenuDesktop'
// declare const window: Window & { dataLayer: Record<string, unknown>[]; };

export type menuItem = {
  desktopName: string,
  mobileName: string,
  link: string,
  icon: IconDefinition,
}

export const Brand = () => (
  <Link href='/' className='relative mx-0 h-[50px] w-[250px] max-w-xl'>
    <Image
      src="/logo.png"
      alt="gruzo.dev - IT for business"
      fill
      sizes='100'
      className='object-contain'
      priority
    />
  </Link>
)

const Header = () => {
  const { isDesktop } = useResize()

  return (
    <nav className='sticky top-0 border-b border-brand-red bg-white z-20'>
      <div className='container h-20 flex p-2 justify-between items-center'>
        <Brand />
        {isDesktop && <MenuDesktop />}
        <ButtonCTA link='newsletter' className=''>Bezpłatna konsultacja</ButtonCTA>
      </div>
    </nav>
  )
}

export default Header