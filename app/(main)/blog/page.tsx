import React from 'react'
import JoinToUsModule from '@/components/module/JoinToUsModule'
import { HeroServiceDescription } from '@/components/views/HeroServiceDescription'
import { PostsModule } from '@/components/module/PostsModule'

const page = () => {
  const serviceDescription = {
    header: 'Blog',
    text: (
      <p className='description my-4 font-normal'>
        Nasze podejście opiera się na klientocentryczności - to znaczy, że nasza praca nie kończy się po dostarczeniu gotowej witryny.
        Jesteśmy tutaj, aby Ci pomóc.
        Nasz zespół chętnie udziela wsparcia technicznego, odpowiada na Twoje pytania i pomaga w rozwiązaniu ewentualnych problemów.
        Naszym priorytetem jest Twój sukces.
      </p>
    ),
  }

  return (
    <>
      <HeroServiceDescription content={serviceDescription} />
      <PostsModule />
      <JoinToUsModule />
    </>
  )
}

export default page