import React from 'react'
import StepElement from '../ui/StepElement'
import Header from '../ui/Header'
import Image from 'next/image'

const HowToWorkWithUs = () => {
  const stepList = [
    'Skontaktuj się z jednym z naszych specjalistów i umów się na krótką sesję wprowadzającą.',
    'Nasz specjalista przygotuje spersonalizowany pakiet dopasowany do Twoich potrzeb.',
    'Jesteś gotowy do inteligentnej pracy dzięki zoptymalizowanym operacjom.',
  ]
  return (
    <div className='container rounded lg:shadow-xl lg:border-2 border-gray-200 p-6 lg:flex lg:justify-evenly lg:gap-10 max-w-screen-xl'>
      <div className='lg:w-2/5 lg:flex lg:flex-col'>
        <div className='order-2 lg:my-6'>
          <Header>Jak podjąć współpracę?</Header>
          <p className='description lg:max-w-sm '>Wystarczą 3 proste kroki, aby zoptymalizować działanie Twojej firmy.</p>
        </div>
        <div className='relative my-6 w-full lg:w-[450px] h-[200px] lg:h-[300px] mx-auto lg:ml-0 rounded-xl overflow-hidden'>
          <Image
            src={'/work_with_gruzo_dev.jpeg'}
            alt={'how to work with gruzo dev'}
            fill
            className='lg:order-1 object-contain lg:object-cover'
          />
        </div>
      </div>
      {/* ***LIST STEPS*** */}
      <div className='my-auto lg:w-1/3'>
        {stepList.map((stepDescription, index) => (
          <StepElement key={index} index={index + 1}>{stepDescription}</StepElement>
        ))}
      </div>
    </div>
  )
}

export default HowToWorkWithUs