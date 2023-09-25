import React from 'react'
import { TechnologyGridRow } from '@/components/ui/TechnologyGridRow'

export type TechnologyLogoProps = {
  srcImage: string,
  altImage: string,
  large?: boolean,
  rectangle?: boolean,
}

const technologyData = [
  [
    {
      srcImage: '/technology/mysql.png',
      altImage: 'Mysql',
      large: true,
      rectangle: false,
    },
    {
      srcImage: '/technology/electron.png',
      altImage: 'Electron',
      large: false,
      rectangle: false,
    },
    {
      srcImage: '/technology/mongodb.png',
      altImage: 'MongoDB',
      large: false,
      rectangle: false,
    },
    {
      srcImage: '/technology/remix.png',
      altImage: 'Remix',
      large: false,
      rectangle: true,
    }
  ],
  [
    {
      srcImage: '/technology/react.png',
      altImage: 'React',
      large: true,
      rectangle: false,
    },
    {
      srcImage: '/technology/wordpress.png',
      altImage: 'Wordpress',
      large: false,
      rectangle: false,
    },
    {
      srcImage: '/technology/next.png',
      altImage: 'Nextjs',
      large: false,
      rectangle: false,
    },
    {
      srcImage: '/technology/nodejs.png',
      altImage: 'Nodejs',
      large: false,
      rectangle: true,
    }
  ],
]

export const TechnologyStack = () => {
  return (
    <section className='container'>
      <h2 className='header-1 font-normal'>Nasze Technologie</h2>
      <div>
        {technologyData.map((row, index) => (
          <TechnologyGridRow key={index} data={row} reversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  )
}
