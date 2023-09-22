import React from 'react'
import ServicesTile from '../views/ServicesTile'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'

const ServicesModule = ({className}:{className?: string}) => {
  const servicesTilesContent = [
    {
      header: 'Strony internetowe',
      desc: 'Zastosuj nasze strategie marketingowe, aby skutecznie pozyskać nowych klientów i rozwinąć swoją bazę odbiorców.',
      srcImage: '/work_gruzo.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: true,
      extendContent: false,
      link: '/www'
    },
    {
      header: 'Projekty graficzne',
      desc: 'Wykorzystaj dane i analizy rynkowe do dostosowania oferty produktów oraz usług, co pomoże Ci zwiększyć skuteczność sprzedaży i osiągnąć lepsze wyniki.',
      srcImage: '/work_gruzo.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: false,
      // extendContent: true,
      link: '/design'
    },
    {
      header: 'Optymalizacja SEO',
      desc: 'Wdrażaj strategie SEO, aktywnie angażuj się w media społecznościowe, oraz dbaj o pozytywne relacje z klientami, aby konsekwentnie budować mocną i wiarygodną obecność online.',
      srcImage: '/seo_gruzo_dev.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: true,
      extendContent: true,
      link: '/seo'
    },
  ]

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