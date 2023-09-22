import React from 'react'
import Header from '@/components/ui/Header'
import Button from '../ui/Button'

const CooperationWithUs = () => {
  return (
    <div className='container my-14 mt-20 lg:mt-0 lg:mb-24 lg:border-2 lg:border-gray-200 lg:shadow-2xl lg:rounded-2xl lg:p-20 lg:text-center bg-brand-white'>
      <h2 className='font-medium header-1'>
        Zacznij korzystać z <span className='header-1 font-medium underline'>gruzo.dev</span> już dziś
      </h2>
      <p className='mb-4 px-px header-3'>Zoptymalizuj swoją pracę!</p>
      <Button className='border-2 border-brand-red w-min' type='button'>Skontaktuj się z nami</Button>
    </div>
  )
}

export default CooperationWithUs