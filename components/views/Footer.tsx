'use client';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { tailwindClassMerge } from '@/utils/tailwindClassMerge';
import { useResize } from '@/hooks/useResize';
import { MenuDesktop } from './navbar/MenuDesktop';

type ParagraphType = { children: React.ReactNode, className?: string }

export const Paragraph = ({ children, className }: ParagraphType) => (
  <p className={tailwindClassMerge(`description font-normal ${className}`)}>{children}</p>
)

export const Footer = () => {
  const { isDesktop } = useResize();

  return (
    <footer className="
      pt-6 pb-20 px-6 
      flex flex-col lg:flex-row 
      items-center lg:items-start lg:justify-evenly
      border border-t-1
    ">
      <div className="w-72 lg:w-auto my-12">
        <h2 className={tailwindClassMerge(`header-1 text-3xl mb-10 lg:mb-12 lg:mt-0`)}>gruzo.dev</h2>
        <div className='my-4'>
          <Paragraph className='underline'>hello@gruzo.dev</Paragraph>
          <Paragraph className=''>+48 513 950 004</Paragraph>
        </div>
        <div className='my-4'>
          <Paragraph>2023 © <span className='underline'>gruzo.dev</span>.</Paragraph>
          <Paragraph>Wszelkie prawa zastrzezone</Paragraph>
        </div>
      </div>
      <div className='w-72 lg:w-auto lg:mb-12 lg:mt-32'>
        <div className='flex gap-10 mb-6'>
          <FontAwesomeIcon icon={faFacebookSquare} size={'3x'} />
          <FontAwesomeIcon icon={faLinkedin} size={'3x'} />
        </div>
        <div>
          <Paragraph className='my-2'>Privacy Policy</Paragraph>
          <Paragraph>Terms and Conditions</Paragraph>
        </div>
      </div>
      {isDesktop && <MenuDesktop className={tailwindClassMerge(`description lg:flex-col items-start lg:my-12 gap-2 xl:gap-4 lg:mt-28`)}/>}
    </footer>
  );
};
