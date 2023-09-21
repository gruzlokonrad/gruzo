import React from 'react'
import ContainerModule from '../features/containerModule/ContainerModule'
import MainHeader from '../ui/MainHeader'
import ShortDescription from '../ui/ShortDescription'
import DividerBrand from '../ui/DividerBrand'
import { useResize } from '@/hooks/useResize'
import TwoColumnsGridWithImageLayout from '../layouts/TwoColumnsGridWithImageLayout'

const HeroModule = () => {
  const { isMobile } = useResize()

  return (
    <ContainerModule bgToRight>
      <TwoColumnsGridWithImageLayout
        textContent={
          <>
            <MainHeader>Odkryj nasze usługi</MainHeader>
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