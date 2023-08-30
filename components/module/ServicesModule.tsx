'use client'
import React, { useLayoutEffect, useRef } from 'react'
import ServicesTile from '../views/ServicesTile'
import { tailwindClassMerge } from '@/app/utils/tailwindClassMerge'
import { useResize } from '@/app/hooks/useResize'
import { useParamModuleContext } from '@/app/context/paramsModule'

const ServicesModule = () => {
  const servicesTilesContent = [
    {
      header: 'Strony internetowe',
      desc: 'Zastosuj nasze strategie marketingowe, aby skutecznie pozyskać nowych klientów i rozwinąć swoją bazę odbiorców.',
      srcImage: '/work_gruzo.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: true,
      extendContent: false,
    },
    {
      header: 'Projekty graficzne',
      desc: 'Wykorzystaj dane i analizy rynkowe do dostosowania oferty produktów oraz usług, co pomoże Ci zwiększyć skuteczność sprzedaży i osiągnąć lepsze wyniki.',
      srcImage: '/work_gruzo.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: false,
      // extendContent: true,
    },
    {
      header: 'Optymalizacja SEO',
      desc: 'Wdrażaj strategie SEO, aktywnie angażuj się w media społecznościowe, oraz dbaj o pozytywne relacje z klientami, aby konsekwentnie budować mocną i wiarygodną obecność online.',
      srcImage: '/seo_gruzo_dev.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: true,
      extendContent: true,
    },
  ]
  const ref: React.MutableRefObject<null> = useRef(null)
  const { isDesktop } = useResize()
  const { paramModule, setParamModule } = useParamModuleContext()

  useLayoutEffect(() => {
    const heightElement = ref?.current?.clientHeight
    setParamModule({
      totalHeight: heightElement,
      mainArea: heightElement * 0.66,
      extendArea: heightElement * 0.44,
      singlePadding: (heightElement * 0.44) / 2,
    });
  }, [ref])

  return (
    <div ref={ref}
      style={{ height: (isDesktop && paramModule) ? (paramModule.mainArea) : 'auto' }}
      className={tailwindClassMerge(`
        lg:flex lg:flex-col lg:justify-center
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
          />
        )
      })}
    </div>
  )
}

export default ServicesModule