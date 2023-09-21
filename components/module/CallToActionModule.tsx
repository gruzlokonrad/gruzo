import React from 'react'
import ContainerModule from '../features/containerModule/ContainerModule'
import TwoColumnsGridWithImageLayout from '../layouts/TwoColumnsGridWithImageLayout'
import ContactForm from '../features/ContactForm'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'

const CallToActionModule = () => {
  return (
    <ContainerModule bgToRight itemsToBottom >
      <TwoColumnsGridWithImageLayout
        textContent={<>
          <div className={tailwindClassMerge(`header-2 text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl`)}>Bezpłatna konsultacja</div>
          <div className={tailwindClassMerge(`description`)}>
            Zadaj nam dowolne pytanie. <br />
            <span className='text-brand-red'>Zamów bezpłatną konsultację.</span><br />
            Wystarczy że klikniesz w poniższy przycisk i skontaktujesz się z jednym z naszych specjalistów.
          </div>
        </>}
        imageContent={{ path: '/contact_gruzo_dev.png', alt: 'skontaktuj się z nami gruzo dev' }}
      />
      <ContactForm />
    </ContainerModule>
  )
}

export default CallToActionModule