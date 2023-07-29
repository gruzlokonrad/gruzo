'use client'
import Button from '@/components/ui/button/button'
import Input from '@/components/ui/input/input'
import React, { useEffect, useState } from 'react'

interface IEmailForm {
  labelButton: string
  labelForm: string
}

const EmailForm = ({ labelButton, labelForm }: IEmailForm) => {
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<string[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);

    if (success) {
      setEmail("")
      setSuccess(success)
    }
  }

  return (
    <div className='my-6 max-w-sm'>
      <label htmlFor="email">
        <p className='w-fit lg:basis-full cursor-pointer'>{labelForm}</p>
      </label>
      <form onSubmit={handleSubmit} className='lg:flex box-border mt-2.5' noValidate>
        <Input
          placeholder='Wpisz adres email*'
          name='email'
          type='email'
          value={email}
          setValue={setEmail}
          outlined
        />
        <Button type="submit">{labelButton}</Button>
      </form>
      {/* Message */}
      <div className="bg-slate-100 flex flex-col lg:mr-2">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${success ? "text-green-600" : "text-red-adomi"} px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  )
}

export default EmailForm