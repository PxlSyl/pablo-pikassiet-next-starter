import { useDarkMode } from '../hooks/useDarkmode'
import { IconWrapper } from '@/data/headers/iconswrapper'
import Link from 'next/link'

export const Navbar: React.FC = (): JSX.Element | null => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null

  return (
    <>
      <div
        className="fixed z-20 bg-transparent top-0 w-screen h-20"
        style={{
          background:
            theme === 'light'
              ? 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(101,9,121,1) 100%, rgba(0,212,255,1) 100%)'
              : 'linear-gradient(90deg, rgb(0, 0, 0,1) 0%, rgb(31, 84, 148,1) 100%)',
        }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-center px-4 space-x-4 sm:space-x-16 mt-3">
          <div className="flex items-center space-x-2 xl:space-x-4">
            <div className="hidden lg:block">
              <Link href="/">
                <p className="text-3xl text-blue-300">Pxlsyl.art</p>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <IconWrapper />
          </div>
        </nav>
      </div>
    </>
  )
}
