'use client'
import { useEffect, useState } from 'react'
import { breakpoints } from '../utils/tailwindConfigConst';

interface IBreakpointValue {
  [key: string]: number
}

interface IScreensConfig {
  [key: string]: string;
}


const getBreakpointValue = (breakpoints: IScreensConfig, breakpointName: string): IBreakpointValue => {
  const breakpoint = breakpoints[`${breakpointName}`] as string
  return {[breakpointName]: Number(breakpoint.replace('px', ''))}
}

export const useResize = () => {
  const mobileBreakpointName: string = 'lg'
  const mobileBreakpointLayout = getBreakpointValue(breakpoints, mobileBreakpointName)
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