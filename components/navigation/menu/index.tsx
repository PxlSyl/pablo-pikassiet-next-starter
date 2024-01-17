'use client'
// css and third party libraries
import styles from './menu.module.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import { Accordion } from 'react-accessible-accordion'
import { HomeIcon, ShopIcon, PaletteIcon, MusicIcon, BlogIcon, MailIcon } from '../icons'
import Logo from '@/components/blog/Logo'
import { selectedClass, hoverClass } from './menutheme'
// utility and hooks
import Link from 'next/link'
import { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useDarkMode } from '@/hooks/useDarkmode'
import { useOuterClick } from '@/hooks/useOuterclick'
import { useContactModal } from '@/components/navigation/contact/store'
import { ContactModal } from '@/components/navigation/contact'
// custom components
import ThemeSwitcher from '../theme'
import SearchButton from '../search/SearchButton'
import { Mobilesection } from './mobilesection'
import { Regularsection } from './regularsection'
import SocialIcons from '../icons/social'
import {
  headerShopLinks,
  headerArtLinks,
  headerMusicLinks,
  headerBlogLinks,
  headerInfosLinks,
} from '@/config/headerLinks'

export const Header: React.FC = (): JSX.Element | null => {
  const pathname = usePathname()

  const [menuclick, setClick] = useState<boolean>(false)
  const handleClick = (): void => setClick(!menuclick)
  const closeMenu = (): void => setClick(false)
  const menubarRef = useRef<HTMLDivElement>(null)

  useOuterClick(menubarRef, closeMenu)

  const contactModal = useContactModal()

  const handleContactClick = (): void => {
    contactModal.onOpen()
  }
  function ContactClick(): void {
    handleContactClick()
  }

  const { theme, mounted } = useDarkMode()

  if (!mounted) return null

  const menuClass =
    theme === 'light'
      ? `${menuclick ? styles.toggle2 : styles.toggle}`
      : `${menuclick ? styles.toggledark2 : styles.toggledark}`

  const handleMenuKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }

  return (
    <div ref={menubarRef}>
      <div
        className={`${menuClass}`}
        onClick={handleClick}
        onKeyDown={handleMenuKeyPress}
        role="button"
        aria-label="Menu button"
        tabIndex={0}
      >
        <div></div>
      </div>
      <div className="fixed top-0 z-20 h-20 w-full bg-body dark:bg-darkmode-body">
        <nav className="mx-auto mt-3 flex max-w-7xl items-center justify-center space-x-4 px-4 sm:space-x-8">
          <div className="flex items-center space-x-2 xl:space-x-4">
            <div className="hidden lg:block">
              <Logo />
            </div>
          </div>
          <div className="hidden lg:block">
            <SocialIcons className="social-icons" />
          </div>
        </nav>
        <div className="z-40">
          <button
            className="fixed right-[112px] top-[26px] mr-5 h-8 w-8 cursor-pointer rounded-md  text-center leading-9"
            aria-label="Email"
            onClick={ContactClick}
          >
            <MailIcon />
          </button>
          <SearchButton className="fixed right-[70px] top-[30px] mr-5" />
          <ThemeSwitcher className="fixed right-[20px] top-[30px] h-6 w-12 cursor-pointer opacity-100" />
        </div>
      </div>
      <div
        className={`${
          menuclick ? styles.navmenuactive : styles.navmenu
        } overflow-y-auto bg-body dark:bg-darkmode-body`}
      >
        <div className=" lg:mx-auto">
          <Link
            className={`mb-2 ml-2 mt-2 flex flex-row items-center text-2xl lg:hidden ${hoverClass}`}
            href="/"
            onClick={closeMenu}
          >
            <HomeIcon />
            <p className="ml-1">Home</p>
          </Link>
          <div className="lg:flex lg:flex-row">
            <Accordion allowZeroExpanded className="lg:hidden">
              <Mobilesection
                title="Shop"
                links={headerShopLinks}
                icon={<ShopIcon />}
                closeMenu={closeMenu}
              />
              <Mobilesection
                title="Gallery"
                links={headerArtLinks}
                icon={<PaletteIcon />}
                closeMenu={closeMenu}
              />
              <Mobilesection
                title="Music"
                links={headerMusicLinks}
                icon={<MusicIcon />}
                closeMenu={closeMenu}
              />
              <Mobilesection
                title="Blog"
                links={headerBlogLinks}
                icon={<BlogIcon />}
                closeMenu={closeMenu}
              />
            </Accordion>
            <div className="hidden lg:grid lg:grid-cols-4 lg:justify-center lg:gap-4">
              <Regularsection
                title="Shop"
                links={headerShopLinks}
                icon={<ShopIcon />}
                closeMenu={closeMenu}
              />
              <Regularsection
                title="Gallery"
                links={headerArtLinks}
                icon={<PaletteIcon />}
                closeMenu={closeMenu}
              />
              <Regularsection
                title="Music"
                links={headerMusicLinks}
                icon={<MusicIcon />}
                closeMenu={closeMenu}
              />
              <Regularsection
                title="Blog"
                links={headerBlogLinks}
                icon={<BlogIcon />}
                closeMenu={closeMenu}
              />
            </div>
            <div className="mt-4 lg:mt-6 xl:ml-4">
              {headerInfosLinks.map((link) => {
                const isSelected = pathname.endsWith(link.href)
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={closeMenu}
                    className={`ml-4 flex cursor-pointer flex-col text-sm ${hoverClass} 
                     ${isSelected ? selectedClass : ''}`}
                  >
                    {link.title}
                  </Link>
                )
              })}
              <div
                className={`ml-4 mt-2 flex cursor-pointer flex-col text-sm underline hover:underline ${hoverClass} `}
                onClick={ContactClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    ContactClick()
                  }
                }}
                role="button"
                tabIndex={0}
              >
                Contact
              </div>
            </div>
          </div>
          <div className="lg:hidden"></div>
        </div>
      </div>
      <ContactModal />
    </div>
  )
}
