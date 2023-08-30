'use client'
import React from 'react'
import { tailwindClassMerge } from '@/app/utils/tailwindClassMerge'
import { useResize } from '@/app/hooks/useResize'

interface IModuleContainer {
  children: React.ReactNode,
  itemsToBottom?: boolean,
  bgToRight?: boolean,
}

const ContainerModule = ({
  children,
  itemsToBottom = false,
  bgToRight = false,
}: IModuleContainer) => {
  const { isMobile, isDesktop } = useResize()

  const alignItems = itemsToBottom ? 'lg:pt-24' : 'lg:pb-72'

  const styleModuleConfig = bgToRight
    ? 'rounded-l-[70px] lg:rounded-l-[254px] ml-auto lg:ml-[5vw] text-right'
    : 'rounded-r-[70px] lg:rounded-r-[254px] mr-auto lg:mr-[5vw] text-left'

  return (
    // *** CONTAINER MODULE *** 
    <div className={tailwindClassMerge(`
      bg-brand-red/30 
        w-11/12 
        lg:w-full 
        p-4 pt-10 sm:p-10
        my-4 lg:my-10
        ${styleModuleConfig}
        ${isDesktop && alignItems}
        ${isMobile && 'relative mb-14'}
      `)}>
      {children}
    </div>
  )
}

export default ContainerModule