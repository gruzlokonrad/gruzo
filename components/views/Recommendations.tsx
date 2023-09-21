import React, { useLayoutEffect, useRef } from 'react'
import Header from '../ui/Header'
import Image from 'next/image'
import { useParamModuleContext } from '@/context/paramsModule'
import { useResize } from '@/hooks/useResize'

type IRecommendation = {
  id: string,
  description: string,
  author: string,
  rating: number,
  date: string,
  profession: string,
}

interface IRecommendationElement {
  recommendation: IRecommendation
}

const RecommendationElement = ({ recommendation: { id, description, author, rating, profession } }: IRecommendationElement) => {
  return (
    <div key={id} className='w-72 h-auto mx-auto sm:w-96 rounded-2xl shadow-2xl border-2 border-gray-200 p-6 text-center flex flex-col bg-brand-white'>
      {/* *** RECOMMENDATION ***  */}
      <div className='flex h-full my-5'>
        <p className='header-3 font-semibold my-auto'>{description}</p>
      </div>
      {/* *** RATING ***  */}
      {/* <div className='flex flex-row items-center gap-2'> */}
      <div className='flex w-fit justify-center items-center gap-x-2 md:gap-x-4 mx-auto py-4 mt-auto'>
        {Array.from({ length: 5 }, (_, index) => (
          <Image
            key={index}
            src='/star.svg'
            alt='recommendation star'
            width={25}
            height={25}
            className=''
          />
        ))}
      </div>
      {/* *** AUTHOR ***  */}
      <div className='header-3 font-semibold mb-2 mt-4'>{author}</div>
      {/* *** PROFESSION ***  */}
      <div className='description my-0'>{profession}</div>
    </div>
  )
}

const Recommendations = () => {
  // TODO: fetch recommendations
  const clientsRecommendations = [
    {
      id: '0bbcwd',
      description: '„Od czasu współpracy z gruzo.dev nasza firma odnotowała znaczny wzrost”.',
      author: 'Jan Kowalski',
      rating: 5,
      date: '2020-01-01',
      profession: 'Product Manager',
    },
    {
      id: '1xyz',
      description: '„Polecam gruzo.dev każdej osobie, która szuka ulepszeń”.',
      author: 'Jan Kowalski',
      rating: 4,
      date: '2020-01-01',
      profession: 'Designer',
    },
    {
      id: '2awd',
      description: '„Nie wyobrażam sobie działania naszej firmy bez strony internetowej”.',
      author: 'Jan Kowalski',
      rating: 5,
      date: '2020-01-01',
      profession: 'Tutor',
    },
  ]

  const { isDesktop } = useResize()
  const ref: React.MutableRefObject<null> = useRef(null)
  const { paramModule, setParamModule } = useParamModuleContext()
  useLayoutEffect(() => {
    const heightElement = ref?.current?.clientHeight
    setParamModule({
      totalHeight: heightElement,
      mainArea: heightElement * 0.5,
      extendArea: heightElement * 0.5,
      singlePadding: (heightElement * 0.5) / 2,
    });
  }, [ref])

  return (
    <div className='container mb-14 lg:px-6' ref={ref} style={{ height: (isDesktop && paramModule) ? paramModule.mainArea : 'auto' }}>
      <Header>Opinie</Header>
      <div className='flex flex-col lg:flex-row items-stretch gap-10'>
        {clientsRecommendations.map((recommendation, index) =>
          <RecommendationElement key={index} recommendation={recommendation} />
        )}
      </div>
    </div>
  )
}

export default Recommendations