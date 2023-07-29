import React from 'react'

type Button = 'submit'
interface IButton {
  children: React.ReactNode
  type: Button
}

const Button = ({ children, type }: IButton) => {
  return (
    <button type={type}
      className='
        px-4 py-3 
        my-2 lg:my-0 lg:mx-2
        text-center text-red-adomi
        font-semibold
        bg-white-adomi
        border border-1 border-white-adomi
        w-full lg:w-1/5 max-w-sm min-w-fit
        transition-all
        hover:scale-110 hover:lg:mx-3
      '
    >{children}</button>
  )
}

export default Button