import React from 'react'
import { PostTile } from '../views/PostTile'

export type Post = {
  title: string,
  description: string,
  imgPath: string,
  author: string,
  date: string,
}

export const PostsModule = () => {
  const posts: Post[] = [
    {
      title: 'Wordpress a perfomance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo quam, finibus nec libero nec, ornare aliquet lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      imgPath: '/time_to_lesson.png',
      author: 'Konrad Gruzo',
      date: '2023-10-07'
    },
    {
      title: 'Wordpress a perfomance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo quam, finibus nec libero nec, ornare aliquet lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      imgPath: '/time_to_lesson.png',
      author: 'Konrad Gruzo',
      date: '2023-10-07'
    },
    {
      title: 'Wordpress a perfomance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo quam, finibus nec libero nec, ornare aliquet lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      imgPath: '/time_to_lesson.png',
      author: 'Konrad Gruzo',
      date: '2023-10-07'
    },
    {
      title: 'Wordpress a perfomance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo quam, finibus nec libero nec, ornare aliquet lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      imgPath: '/time_to_lesson.png',
      author: 'Konrad Gruzo',
      date: '2023-10-07'
    },
    {
      title: 'Wordpress a perfomance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo quam, finibus nec libero nec, ornare aliquet lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      imgPath: '/time_to_lesson.png',
      author: 'Konrad Gruzo',
      date: '2023-10-07'
    },
  ]

  return (
    <section className='container grid auto-rows-min grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-6'>
      {posts.map((post) => {
        return <PostTile key={post.title} post={post}  />
      })}
    </section>
  )
}
