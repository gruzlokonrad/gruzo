import React from 'react'
import JoinToUsModule from '@/components/module/JoinToUsModule'
import { HeroServiceDescription } from '@/components/views/HeroServiceDescription'
import { OurTeam } from '@/components/views/OurTeam'
import CallToActionModule from '@/components/module/CallToActionModule'

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

        {/* Jesteśmy doświadczoną firmą, która od dziesięciu lat zajmuje się tworzeniem stron internetowych, projektowaniem graficznym oraz optymalizacją pod kątem SEO. Nasza pasja do tworzenia pięknych i funkcjonalnych stron sprawia, że jesteśmy liderem w branży.
        Tworzenie strony internetowej to nie tylko umiejętność, ale również sztuka. Nasz zespół złożony z utalentowanych projektantów, programistów i specjalistów SEO doskonale zdaje sobie sprawę, że strona internetowa jest Twoją wizytówką w internecie. Dlatego pracujemy nad tym, aby Twoja strona była nie tylko estetyczna, ale również przyjazna dla użytkowników i zoptymalizowana pod kątem wyszukiwarek.
        Nasze projekty graficzne są unikalne i dopasowane do Twoich potrzeb. Niezależnie od branży, w której działasz, stworzymy dla Ciebie stronę, która wyróżni Cię spośród konkurencji. Wykorzystujemy najnowsze trendy w projektowaniu, aby Twoja strona była nowoczesna i atrakcyjna dla odwiedzających.
        Optymalizacja pod kątem SEO to kluczowy element w procesie tworzenia strony internetowej. Nasz zespół specjalistów dba o to, aby Twoja strona była znajdywana w wyszukiwarkach i osiągała wysokie pozycje w wynikach wyszukiwania. Dzięki temu zwiększysz widoczność Twojej firmy w internecie i dotrzesz do większej liczby potencjalnych klientów.
        W naszej pracy wyznajemy zasady uczciwości, profesjonalizmu i indywidualnego podejścia do każdego klienta. Nasze referencje i zadowoleni klienci to dowód na wysoką jakość naszych usług. Gwarantujemy, że nasza współpraca będzie oparta na zaufaniu i pełnym zrozumieniu Twoich potrzeb.
        Jeśli szukasz partnera, który pomoże Ci stworzyć stronę internetową, która przyciągnie uwagę i przyniesie Ci sukces online, to jesteśmy firmą, której potrzebujesz. Zaufaj nam swoje marzenia online, a my sprawimy, że staną się rzeczywistością. Skontaktuj się z nami już dziś! */}
      </p>
    ),
  }

  return (
    <>
      <HeroServiceDescription content={serviceDescription} />
      {/* <JoinToUsModule /> */}
      <CallToActionModule bgToRight={false}/>
    </>
  )
}

export default page