import { Navbar } from './Navbar'
import { Sidebar } from './menu'
import { Switchlocale } from './lang'
import { Toggletheme } from './theme'
import { BottomBar } from './footer'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  const router = useRouter()
  const isMusicPage = router.pathname === '/music'

  return (
    <>
      <Navbar />
      <Sidebar />
      <Switchlocale />
      <Toggletheme />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow ">
          {isMusicPage ? (
            children
          ) : (
            <div className="flex flex-col items-center md:mt-20">{children}</div>
          )}
        </main>
      </div>
      <BottomBar />
    </>
  )
}
