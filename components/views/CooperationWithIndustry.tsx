import React from 'react'
import CollaborateTile from './CollaborateTile'
import Header from '@/components/ui/Header'


const CooperationWithIndustry = () => {

  return (
    <div className='container'>
      <Header>Z jakimi branżami pracujemy?</Header>
      {/* <div className='lg:flex lg:justify-evenly'> */}
      <div className='lg:flex lg:justify-evenly lg:flex-wrap lg:gap-x-4 lg:gap-y-12'>
        <CollaborateTile
          header={'Nauczyciele'}
          desc={'Nasi klienci odczuli 40% wzrost ruchu na stronie w ciągu zaledwie sześciu miesięcy.'}
          srcImage={'/nauczyciele.png'}
          altImage={'wspolpraca z nauczycielami'}
        />
        <CollaborateTile
          header={'Sprzedawcy'}
          desc={'Dowiedz się, jak strona interenetowa może zaowocować 15% wzrostem sprzedaży w pierwszym kwartale.'}
          srcImage={'/sprzedawcy.png'}
          altImage={'wspolpraca ze sprzedawcami'}
        />
      </div>
    </div>
  )
}

export default CooperationWithIndustry