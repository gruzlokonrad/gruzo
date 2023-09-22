import { tailwindClassMerge } from '@/utils/tailwindClassMerge'
import React from 'react'

interface IHeader {
  children: string | (string | JSX.Element)[],
  className?: string
}

const Header = ({ children, className }: IHeader) => {
  return (
    <h2 className={tailwindClassMerge(`header-2 ${className}`)}>{children}</h2>
  )
}

export default Header