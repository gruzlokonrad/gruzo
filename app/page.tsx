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
{/**** 
  --------- MODULE CONTEXT PROVIDER
  --------- Use this variant if you want to use context to pass element size between components.
****/}
import { ParamModuleContextProvider } from '../context/paramsModule'

export default function Home() {
  const { isMobile } = useResize()
  return (
    <>
      {/**** ABOVE THE FOLD MODULE ****/}
      <HeroModule />
      {/**** BELOW THE FOLD MODULE ****/}
      <ServicesModule />
      <CallToActionModule />
      <CooperationWithIndustry />
      <Benefits />
      {/**** MODULE CONTEXT PROVIDER ****/}
      <ParamModuleContextProvider>
        <Recommendations />
        {isMobile && <CooperationWithUs />}
        <JoinToUsModule />
      </ParamModuleContextProvider>
    </>
  )
}

