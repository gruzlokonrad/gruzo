import React from 'react'
import ContainerModule from '@/components/features/containerModule/ContainerModule'
import ShortDescription from '@/components/ui/ShortDescription'
import DividerBrand from '@/components/ui/DividerBrand'
import { useResize } from '@/hooks/useResize'
import TwoColumnsGridWithImageLayout from '@/components/layouts/TwoColumnsGridWithImageLayout'

const HeroModule = () => {
  const { isMobile } = useResize()

  return (
    <ContainerModule className='lg:pb-54 2xl:pb-72' bgToRight>
      <TwoColumnsGridWithImageLayout
        textContent={
          <>
            <h1 className='header-1'>Odkryj nasze usługi</h1>
            <ShortDescription header='Strony internetowe dla małych firm'>
              Strona internetowa to doskonały sposób na zwiększenie widoczności dla małej firmy. Szczegółowe informacje na temat obecnych klientów - to tylko jedna z wielu korzyści. Dowiedz się kto i dlaczego korzysta z Twoich usług, oraz co jeszcze moze od Ciebie kupić.
            </ShortDescription>
          </>
        }
        imageContent={{ path: '/work_gruzo.png', alt: 'work flow gruzo dev' }}
      />
      <DividerBrand size={isMobile ? 40 : 50} className={`${isMobile && '-bottom-10 sm:-bottom-16'}`} />
    </ContainerModule>
  )
}

export default HeroModule