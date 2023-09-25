import { tailwindClassMerge } from "@/utils/tailwindClassMerge"
import { TechnologyLogoProps } from "@/components/views/TechnologyStack"
import Image from 'next/image'

export const TechnologyLogo = ({ srcImage, altImage, large, rectangle }: TechnologyLogoProps) => {
  return (
    <div className={tailwindClassMerge(`
      relative 
      flex justify-center items-center
      shadow
      m-auto
      rounded-lg
      ${!rectangle && !large ? 'aspect-square h-20' : 'aspect-square h-44'} 
      ${rectangle && 'h-20 w-44'}
    `)}>
      <Image
        src={srcImage}
        alt={altImage}
        fill
        className='object-contain p-2'
      />
    </div>
  )
}