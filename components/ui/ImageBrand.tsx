import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ImageBrand = () => {
  return (
    <section className='h-72 lg:w-full lg:h-full'>
      <Link href="/">
        <div className='container relative h-full w-11/12 lg:w-2/3 max-w-xl'>
          <Image
            src="/logo.png"
            alt="gruzo.dev - IT for business"
            fill
            sizes='100'
            className='object-contain'
            priority
          />
        </div>
      </Link>
    </section>
  )
}

export default ImageBrand