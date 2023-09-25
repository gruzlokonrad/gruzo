import React from 'react'
import BenefitElement from '../ui/BenefitElement'
import ContainerModule from '../features/containerModule/ContainerModule'
import Header from '../ui/Header'
import Image from 'next/image'

const Benefits = () => {
  const benefits = [
    'Zwiększ sprzedaż',
    'Zainwestuj w siebie',
    'Pozyskaj klientów',
    'Bądź zauważalny w internecie',
    'Stwórz własną markę',
  ]

  return (
    <ContainerModule bgToRight light className='lg:p-24 lg:mb-20 lg:mt-28'>
      <div className='max-w-screen-sm lg:max-w-screen-md mx-auto'>
        <Header className='lg:mx-8'>Dlaczego warto?</Header>
        <div className='lg:flex lg:items-center'>
          <figure className='relative w-full h-72 lg:w-1/2'>
            <Image src='/benefits.png' fill alt='benefits gruzo dev' className='object-contain' />
          </figure>
          <div className='lg:mx-auto mt-6 lg:mt-2'>
          <h3 className='header-3'>Znajdź odpowiedź!</h3>
            {benefits.map(benefit => (
              <BenefitElement key={benefit}>{benefit}</BenefitElement>
            ))}
          </div>
        </div>
      </div>
    </ContainerModule>
  )
}

export default Benefits