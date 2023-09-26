import React from 'react'
import Image from 'next/image'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'

interface IDividerBrand {
  size: number,
  className?: string,
}

const DividerBrand = ({ size, className }: IDividerBrand) => {
  const renderBrand = () => (
    <div className='flex w-fit justify-center gap-x-2 md:gap-x-4'>
      {Array.from({ length: 5 }, (_, index) => (
        <Image
          key={index}
          src='/gruzo_dev_brand.png'
          alt='gruzo dev brand'
          width={size}
          height={size}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  )
  return (
    <div className={tailwindClassMerge(`flex flex-col justify-center items-center relative w-full ${className}`)}>
      <p className='py-2 description text-center'>Zaufały nam osoby i zespoły w firmach na całym świecie!</p>
      {renderBrand()}
    </div>
  )
}
export default DividerBrand