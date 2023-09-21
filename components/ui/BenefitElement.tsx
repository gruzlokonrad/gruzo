import Image from 'next/image'
import React from 'react'
import Header from './Header'

interface IBenefitElement {
  children: string,
}

const BenefitElement = ({children}: IBenefitElement) => {
  return (
    <div className='flex items-center w-fit'>
      <Image src='/heart.svg' width={50} height={50} alt='benefits' className='mx-2' />
      {children}
    </div>
  )
}

export default BenefitElement