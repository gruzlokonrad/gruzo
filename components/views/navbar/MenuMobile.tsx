'use client'
import React from 'react'
import { useResize } from '@/hooks/useResize'
import { MobileButtonItems } from './Header'
import { menuItems } from '@/utils/utils'

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
      <div className='grid h-full max-w-lg grid-cols-5 mx-auto font-medium'>
        {menuItems.map(({ mobileName, link, icon }, index) => (
          <MobileButtonItems key={index} path={link} icon={icon}>{mobileName}</MobileButtonItems>
        ))}
      </div>
    </nav>
  )
}

export default MenuMobile