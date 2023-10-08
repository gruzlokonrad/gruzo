import React from 'react'
import ContainerModule from '@/components/features/containerModule/ContainerModule'
import Image from 'next/image'

type HeroServiceDescriptionProps = {
  content: {
    header: string,
    text: React.ReactNode,
    image?: { alt: string, src: string }
  }
}

export const HeroServiceDescription = ({ content: { header, text } }: HeroServiceDescriptionProps) => {
  return (
    <ContainerModule bgToRight className=''>
      {/* --- HEADER --- */}
      <h1 className='header-1'>{header}</h1>

      {/* --- CONTAINER --- */}
      <div className='lg:flex'>

        {/* --- TEXT --- */}
        <div className='lg:w-1/2'>{text}</div>

        {/* --- IMAGE --- */}
        <div className='relative lg:w-1/2 h-40 md:h-60 lg:h-96 my-auto'>
          <Image
            src='/people_with_notebooks.png'
            alt='people with notebooks'
            fill sizes="100%"
            priority
            className='object-contain'
          />
        </div>
      </div>
    </ContainerModule>
  )
}
