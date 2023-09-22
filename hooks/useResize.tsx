import React, { useEffect, useState } from 'react'
import { breakpoints } from '../utils/tailwindConfigConst';
import { ScreensConfig } from 'tailwindcss/types/config';

interface IBreakpointValue {
  [key: string]: number
}

const getBreakpointValue = (breakpoints: ScreensConfig, breakpointName: string): IBreakpointValue => (
  {
    [breakpointName]: Number((breakpoints[`${breakpointName}`]).replace('px', ''))
  }
)

export const useResize = () => {
  const mobileBreakpointName: string = 'lg'
  const mobileBreakpointLayout: IBreakpointValue = getBreakpointValue(breakpoints, mobileBreakpointName)
  const [mobile, setMobile] = useState<boolean>(false)
  const [desktop, setDesktop] = useState<boolean>(false)


  useEffect(() => {

    if (window.innerWidth <= mobileBreakpointLayout[`${mobileBreakpointName}`]) {
      setMobile(true);
      setDesktop(false)
    } else {
      setMobile(false);
      setDesktop(true)
    }
    
    const handleResize = () => {
      if (window.innerWidth <= mobileBreakpointLayout[`${mobileBreakpointName}`]) {
        setMobile(true);
        setDesktop(false)
      } else {
        setMobile(false);
        setDesktop(true)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  
  return (
    {
      isMobile: mobile,
      isDesktop: desktop,
      mobileBreakpointLayout,
    }
  )
}