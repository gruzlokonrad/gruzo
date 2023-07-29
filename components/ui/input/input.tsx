import { clsx } from 'clsx'
import React from 'react'

type typeButton = 'text' | 'email'

interface IInput {
  placeholder: string
  name: string
  outlined?: boolean
  className?: string
  type: typeButton,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  value: string
}

const Input = ({ placeholder, name, outlined, className, type, value, setValue }: IInput) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={e => setValue(e.target.value)}
      className={clsx(
        className,
        {'bg-transparent': outlined},
        'px-4 py-3',
        'placeholder:text-white-adomi/75 placeholder:text-center', 
        'border border-1 border-white-adomi',
        'w-full lg:w-3/4 max-w-sm',
        'text-center',
        'transition-all',
        'outline-none focus:scale-105 focus:mr-3',
      )}
    />
  )
}

export default Input