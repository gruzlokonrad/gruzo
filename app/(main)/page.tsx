'use client'
import HeroModule from '@/components/module/HeroModule'
import ServicesModule from '@/components/module/ServicesModule'
import CallToActionModule from '@/components/module/CallToActionModule'
import CooperationWithIndustry from '@/components/views/CooperationWithIndustry'
import Benefits from '@/components/views/Benefits'
import Recommendations from '@/components/views/Recommendations'
import JoinToUsModule from '@/components/module/JoinToUsModule'
import { useResize } from '@/hooks/useResize'
import CooperationWithUs from '@/components/views/CooperationWithUs'


export default function Home() {
  const { isMobile } = useResize()
  const servicesTilesContent = [
    {
      header: 'Strony internetowe',
      desc: 'Posiadanie własnej strony internetowej to klucz do sukcesu w dzisiejszym cyfrowym świecie. Zyskaj zaufanie klientów, zwiększ swoją widoczność i otwórz drzwi do nowych możliwości biznesowych. Kliknij teraz, aby poznać szczegóły naszej oferty i rozpocząć swoją przygodę online!',
      srcImage: '/work_gruzo.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: true,
      extendContent: true,
      link: '/www'
    },
    {
      header: 'Projekty graficzne',
      desc: 'Design strony internetowej to kluczowy element, który przyciąga uwagę użytkowników i zwiększa szanse na sukces. Nasz zespół daje Ci gwarancję oryginalnego i atrakcyjnego wyglądu. Zyskaj większą widoczność i zainteresowanie klientów. Sprawdź szczegóły naszej oferty już teraz!',
      srcImage: '/work_gruzo.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: false,
      extendContent: true,
      link: '/design'
    },
    {
      header: 'Optymalizacja SEO',
      desc: 'Wdrażaj strategie SEO, zwiększasz widoczność w wynikach wyszukiwania, przyciągasz więcej klientów i wzmacniasz swoją markę. Kliknij, aby poznać szczegóły oferty i zacząć odnosić większe sukcesy w internecie!',
      srcImage: '/seo_gruzo_dev.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: true,
      extendContent: true,
      link: '/seo'
    },
  ]
  return (
    <>
      {/* --- ABOVE THE FOLD --- */}
      <HeroModule /> 

      {/* --- BELOW THE FOLD --- */}
      <ServicesModule servicesTilesContent={servicesTilesContent} className='lg:h-[1700px]' /> 
      <CallToActionModule light />
      <CooperationWithIndustry />
      <Benefits />
      <Recommendations />
      {isMobile && <CooperationWithUs />}
      <JoinToUsModule />
    </>
  )
}

