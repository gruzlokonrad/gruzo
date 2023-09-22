import React, { use, useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
// import Checkbox from '../ui/Checkbox'
import Link from 'next/link'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Form = { name: string, email: string, textMessage: string, acceptedTerms: boolean }
interface IContactForm { className?: string }
interface IResponseMessages { msg: [] | string[] }

const ContactForm = ({ className }: IContactForm) => {
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    textMessage: '',
    acceptedTerms: false,
  })
  const [msg, setMsg] = useState<string[]>([]);
  const [success, setSuccess] = useState<boolean>()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, form: Form): Promise<void> => {
    e.preventDefault()
    const res = await fetch("api/sendEmail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const { msg, success } = await res.json();

    if (msg) {
      setMsg(msg);
    }

    if (success !== undefined) {
      setSuccess(success);
    }

    if (success) {
      setForm({
        name: '',
        email: '',
        textMessage: '',
        acceptedTerms: false,
      })
    }
  }
  const Terms = () => {
    const setCheck = () => (setForm({ ...form, acceptedTerms: !form.acceptedTerms }))

    return (
      <div className='flex my-4'>
        <label className='font-normal cursor-pointer lg:text-justify mr-10 flex'>
          <div className='h-min'>
            <button
              title='Accept the terms and conditions'
              type='button'
              id='terms'
              onClick={setCheck}
              className={tailwindClassMerge(`
            w-6 h-6 
            border-2 border-brand-red rounded-full
            m-2
            ${form.acceptedTerms && 'bg-brand-red'}
          `)}
            >
              {form.acceptedTerms && <FontAwesomeIcon icon={faCheck} className='text-brand-white text-center w-full text-lg' />}
            </button>
          </div>
          <div>
            Wyrażasz zgodę na kontakt telefoniczny w celu obsługi niniejszego zgłoszenia. Wyrażasz zgodę na otrzymywanie informacji handlowych środkami komunikacji elektronicznej wysyłanymi przez gruzo.dev oraz na wykorzystanie komunikacji email w celach marketingowych (
            <Link href='/terms-and-conditions.txt' className='underline'>
              Polityka Prywatności
            </Link>
            ).
          </div>
        </label>
      </div>

    )
  }
  const ResponseMessages = ({ msg }: IResponseMessages) => {
    return (
      <ul className={`text-left mx-2 mb-2 ${success ? 'text-green-600' : 'text-brand-red'}`}>
        {msg.map((element, index) => (
          <li key={index} className='font-medium'>{element}</li>
        ))}
      </ul>
    )
  }

  return (
    <form onSubmit={e => handleSubmit(e, form)} className={tailwindClassMerge(`text-left max-w-sm lg:max-w-lg mx-auto flex flex-col ${className}`)}>
      {/**** INPUTS FORM ****/}
      <label className='font-normal mx-2' htmlFor='name'>Imię i nazwisko</label>
      <input
        type='text'
        placeholder='Wpisz imię i nazwisko'
        name='name'
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        className='contactFormInput'
      />
      <label className='font-normal mx-2' htmlFor='email'>E-mail</label>
      <input
        type='email'
        placeholder='Wpisz e-mail'
        name='email'
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        className='contactFormInput'
      />
      <label className='font-normal mx-2' htmlFor='message'>Wiadomość</label>
      <textarea
        rows={4}
        cols={40}
        placeholder='Wpisz wiadomość'
        name='message'
        value={form.textMessage}
        onChange={e => setForm({ ...form, textMessage: e.target.value })}
        className='contactFormInput'
      />
      <Terms /> {/**** TERMS AND CONDITIONS ****/}
      {!!msg.length && <ResponseMessages msg={msg} />} {/**** RESPONSE MESSAGES ****/}
      <Button
        type='submit'
        className='text-brand-white bg-brand-red rounded-3xl mb-6 lg:w-full max-w-lg outline-none'
      >
        Wyślij
      </Button>
    </form >
  )
}

export default ContactForm