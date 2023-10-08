import React from 'react'
import JoinToUsModule from '@/components/module/JoinToUsModule'
import { HeroServiceDescription } from '@/components/views/HeroServiceDescription'
import { OurTeam } from '@/components/views/OurTeam'

const page = () => {
  const serviceDescription = {
    header: 'O nas',
    text: (
      <p className='description my-4 font-normal'>
        Nasza firma specjalizuje się w tworzeniu stron internetowych z użyciem zaawansowanej technologii Next.js.
        Jako zespół fachowców, łączymy kreatywność z najnowszymi osiągnięciami technologicznymi,
        aby dostarczyć Ci witrynę, która spełni Twoje oczekiwania.
        Tworzone przez nas rozwiązania opierają się
        na solidnych fundamentach programistycznych, gwarantujących nie tylko bezbłędne
        działanie Twojej strony, ale również łatwość jej rozbudowy w przyszłości.

        {/*** EXTEND DESCRIPTION ***
          Nasze podejście opiera się na klientocentryczności - to znaczy, że nasza praca nie kończy się po dostarczeniu gotowej witryny.
          Jesteśmy tutaj, aby Ci pomóc.
          Nasz zespół chętnie udziela wsparcia technicznego, odpowiada na Twoje pytania i pomaga w rozwiązaniu ewentualnych problemów.
          Naszym priorytetem jest Twój sukces. Nie tylko tworzymy stronę internetową, ale również dostarczamy Twojej firmie narzędzie,
          które przyciąga klientów, buduje markę i zwiększa sprzedaż.
          Jeśli marzysz o profesjonalnej stronie internetowej opartej na technologii Next.js, zachęcamy do kontaktu.
          Chętnie poznamy Twoje potrzeby i wypracujemy dla Ciebie rozwiązanie, które spełni Twoje oczekiwania.
          Nie zwlekaj już dłużej! Zaufaj nam i podążaj ścieżką sukcesu online. 
        */}
      </p>
    ),
  }

  return (
    <>
      <HeroServiceDescription content={serviceDescription} />
      <OurTeam />
      <JoinToUsModule />
    </>
  )
}

export default page