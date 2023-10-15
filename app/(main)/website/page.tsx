import React from 'react'
import JoinToUsModule from '@/components/module/JoinToUsModule'
import { HeroServiceDescription } from '@/components/views/HeroServiceDescription'
import ServicesModule, { ServiceTileContent } from '@/components/module/ServicesModule'
import { TechnologyStack } from '@/components/features/TechnologyStack'
import { OurProjects } from '@/components/views/OurProjects/OurProjects'

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

  const servicesTilesContent: ServiceTileContent[] = [
    {
      header: 'Wizytówki',
      desc: 'Tworzymy strony internetowe, które są nie tylko piękne, ale również funkcjonalne i przyjazne dla użytkownika. Nasze strony są zoptymalizowane pod kątem wyszukiwarek, co pozwala na zwiększenie ruchu na stronie i zwiększenie sprzedaży.',
      srcImage: '/wizytowki.svg',
      altImage: 'Strony internetowe',
    },
    {
      header: 'Landing page',
      desc: 'Tworzymy strony internetowe, które są nie tylko piękne, ale również funkcjonalne i przyjazne dla użytkownika. Nasze strony są zoptymalizowane pod kątem wyszukiwarek, co pozwala na zwiększenie ruchu na stronie i zwiększenie sprzedaży.',
      srcImage: '/landingpages.svg',
      altImage: 'Strony internetowe',
      reverse: true,
    },
    {
      header: 'Strony firmowe',
      desc: 'Tworzymy sklepy internetowe, które są nie tylko piękne, ale również funkcjonalne i przyjazne dla użytkownika. Nasze sklepy są zoptymalizowane pod kątem wyszukiwarek, co pozwala na zwiększenie ruchu na stronie i zwiększenie sprzedaży.',
      srcImage: '/strony_firmowe.svg',
      altImage: 'Sklepy internetowe',
    },
    {
      header: 'Aplikacje internetowe',
      desc: 'Tworzymy aplikacje internetowe, które są nie tylko piękne, ale również funkcjonalne i przyjazne dla użytkownika. Nasze aplikacje są zoptymalizowane pod kątem wyszukiwarek, co pozwala na zwiększenie ruchu na stronie i zwiększenie sprzedaży.',
      srcImage: '/aplikacje_webowe.svg',
      altImage: 'Aplikacje internetowe',
      reverse: true,
    },
  ]

  return (
    <>
      <HeroServiceDescription content={serviceDescription} />
      <ServicesModule servicesTilesContent={servicesTilesContent} />
      <TechnologyStack />
      <OurProjects />
      <JoinToUsModule />
    </>
  )
}

export default page