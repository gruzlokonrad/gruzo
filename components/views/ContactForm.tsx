import React, { useState } from 'react'
import Button from '@/components/ui/Button'

type Form = {name: string, email:string, message:string}

const ContactForm = () => {
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    message: '',
  })
  const [msg, setMsg] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch("api/contactForm", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const { msg, success } = await res.json();
    setMsg(msg);

    if (success) {
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className='text-center'>
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
        value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
        className='contactFormInput'
      />
      {msg && 
        <ul className='text-left mx-2'>
          {msg.map((element, index) => (
            <li key={index} className='font-medium'>{element}</li>
          ))}
        </ul>
      }
      <Button type='submit' className='text-brand-white bg-brand-red rounded-3xl mb-6'>Wyślij</Button>
    </form >
  )
}

export default ContactForm