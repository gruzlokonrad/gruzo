'use client'
import React from 'react'
import { TechnologyGridRow } from '@/components/ui/TechnologyGridRow'
import { useResize } from '@/hooks/useResize'

export type TechnologyLogoProps = {
  srcImage: string,
  altImage: string,
  large?: boolean,
  rectangle?: boolean,
}

const technologyData = [
  // 1. If rectangle === true 
  //    then large property does not matter
  // 2. The order of the rows determines the display order
  // 3. Single row should contain 4 elements
  // 4. Single array is equal to single row
  [
    {
      srcImage: '/technology/mysql.png',
      altImage: 'Mysql',
    },
    {
      srcImage: '/technology/electron.png',
      altImage: 'Electron',
    },
    {
      srcImage: '/technology/mongodb.png',
      altImage: 'MongoDB',
    },
    {
      srcImage: '/technology/remix.png',
      altImage: 'Remix',
    },
  ],
  [
    {
      srcImage: '/technology/wordpress.png',
      altImage: 'Wordpress',
    },
    {
      srcImage: '/technology/next.png',
      altImage: 'Nextjs',
    },
    {
      srcImage: '/technology/react.png',
      altImage: 'React',
    },
    {
      srcImage: '/technology/nodejs.png',
      altImage: 'Nodejs',
    }
  ],

]

export const TechnologyStack = () => {
  return (
    <section>
      <h2 className='container header-1 font-medium'>Nasze Technologie</h2>
      <div className={`container lg:max-w-full lg:flex lg:flex-wrap lg:justify-start lg:bg-brand-red/30`}>
        {technologyData.map((row, index) => {
          const { isMobile, isDesktop } = useResize()
          if (index % 2 === 0) {
            {
              row = row.map((item, index) => {
                switch (index) {
                  case 0:
                    return { ...item, large: true, rectangle: false }
                  case 3:
                    return { ...item, large: false, rectangle: true }
                  default:
                    return item
                }
              })
            }
          }

          if (index % 2 !== 0) {
            {
              row = row.map((item, index) => {
                switch (index) {
                  case 0:
                    return { ...item, large: isDesktop ? true : false, rectangle: isMobile ? true : false }
                  case 1:
                    return { ...item, large: isMobile ? true : false, rectangle: isDesktop ? true : false }
                  default:
                    return item
                }
              })
            }
          }

          return (
            <TechnologyGridRow key={index} data={row} />
          )
        })}
      </div>
    </section>
  )
}
