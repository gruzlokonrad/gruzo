import React from 'react'
import { SinglePortfolioProject } from './SinglePortfolioProject'

export const OurProjects = () => {
  const projects = [
    {
      imgPath: '/artas.png',
      name: 'Artas',
      link: 'https://artasbygg.se/en'
    },
    {
      imgPath: '/blog.png',
      name: 'Blog',
      link: 'https://crodu.com/blog/'
    },
    {
      imgPath: '/hhc.png',
      name: 'Highheelscode',
      link: 'https://highheelscode.com/'
    },
    {
      imgPath: '/faceteach.png',
      name: 'Faceteach',
      link: 'https://faceteach.app/'
    },
    {
      imgPath: '/faceproff.png',
      name: 'Faceproff',
      link: 'https://faceproff.com/consultants'
    },
  ]
  return (
    <section className='container max-w-screen-xl'>
      <h2 className='header-2'>Portfolio</h2>

      {projects.map(({ imgPath, name, link }, index) => {
        return <SinglePortfolioProject imgPath={imgPath} name={name} link={link} positionToRight={index % 2 === 0} />
      })}
    </section>
  )
}
