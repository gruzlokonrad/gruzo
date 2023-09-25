'use client'
import React from 'react'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'
import { useResize } from '@/hooks/useResize'

interface IModuleContainer {
  children: React.ReactNode,
  itemsToBottom?: boolean,
  bgToRight?: boolean,
  light?: boolean,
  className?: string
}

const ContainerModule = ({
  children,
  itemsToBottom = false,
  bgToRight = false,
  light = false,
  className,
}: IModuleContainer) => {
  const { isMobile, isDesktop } = useResize()


  const styleModuleConfig = bgToRight
    ? 'rounded-l-[70px] lg:rounded-l-[254px] ml-auto  text-left border-r-0 lg:pl-28'
    : 'rounded-r-[70px] lg:rounded-r-[254px] mr-auto  text-right border-l-0 lg:pr-28'

  return (
    // *** CONTAINER MODULE *** 
    <div className={tailwindClassMerge(`
        w-11/12 
        p-10 sm:p-10 lg:p-32
        my-4 lg:my-10
        border 
        ${light ? 'bg-brand-white border-brand-red/50 border-2' : 'bg-brand-red/30 border-brand-red'}
        ${styleModuleConfig}
        ${isDesktop && (itemsToBottom && 'lg:pt-40')}
        ${isMobile && 'relative mb-14'}
        ${className}
      `)}>
      {children}
    </div>
  )
}

export default ContainerModule