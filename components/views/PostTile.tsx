import React from 'react'
import Image from 'next/image'
import { Post } from '@/components/module/PostsModule'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export const PostTile = ({ post: { title, description, imgPath, author, date, } }: { post: Post }) => {
  const titleParsedToURL = title.toLowerCase().replaceAll(' ', '-')
  return (
    <article className='shadow-2xl rounded-2xl p-4 md:p-6 border max-w-sm mx-auto'>
      <div className='flex justify-between mb-2'>
        <p className='header-3'>{title}</p>
        {/* add share icon */}
        <FontAwesomeIcon icon={faShareFromSquare} size={'xl'} className='my-auto xl:m-4' />
      </div>
      <p className='description'>{description}</p>
      <figure className='my-8'>
        <div className='relative h-48 mb-2'>
          <Image src={imgPath} alt={title} fill sizes='100%' className='object-cover rounded-2xl' />
        </div>
        <div className='flex justify-between mx-1'>
          <p className=''>{date}</p>
          <p className=''>{author}</p>
        </div>
      </figure>
      <Link href={`/${titleParsedToURL}`}>
        <button className='button button--primary'>czytaj więcej</button>
      </Link>
    </article>
  )
}
