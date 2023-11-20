import { Navbar } from './Navbar'
import { Sidebar } from './menu'
import ThemeSwitcher from '@/layouts/navigation/theme'

export const Header = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ThemeSwitcher className="mr-5" />
    </>
  )
}
