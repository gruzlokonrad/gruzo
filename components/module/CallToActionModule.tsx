import React from 'react'
import ContainerModule from '../features/containerModule/ContainerModule'
import TwoColumnsGridWithImageLayout from '../layouts/TwoColumnsGridWithImageLayout'
import ShortDescription from '../ui/ShortDescription'
import ContactForm from '../views/ContactForm'

const CallToActionModule = () => {
  return (
    <ContainerModule bgToRight itemsToBottom>
      <TwoColumnsGridWithImageLayout
        textContent={
          <ShortDescription header='Bezpłatna konsultacja'>
            Zadaj nam dowolne pytanie. <br />
            <span className='text-brand-red'>Zamów bezpłatną konsultację.</span><br />
            Wystarczy że klikniesz w poniższy przycisk i skontaktujesz się z jednym z naszych specjalistów.
          </ShortDescription>
        }
        imageContent={{ path: '/contact_gruzo_dev.png', alt: 'skontaktuj się z nami gruzo dev' }}
      />
      <ContactForm />
    </ContainerModule>
  )
}

export default CallToActionModule