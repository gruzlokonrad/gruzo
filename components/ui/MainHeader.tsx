import React from 'react'

export interface IMainHeader {
  children: string
  className?: string
}

const MainHeader = ({children, className}: IMainHeader) => {
  return (
    <h1 className={`header-1 ${className}`}>{children}</h1>
  )
}

export default MainHeader