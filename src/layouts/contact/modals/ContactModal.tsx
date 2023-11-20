'use client'
import { useState, useEffect } from 'react'
import { useContactModal } from '../hooks/useContactModal'
import { useForm, ValidationError } from '@formspree/react'
import { CModal } from '../CModal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ContactModal = (): JSX.Element => {
  const contactModal = useContactModal()
  const [state, handleSubmit, reset] = useForm(`${process.env.NEXT_FORMSPREE_KEY}`)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    if (state.succeeded && !state.submitting) {
      toast<unknown>('Thank you for your message!', {
        icon: '🤘',
        position: 'bottom-right',
      })
      setTimeout(() => {
        setName('')
        setEmail('')
        setMessage('')
        reset()
      }, 2000)
    }

    if (state.errors && Object.keys(state.errors).length > 0) {
      toast.error<unknown>('Error!')
    }
  }, [state])

  const handleNameChange = (e: any): void => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: any): void => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e: any): void => {
    setMessage(e.target.value)
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} autoComplete="on">
        <input
          required
          autoComplete="name"
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Name*"
          value={name}
          onChange={handleNameChange}
          className="w-full rounded-md border-2 border-neutral-800 bg-black p-2 text-base outline-none transition focus:border-2 focus:border-sky-500 disabled:cursor-not-allowed disabled:bg-neutral-900 disabled:opacity-70"
        />
        <input
          required
          autoComplete="email"
          id="email"
          type="email"
          name="email"
          placeholder="Email*"
          value={email}
          onChange={handleEmailChange}
          className="w-full rounded-md border-2 border-neutral-800 bg-black p-2 text-base outline-none transition focus:border-2 focus:border-sky-500 disabled:cursor-not-allowed disabled:bg-neutral-900 disabled:opacity-70"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          id="message"
          name="message"
          placeholder="Message*"
          value={message}
          onChange={handleMessageChange}
          className="w-full rounded-md border-2 border-neutral-800 bg-black p-2 text-base outline-none transition focus:border-2 focus:border-sky-500 disabled:cursor-not-allowed disabled:bg-neutral-900 disabled:opacity-70"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button
          type="submit"
          disabled={state.submitting || !name || !email || !message}
          data-te-ripple-init
          data-te-ripple-color="light"
          className="text-md w-full rounded-full border-2 border-purple-500 bg-blue-500 px-4 py-2 font-semibold text-white transition hover:opacity-80 "
        >
          Submit
        </button>
      </form>
    </div>
  )

  return (
    <>
      <CModal
        title="Contact me"
        isOpen={contactModal.isOpen}
        onClose={contactModal.onClose}
        body={bodyContent}
      />
      <ToastContainer autoClose={2000} />
    </>
  )
}
