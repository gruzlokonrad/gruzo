import React from 'react'
import ShortDescription from '@/components/ui/ShortDescription'
import Image from 'next/image'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'
import Button from '../ui/Button'
import ButtonCTA from '../ui/ButtonCTA'

interface ICollaborateTile {
  header: string,
  desc: string,
  srcImage: string,
  altImage: string,
  reverse?: boolean,
  className?: string,
  extendContent?: boolean,
  link?: string,
}

const CollaborateTile = ({ header, desc, srcImage, altImage, reverse = false, className, extendContent = false, link }: ICollaborateTile) => {

  return (
    <article className={tailwindClassMerge(`
      shadow-2xl 
      mx-[8%] my-10 lg:my-0 md:mx-auto
      p-4 lg:py-10 lg:px-14
      rounded-2xl
      md:max-w-screen-md lg:max-w-sm
      bg-brand-white
      border
      ${!extendContent && 'min-h-[400px]'}
      ${className}
    `)}>
      {/* *** TEXT CONTENT ***  */}
      <div className={tailwindClassMerge(`
        lg:my-auto
      ${reverse && 'lg:text-left order-2'}
      `)}>
        <ShortDescription header={header} className=''>{desc}</ShortDescription>
        {link &&
          <ButtonCTA link={link}
            className={tailwindClassMerge(`
            rounded-full 
            bg-brand-white 
            border-2 border-black 
            text-black font-medium text-center
            text-md 
            w-48
            mt-5 mb-10 lg:ml-auto
            ${reverse && 'lg:ml-0 lg:mr-auto'}
          `)}>Przeczytaj więcej</ButtonCTA>
        }
      </div>
      {/* *** Image WRAPPER *** */}
      <div className='
        relative
        shadow-md 
        rounded-2xl 
        mt-6 mx-auto lg:mt-10
        max-w-xs 
        h-40 lg:h-44
      '>
        <Image src={srcImage} alt={altImage} className='object-contain' fill />
      </div>
    </article>
  )
}

export default CollaborateTile