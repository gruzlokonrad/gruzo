import { tailwindClassMerge } from "@/utils/tailwindClassMerge"
import { TechnologyLogoProps } from "@/components/features/TechnologyStack"
import Image from 'next/image'

export const TechnologyLogo = ({ srcImage, altImage, large, rectangle }: TechnologyLogoProps) => {
  return (
    <div className={tailwindClassMerge(`
      relative 
      flex justify-center items-center
      shadow-lg
      border
      m-auto
      rounded-lg
      bg-white
      ${!rectangle && (!large
        // SQUARE SMALL
        ? 'h-[20vw] sm:h-[17vw] md:h-[14vw] lg:h-[10vw] aspect-square'
        // SQUARE LARGE
        : 'h-[43vw] sm:h-[36vw] md:h-[29vw] lg:h-[22vw] aspect-square col-span-2 row-span-2'
      )} 
      ${rectangle
      // RECTANGLE
      && 'h-[20vw] w-[43vw] sm:h-[16vw] sm:w-[36vw] md:h-[14vw] md:w-[29vw] lg:h-[11vw] lg:w-[22vw] col-span-2'
      }
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