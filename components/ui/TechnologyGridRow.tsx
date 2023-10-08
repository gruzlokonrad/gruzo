import { TechnologyLogo } from '@/components/ui/TechnologyLogo'
import { TechnologyLogoProps } from '@/components/features/TechnologyStack'

export const TechnologyGridRow = ({ data }: { data: TechnologyLogoProps[] }) => {
  return (
    <div className='grid grid-cols-4 grid-rows-2 gap-6 lg:gap-x-2 lg:gap-y-1 p-2 lg:px-1 lg:py-2 lg:mx-auto'>
      {data.map((item, index) => {
        return (
          <TechnologyLogo
            key={item.altImage}
            srcImage={item.srcImage}
            altImage={item.altImage}
            large={item.large}
            rectangle={item.rectangle}
          />
        )
      })}
    </div>
  )
}