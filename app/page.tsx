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
  return (
    <>
      <HeroModule /> {/**** ABOVE THE FOLD MODULE ****/}
      <ServicesModule className='lg:h-[1050px]' /> {/**** BELOW THE FOLD MODULE ****/}
      <CallToActionModule />
      <CooperationWithIndustry />
      <Benefits />
      <Recommendations />
      {isMobile && <CooperationWithUs />}
      <JoinToUsModule />
    </>
  )
}

