import '../globals.scss'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'IT for business',
  description: 'IT for business',
}

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
    // <main className='flex-grow'>
    //   {children}
    // </main>
  )
}
