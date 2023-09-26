'use client'
import React from 'react'
import ContainerModule from '../features/containerModule/ContainerModule'
import ContactForm from '../features/ContactForm'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'
import Image from 'next/image'
import { useResize } from '@/hooks/useResize'
import CooperationWithUs from '@/components/views/CooperationWithUs'

const JoinToUsModule = () => {
  const { isDesktop } = useResize()

  return (
    <ContainerModule itemsToBottom className={`lg:pb-20`}>
      {isDesktop && <CooperationWithUs />}
      <div className={tailwindClassMerge(`header-2 lg:pl-0 text-left container`)}>Skontaktuj się</div>
      <div className='flex flex-col lg:flex-row'>
        <ContactForm className='lg:w-1/2' />
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:w-1/2 lg:h-[400px] my-auto'>
          {/* <Image src={'/send_email_image.png'} alt={'skontaktuj się z nami gruzo dev'} fill sizes="100%" className='object-cover' /> */}
          <Image src={'/contact_with_us.png'} alt={'skontaktuj się z nami gruzo dev'} fill sizes="100%" className='object-contain' />
        </div>
      </div>
    </ContainerModule>
  )
}

export default JoinToUsModule