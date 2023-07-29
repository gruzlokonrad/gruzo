import clsx from 'clsx'
import React from 'react'

interface IContainer {
  children: React.ReactNode,
  className?: string
}

const Container = ({ children, className }: IContainer) => {
  return (
    <div className={clsx('container', className)}>
      {children}
    </div>
  )
}

export default Container