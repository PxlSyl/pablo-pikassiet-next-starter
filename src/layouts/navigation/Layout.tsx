'use client'
import { Navbar } from './Navbar'
import { Sidebar } from './menu'
import ThemeSwitcher from './theme'
import SearchButton from './search/SearchButton'

export const Header = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SearchButton className="fixed right-[80px] top-[16px] z-50 mr-5" />
      <ThemeSwitcher className="fixed right-[20px] top-[20px] z-50 mr-5" />
    </>
  )
}
