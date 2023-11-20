import React from 'react'
import Image from 'next/image'
import { ContactModal } from '@/declaration/components/contact/modals/ContactModal'
import { useContactModal } from '@/declaration/components/contact/hooks/useContactModal'

export const Email = (): JSX.Element => {
  const contactModal = useContactModal()

  const handleContactClick = (): void => {
    contactModal.onOpen()
  }

  return (
    <>
      <Image
        className="hover:scale-110 transition duration-500 cursor-pointer"
        src="/Logos/Email.svg"
        alt="email"
        height={32}
        width={32}
        onClick={handleContactClick}
      />
      <ContactModal />
    </>
  )
}
