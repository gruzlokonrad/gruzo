import Image from 'next/image'
import Container from '@/components/ui/container/container'
import TextBrand from '@/components/ui/textBrand'
import EmailForm from '@/components/features/emailForm/emailForm'
export default function Home() {
  return (
    <div className='h-full flex flex-col lg:flex-row'>
      <section className='h-72 lg:h-full lg:w-full'>
        <Container className='relative h-full w-11/12 lg:w-2/3 max-w-xl'>
          <Image
            src="/logo.png"
            alt="gruzo.dev - IT for business"
            fill
            className='object-contain'
            priority
          />
        </Container>
      </section>
      <section className='flex-grow lg:flex lg:justify-center lg:w-full bg-red-adomi text-white-adomi'>
        <Container className='flex flex-col justify-center max-w-2xl'>
          <p className='header-1'>
            Strony internetowe dla małych firm.
          </p>
          <div className='my-6'>
            <p>
              Strona internetowa to doskonały sposób na zwiększenie widoczności dla małej firmy.
              Szczegółowe informacje na temat obecnych klientów - to tylko jedna z wielu korzyści.
              Dowiedz się kto i dlaczego korzysta z Twoich usług, oraz co jeszcze moze od Ciebie kupić.
            </p>
            <ul className='list-disc ml-6 my-4 font-extralight'>
              <li>Pozyskaj nowych klientów.</li>
              <li>Zwiększ swoją sprzedaz.</li>
              <li>Świadomie buduj silną pozycję w internecie.</li>
            </ul>
            <TextBrand />
          </div>
          <div className='my-6'>
            <p>hello@gruzo.dev</p>
            <p>+48 513 950 004</p>
          </div>
          <EmailForm
            labelForm="Chcesz wiedzieć więcej?"
            labelButton="Sprawdź"
          />
        </Container>
      </section>
    </div>
  )
}
