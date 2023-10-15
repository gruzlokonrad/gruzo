import React from 'react'
import ServicesTile from '../views/ServicesTile'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'

export type ServiceModuleType = {
  className?: string,
  servicesTilesContent: ServiceTileContent[],
}

export type ServiceTileContent = {
  header: string
  desc: string
  srcImage: string
  altImage: string
  className?: string
  reverse?: boolean
  extendContent?: boolean
  link?: string
}

const ServicesModule = ({ className, servicesTilesContent }: ServiceModuleType) => {
  return (
    <div
      className={tailwindClassMerge(`
        lg:flex lg:flex-col lg:justify-center h-auto lg:mx-10 ${className}
        `)}>
      {servicesTilesContent.map((serviceTile, index) => {
        return (
          <ServicesTile
            key={index}
            header={serviceTile.header}
            desc={serviceTile.desc}
            srcImage={serviceTile.srcImage}
            altImage={serviceTile.altImage}
            className={serviceTile.className}
            reverse={serviceTile.reverse}
            extendContent={serviceTile.extendContent}
            link={serviceTile.link}
          />
        )
      })}
    </div>
  )
}

export default ServicesModule