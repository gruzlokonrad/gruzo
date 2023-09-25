import React from 'react'
import JoinToUsModule from '@/components/module/JoinToUsModule'
import { AboutUs } from '@/components/views/AboutUs'
import { OurTeam } from '@/components/views/OurTeam'

const page = () => {
  return (
    <>
      <AboutUs />
      <OurTeam />
      <JoinToUsModule />
    </>
  )
}

export default page