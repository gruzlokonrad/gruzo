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
      <div className={tailwindClassMerge(`header-2 text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-left container`)}>Skontaktuj się</div>
      <div className='flex flex-col lg:flex-row'>
        <ContactForm className='' />
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:w-2/5 lg:h-[450px] my-auto'>
          <Image src={'/send_email_image.png'} alt={'skontaktuj się z nami gruzo dev'} fill className='object-cover' />
          {/* <Image src={'/contact_with_us.png'} alt={'skontaktuj się z nami gruzo dev'} fill className='object-contain' /> */}
        </div>
      </div>
    </ContainerModule>
  )
}

export default JoinToUsModule