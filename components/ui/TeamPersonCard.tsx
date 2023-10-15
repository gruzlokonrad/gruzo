import React from 'react'
import Image from 'next/image'

type TeamPersonCardType = {
  id: string,
  name: string,
  position: string,
  image: string,
}

export const TeamPersonCard = ({ id, name, position, image }: TeamPersonCardType) => {
  return (
    <div className=''>
      <div className='
        w-full sm:w-52 md:w-32 lg:w-40 xl:w-56 2xl:w-64
        shadow-[0px_4px_8px] shadow-gray-300 
        aspect-square
        mb-2 
        rounded-3xl
        p-1 
        mx-auto 
        flex items-center justify-center
        bg-brand-white
      '>
        <div className='w-[91%] h-[91%] flex items-center rounded-full relative border-2 border-gray-500'>
          <Image
            src={image}
            alt={name}
            fill sizes="100%"
            className='object-contain rounded-full'
          />
        </div>
      </div>
      <div className='
        px-1
        w-full sm:w-52 md:w-32 lg:w-40 xl:w-56 2xl:w-64
        mx-auto
      '>
        <div className='description font-medium'>{name}</div>
        <div className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl'>{position}</div>
      </div>
    </div>
  )
}
