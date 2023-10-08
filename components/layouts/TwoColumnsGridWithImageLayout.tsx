import React from 'react'
import Image from 'next/image'

type ImageContent = { path: string, alt: string }

interface ITwoColumnsGridWithImageLayout {
  textContent: JSX.Element,
  imageContent: ImageContent,
}

const TwoColumnsGridWithImageLayout = ({ textContent, imageContent: { path, alt } }: ITwoColumnsGridWithImageLayout): JSX.Element => {
  return (
    <div className={`
        w-full h-full
        max-w-screen-sm lg:max-w-screen-lg
        lg:flex lg:items-center 
        lg:pl-14 xl:pl-16 2xl:pl-20
        mx-auto
      `}>
      {/* *** TEXT CONTENT *** */}
      <div className='lg:w-3/5'>
        {/* *** HEADER, TITLE, DESCRIPTION *** */}
        {textContent}
      </div>
      {/* *** IMAGE CONTENT *** */}
      <div className='relative h-[250px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] w-full lg:w-2/5'>
        {/* {imageContent} */}
        <Image src={path} alt={alt} fill sizes="100%" priority className='object-contain' />
      </div>
    </div>
  )
}

export default TwoColumnsGridWithImageLayout