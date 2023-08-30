import { tailwindClassMerge } from '@/app/utils/tailwindClassMerge'
import React from 'react'

type Button = 'submit'
interface IButton {
  children: React.ReactNode,
  type: Button,
  className?: string,
}

const Button = ({ children, type, className }: IButton) => {
  return (
    <button type={type}
      className={tailwindClassMerge(`
        px-4 py-3 
        my-2 lg:my-0 lg:mx-2
        text-center text-red-adomi
        font-semibold
        bg-white-adomi
        border border-1 border-white-adomi
        w-full lg:w-1/5 max-w-sm min-w-fit
        transition-all
        lg:hover:scale-110 hover:lg:mx-3
        ${className}
      `)}
    >{children}</button>
  )
}

export default Button