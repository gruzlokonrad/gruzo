import Header from '@/components/views/navbar/Header'
import MenuMobile from '@/components/views/navbar/MenuMobile'
import { Footer } from '@/components/views/Footer'

export const metadata = {
  title: 'IT for business',
  description: 'IT for business',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <Header />
      <main className='flex-grow'>
        {children}
      </main>
      <Footer />
      <MenuMobile />
    </>
  )
}
