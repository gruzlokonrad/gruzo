'use client'
import HeroModule from '@/components/module/HeroModule'
import ServicesModule from '@/components/module/ServicesModule'
import { ParamModuleContextProvider } from './context/paramsModule'
import CallToActionModule from '@/components/module/CallToActionModule'

export default function Home() {
  return (
    <>
      <ParamModuleContextProvider>
        <HeroModule /> {/* *** ABOVE THE FOLD MODULE *** */}
        <ServicesModule /> {/* *** SERVICES SHORT TILE *** */}
      </ParamModuleContextProvider>
      <CallToActionModule />
    </>
  )
}

