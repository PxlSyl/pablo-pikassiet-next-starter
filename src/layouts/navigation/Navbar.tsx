import Link from 'next/link'
import Social from '@/components/Social'
import social from '@/config/social.json'

export const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-20 h-20 w-screen bg-transparent">
        <nav className="mx-auto mt-3 flex max-w-7xl items-center justify-center space-x-4 px-4 sm:space-x-16">
          <div className="flex items-center space-x-2 xl:space-x-4">
            <div className="hidden lg:block">
              <Link href="/">
                <p className="text-3xl text-blue-300">Pablo Pikassiet</p>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Social source={social.main} className="social-icons" />
          </div>
        </nav>
      </div>
    </>
  )
}
