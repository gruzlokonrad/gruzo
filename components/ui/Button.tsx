import { tailwindClassMerge } from '@/utils/tailwindClassMerge'
import React from 'react'

type Button = 'submit' | 'button'
interface IButton {
  children: React.ReactNode,
  type: Button,
  className?: string,
  outlined?: boolean
}

const Button = ({ children, type, className, outlined = false }: IButton) => {
  return (
    <button type={type}
      className={tailwindClassMerge(`
        px-4 py-3 
        my-2 lg:my-0 lg:mx-2
        text-center text-brand-red
        font-semibold
        rounded-full
        bg-brand-white
        w-full lg:w-1/5 max-w-sm lg:max-w-none min-w-fit
        transition-all
        lg:hover:scale-110 hover:lg:mx-3
        ${outlined && 'bg-transparent text-brand-white border-brand-white border'}
        ${className}
      `)}
    >{children}</button>
  )
}

export default Button