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
      desc: 'Zastosuj nasze strategie marketingowe, aby skutecznie pozyskać nowych klientów i rozwinąć swoją bazę odbiorców.',
      srcImage: '/work_gruzo.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: true,
      extendContent: false,
      link: '/www'
    },
    {
      header: 'Projekty graficzne',
      desc: 'Wykorzystaj dane i analizy rynkowe do dostosowania oferty produktów oraz usług, co pomoże Ci zwiększyć skuteczność sprzedaży i osiągnąć lepsze wyniki.',
      srcImage: '/work_gruzo.png',
      altImage: 'strony internetowe gruzo dev',
      className: '',
      reverse: false,
      // extendContent: true,
      link: '/design'
    },
    {
      header: 'Optymalizacja SEO',
      desc: 'Wdrażaj strategie SEO, aktywnie angażuj się w media społecznościowe, oraz dbaj o pozytywne relacje z klientami, aby konsekwentnie budować mocną i wiarygodną obecność online.',
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
      <ServicesModule servicesTilesContent={servicesTilesContent} className='lg:h-[1050px]' /> 
      <CallToActionModule />
      <CooperationWithIndustry />
      <Benefits />
      <Recommendations />
      {isMobile && <CooperationWithUs />}
      <JoinToUsModule />
    </>
  )
}

