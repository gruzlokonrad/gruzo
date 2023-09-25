import React from 'react'
import JoinToUsModule from '@/components/module/JoinToUsModule'
import { HeroServiceDescription } from '@/components/views/HeroServiceDescription'
import ServicesModule from '@/components/module/ServicesModule'
import { TechnologyStack } from '@/components/views/TechnologyStack'

const page = () => {
  const serviceDescription = {
    header: 'Strony internetowe',
    text: (
      <p className='description my-4 font-normal'>
        Nasze podejście opiera się na klientocentryczności - to znaczy, że nasza praca nie kończy się po dostarczeniu gotowej witryny.
        Jesteśmy tutaj, aby Ci pomóc.
        Nasz zespół chętnie udziela wsparcia technicznego, odpowiada na Twoje pytania i pomaga w rozwiązaniu ewentualnych problemów.
        Naszym priorytetem jest Twój sukces.
      </p>
    ),
  }

  const servicesTilesContent = [
    {
      header: 'Strony internetowe',
      desc: 'Tworzymy strony internetowe, które są nie tylko piękne, ale również funkcjonalne i przyjazne dla użytkownika. Nasze strony są zoptymalizowane pod kątem wyszukiwarek, co pozwala na zwiększenie ruchu na stronie i zwiększenie sprzedaży.',
      srcImage: '/website.png',
      altImage: 'Strony internetowe',
      link: '/uslugi/strony-internetowe',
    },
    {
      header: 'Sklepy internetowe',
      desc: 'Tworzymy sklepy internetowe, które są nie tylko piękne, ale również funkcjonalne i przyjazne dla użytkownika. Nasze sklepy są zoptymalizowane pod kątem wyszukiwarek, co pozwala na zwiększenie ruchu na stronie i zwiększenie sprzedaży.',
      srcImage: '/website.png',
      altImage: 'Sklepy internetowe',
      link: '/uslugi/sklepy-internetowe',
    },
    {
      header: 'Aplikacje internetowe',
      desc: 'Tworzymy aplikacje internetowe, które są nie tylko piękne, ale również funkcjonalne i przyjazne dla użytkownika. Nasze aplikacje są zoptymalizowane pod kątem wyszukiwarek, co pozwala na zwiększenie ruchu na stronie i zwiększenie sprzedaży.',
      srcImage: '/website.png',
      altImage: 'Aplikacje internetowe',
      link: '/uslugi/aplikacje-internetowe',
    },
  ]

  return (
    <>
      <HeroServiceDescription content={serviceDescription} />
      <ServicesModule servicesTilesContent={servicesTilesContent} />
      <TechnologyStack />
      <JoinToUsModule />
    </>
  )
}

export default page