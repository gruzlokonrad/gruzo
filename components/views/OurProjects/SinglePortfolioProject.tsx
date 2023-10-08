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
    <div className='relative h-64'>
      <Image
        src={imgPath}
        alt={name}
        fill
        sizes='100%'
        className='object-cover mx-auto rounded-3xl'
      />
    </div>
    <figcaption className='mx-1 w-fit'>
      <h2 className='header-3 mb-0'>{name}</h2>
      <Link href={link}>
        <p className='description'>{link}</p>
      </Link>
    </figcaption>
  </figure>
)
