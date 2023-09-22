import React from 'react'
import Image from 'next/image'
import MainHeader from '@/components/ui/MainHeader'
import ShortDescription from '@/components/ui/ShortDescription'

const Hero = () => {
  return (
    // *** MAIN WRAPPER **
    <div className='text_content--maxWidth flex'>
      {/* *** CONTENT *** */}
      <div className=' w-3/5'>
        <MainHeader className='mb-10'>Odkryj nasze usługi</MainHeader>
        <ShortDescription header='Strony internetowe dla małych firm'>
          Strona internetowa to doskonały sposób na zwiększenie widoczności dla małej firmy. Szczegółowe informacje na temat obecnych klientów - to tylko jedna z wielu korzyści. Dowiedz się kto i dlaczego korzysta z Twoich usług, oraz co jeszcze moze od Ciebie kupić.
        </ShortDescription>
      </div>
      {/* *** IMAGE *** */}
      <div className='relative h-40 w-2/5'>
        <Image
          src='/work_gruzo.png'
          alt='Technology use in gruzo dev'
          fill
          sizes='100%'
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default Hero