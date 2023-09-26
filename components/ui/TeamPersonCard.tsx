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
    <div className='
      
      '>
      <div className='
        w-full sm:w-52 md:w-40 lg:w-52 xl:w-64 2xl:w-80
        aspect-square
        shadow-[0px_2px_10px] shadow-slate-200 
        mb-2 
        rounded-lg 
        border p-1 
        mx-auto 
        flex items-center justify-center
      '>
        <div className='w-[91%] h-[91%] flex items-center rounded-full relative border'>
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
        w-full sm:w-52 md:w-40 lg:w-52 xl:w-64 2xl:w-80
        mx-auto
      '>
        <div className='description font-medium'>{name}</div>
        <div className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl'>{position}</div>
      </div>
    </div>
  )
}
