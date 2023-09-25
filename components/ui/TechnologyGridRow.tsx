import { TechnologyLogo } from '@/components/ui/TechnologyLogo'
import { TechnologyLogoProps } from '@/components/views/TechnologyStack'

export const TechnologyGridRow = ({ data, reversed }: { data: TechnologyLogoProps[], reversed?: boolean }) => {
  return (
    <div className='grid grid-cols-4 grid-rows-1 gap-4 py-2'>
      <div className={`h-20 col-span-2 row-span-2 ${reversed && 'order-2'} `}>
        <TechnologyLogo
          srcImage={data[0].srcImage}
          altImage={data[0].altImage}
          large={data[0].large}
          rectangle={data[0].rectangle}
        />
      </div>
      <div className='col-span-2 grid grid-cols-2 grid-rows-2 gap-4'>
        {data.map((item, index) => {
          if (index === 0) return null
          return (
            <div key={index} className='h-20'>
              <TechnologyLogo
                srcImage={item.srcImage}
                altImage={item.altImage}
                large={item.large}
                rectangle={item.rectangle}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}