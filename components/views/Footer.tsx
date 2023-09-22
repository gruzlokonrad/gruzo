'use client';
import React from 'react'
import { menuItems } from '@/utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { tailwindClassMerge } from '@/utils/tailwindClassMerge';
import { useResize } from '@/hooks/useResize';

type ParagraphType = { children: React.ReactNode, className?: string }

export const Paragraph = ({ children, className }: ParagraphType) => (
  <p className={tailwindClassMerge(`font-normal text-sm ${className}`)}>{children}</p>
)

export const Footer = () => {
  const { isDesktop } = useResize();

  return (
    <footer className="py-20 px-6 lg:flex lg:justify-evenly border border-t-1">
      <div className="">
        <h2 className={tailwindClassMerge(`header-2 underline lg:mt-0`)}>Gruzo.dev</h2>
        <div className='my-4'>
          <Paragraph>2023 © <span className='underline'>gruzo.dev</span>.</Paragraph>
          <Paragraph>Wszelkie prawa zastrzezone</Paragraph>
        </div>
        <div className='my-4'>
          <Paragraph className='underline'>hello@gruzo.dev</Paragraph>
          <Paragraph>+48 513 950 004</Paragraph>
        </div>
      </div>
      <div className='mt-10 lg:mt-0'>
        <div className='flex gap-10 my-4 lg:mt-0 lg:mb-12'>
          <FontAwesomeIcon icon={faFacebookSquare} size={'3x'} />
          <FontAwesomeIcon icon={faLinkedin} size={'3x'} />
        </div>
        <div>
          <Paragraph className='my-2'>Privacy Policy</Paragraph>
          <Paragraph>Terms and Conditions</Paragraph>
        </div>
      </div>
      {isDesktop && (
        <div className=''>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={item.desktopName} className='my-1'>{item.desktopName}</li>
              )
            })}
          </ul>
        </div>
      )}
    </footer>
  );
};
