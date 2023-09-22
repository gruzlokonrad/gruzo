import React from 'react'

interface IStepElement {
  index: number,
  children: string,
}

const StepElement = ({children, index}: IStepElement) => {
  return (
    <div className='border-b-2 border-gray-200 py-4 lg:py-8 last:border-b-0 last:mb-0'>
      <h3 className='header-3 font-semibold'>Krok {index}</h3>
      <div>{children}</div>
    </div>
  )
}

export default StepElement