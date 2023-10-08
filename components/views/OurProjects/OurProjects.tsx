import React from 'react'
import { SinglePortfolioProject } from './SinglePortfolioProject'

export const OurProjects = () => {
  const projects = [
    {
      imgPath: '/project.png',
      name: 'Ilabo',
      link: 'https://wp.pl'
    },
    {
      imgPath: '/project.png',
      name: 'Ilabo',
      link: 'https://wp.pl'
    },
    {
      imgPath: '/project.png',
      name: 'Ilabo',
      link: 'https://wp.pl'
    },
  ]
  return (
    <section className='container max-w-screen-xl'>
      {projects.map(({imgPath, name, link}, index) => {
        return <SinglePortfolioProject imgPath={imgPath} name={name} link={link} positionToRight={index % 2 ===  0} />
      })}
    </section>
  )
}
