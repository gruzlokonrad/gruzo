import React from 'react'
import ContainerModule from '../features/containerModule/ContainerModule'
import TwoColumnsGridWithImageLayout from '../layouts/TwoColumnsGridWithImageLayout'
import ContactForm from '../features/ContactForm'
import { tailwindClassMerge } from '@/utils/tailwindClassMerge'

const CallToActionModule = ({ light = false, bgToRight = true, itemsToBottom = true }) => {
  return (
    <ContainerModule bgToRight={bgToRight} itemsToBottom={itemsToBottom} light={light}>
      <TwoColumnsGridWithImageLayout
        textContent={<>
          <div className={tailwindClassMerge(`header-2`)}>Bezpłatna konsultacja</div>
          <div className={tailwindClassMerge(`header-3`)}>
            Zadaj nam dowolne pytanie. <br />
            <span className='text-brand-red'>Zamów bezpłatną konsultację.</span><br />
            Wystarczy że klikniesz w poniższy przycisk i skontaktujesz się z jednym z naszych specjalistów.
          </div>
        </>}
        imageContent={{ path: '/contact_gruzo_dev.png', alt: 'skontaktuj się z nami gruzo dev' }}
      />
      <ContactForm light={light} />
    </ContainerModule>
  )
}

export default CallToActionModule