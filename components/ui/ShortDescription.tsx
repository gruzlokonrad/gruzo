import { tailwindClassMerge } from '@/utils/tailwindClassMerge'
import React from 'react'


interface IShortDescription {
  header: string,
  children: string | (string | JSX.Element)[],
  className?: string,
}

const ShortDescription = ({ header, children, className }: IShortDescription) => {
  return (
    <div className={tailwindClassMerge(className)}>
      <div className='header-2'>{header}</div>
      <div className='description my-10'>{children}</div>
    </div>
  )
}

export default ShortDescription