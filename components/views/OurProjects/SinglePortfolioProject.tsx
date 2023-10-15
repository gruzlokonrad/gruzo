import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type SinglePortfolioProject = {
  imgPath: string,
  name: string,
  link: string,
  positionToRight: boolean
}

export const SinglePortfolioProject = ({ imgPath, name, link, positionToRight }: SinglePortfolioProject) => (
  <figure className={`max-w-3xl ${positionToRight ? 'my-8 ml-auto' : 'mt-24 mb-8'}`}>
    <Link href={link} target='_blank'>
      <div className='relative h-64 rounded-3xl border border-brand-red shadow-xl'>
        <Image
          src={imgPath}
          alt={name}
          fill
          sizes='100%'
          className='object-cover object-left-top mx-auto rounded-3xl'
        />
      </div>
    </Link>
    <figcaption className='mx-1 w-fit'>
      <Link href={link} target='_blank'>
        <h2 className='header-3 mb-0'>{name}</h2>
      </Link>
      <Link href={link} target='_blank'>
        <p className='description'>{link}</p>
      </Link>
    </figcaption>
  </figure>
)
