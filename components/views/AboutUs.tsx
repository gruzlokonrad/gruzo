import React from 'react'
import ContainerModule from '@/components/features/containerModule/ContainerModule'
import Image from 'next/image'

export const AboutUs = () => {
  return (
    <ContainerModule bgToRight className=''>
      <h1 className='header-1'>O nas</h1>
      {/**** CONTAINER ****/}
      <div className='lg:flex'>
        {/**** TEXT ****/}
        <div className='lg:w-1/2'>
          <p className='description my-4 font-normal'>
            Nasza firma specjalizuje się w tworzeniu stron internetowych z użyciem zaawansowanej technologii Next.js.
          </p>

          <p className='description my-4 font-normal'>
            Jako zespół fachowców, łączymy kreatywność z najnowszymi osiągnięciami technologicznymi,
            aby dostarczyć Ci witrynę, która spełni Twoje oczekiwania.
          </p>

          <p className='description my-4 font-normal'>
            Tworzone przez nas rozwiązania opierają się
            na solidnych fundamentach programistycznych, gwarantujących nie tylko bezbłędne
            działanie Twojej strony, ale również łatwość jej rozbudowy w przyszłości.
          </p>

          {/* <p className='description my-4 font-normal'>
              Nasze podejście opiera się na klientocentryczności - to znaczy, że nasza praca nie kończy się po dostarczeniu gotowej witryny.
              Jesteśmy tutaj, aby Ci pomóc.
              Nasz zespół chętnie udziela wsparcia technicznego, odpowiada na Twoje pytania i pomaga w rozwiązaniu ewentualnych problemów.
              Naszym priorytetem jest Twój sukces. Nie tylko tworzymy stronę internetową, ale również dostarczamy Twojej firmie narzędzie,
              które przyciąga klientów, buduje markę i zwiększa sprzedaż.
            </p>
            <p className='description my-4 font-normal'>
              Jeśli marzysz o profesjonalnej stronie internetowej opartej na technologii Next.js, zachęcamy do kontaktu.
              Chętnie poznamy Twoje potrzeby i wypracujemy dla Ciebie rozwiązanie, które spełni Twoje oczekiwania.
            </p>

            <p className='description my-4 font-normal'>
              Nie zwlekaj już dłużej! Zaufaj nam i podążaj ścieżką sukcesu online.
            </p> */}
        </div>
        {/**** IMAGE ****/}
        <div className='relative lg:w-1/2 h-40 md:h-60 lg:h-96 my-auto'>
          <Image
            src='/people_with_notebooks.png'
            alt='people with notebooks'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </ContainerModule>
  )
}
