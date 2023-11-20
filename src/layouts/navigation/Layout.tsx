'use client'
import { Navbar } from './Navbar'
import { Sidebar } from './menu'
import ThemeSwitcher from './theme'

export const Header = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ThemeSwitcher className="mr-5" />
    </>
  )
}
