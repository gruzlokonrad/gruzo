import React from 'react'

const page = ({ params }: { params: { postTitle: string } }) => {
  return (
    <section>
      <div className='prose container'>
        {params.postTitle}
      </div>
    </section>
  )
}

export default page