import React from 'react'
import Header from '@/components/ui/Header'
import Button from '../ui/Button'

const CooperationWithUs = () => {
  return (
    <div className='
      my-14 mt-20 lg:mt-0 lg:mb-24 
      max-w-screen-lg 
      mx-auto
      lg:shadow-2xl 
      lg:rounded-2xl 
      lg:pb-12
      lg:text-center 
      lg:border-2 lg:border-gray-200 
      bg-brand-white
    '>
      <h2 className='font-medium header-2'>
        Zacznij korzystać z <span className='underline'>gruzo.dev</span> już dziś
      </h2>
      <p className='mb-4 px-px header-3'>Zoptymalizuj swoją pracę!</p>
      <Button className='border-2 border-brand-red w-min' type='button'>Skontaktuj się z nami</Button>
    </div>
  )
}

export default CooperationWithUs