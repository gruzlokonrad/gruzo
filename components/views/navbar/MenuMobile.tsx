'use client'
import React from 'react'
import { useResize } from '@/hooks/useResize'
import { menuItems } from '@/utils/utils'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useRouter, usePathname } from 'next/navigation'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface MobileButtonItems {
  children: string,
  path: string,
  className?: string,
  icon: IconProp,
}

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
      className={tailwindClassMerge(`
      border-r border-brand-red first:border-l
      inline-flex flex-col items-center justify-center 
      px-5 
      hover:bg-brand-red group 
      ${className}
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

const MenuMobile = () => {
  const { isMobile } = useResize()
  if (!isMobile) return null

  return (
    <nav className={`
      sticky bottom-0 left-0 
      w-full h-auto py-px
      border-brand-red bg-white border-t 
      `}
    >
      <div className='flex h-full max-w-lg mx-auto font-medium justify-center'>
        {menuItems.map(({ mobileName, link, icon }, index) => (
          <MobileButtonItems key={index} path={link} icon={icon}>{mobileName}</MobileButtonItems>
        ))}
      </div>
    </nav>
  )
}

export default MenuMobile