'use client'
import React from 'react'
import ButtonCTA from '@/components/ui/ButtonCTA'
import { useResize } from '@/hooks/useResize'
import Link from 'next/link'
import Image from 'next/image'
import { faPeopleGroup, faDesktop, faWandMagicSparkles, faChartLine, faNewspaper, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'
import { useRouter, usePathname } from 'next/navigation'
import { menuItems } from '@/utils/utils'
// declare const window: Window & { dataLayer: Record<string, unknown>[]; };

export type menuItem = {
  desktopName: string,
  mobileName: string,
  link: string,
  icon: IconDefinition,
}

interface MobileButtonItems {
  children: string,
  path: string,
  className?: string,
  icon: IconProp,
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

export const MobileButtonItems = ({ children, icon, className, path }: MobileButtonItems) => {
  const router = useRouter()
  const pathURL = usePathname()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(path)
  }

  return (
    <button type="button"
      onClick={handleClick}
      className={tailwindClassMerge(`border-r last:border-none border-r-brand-red inline-flex flex-col items-center justify-center px-5 hover:bg-brand-red group ${className}
      ${pathURL === path ? 'bg-brand-red/90' : 'text-brand-darkblue'}
      `)}
    >
      <FontAwesomeIcon icon={icon} className={tailwindClassMerge(`
        w-6 h-8 group-hover:text-brand-white
        ${pathURL === path ? 'text-brand-white' : 'text-brand-darkblue'}
        `)} />
      <span className={tailwindClassMerge(`
        text-sm text-gray-800 group-hover:text-brand-white
        ${pathURL === path ? 'text-brand-white' : 'text-brand-darkblue'}
        `)}>
        {children}
      </span>
    </button>
  )
}

export const MenuDesktop = () => {
  return (
    <div className='flex items-center gap-6 xl:gap-8'>
      {menuItems.map(({ desktopName, link }, index) => (
        <Link key={index} href={link}>{desktopName}</Link>
      ))}
    </div>
  )
}

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