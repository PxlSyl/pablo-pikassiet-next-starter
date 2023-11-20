'use client'

import 'react-accessible-accordion/dist/fancy-example.css'
import mstyles from './sidebar.module.css'

import { useState } from 'react'
import Link from 'next/link'
import { Accordion } from 'react-accessible-accordion'
import { Mobilesection } from './mobilesection'
import { Regularsection } from './regularsection'
import { HomeIcon, NotepadIcon, ShopIcon, PaletteIcon, MusicIcon, BlogIcon } from '../icons'
import { headerBlogLinks } from '../headerlinks/headerBlogLinks'
import { headerMusicLinks } from '../headerlinks/headerMusicLinks'
import { headerShopLinks } from '../headerlinks/HeaderShopLinks'
import { headerCommissionsLinks } from '../headerlinks/headerCommissionsLinks'
import { headerArtLinks } from '../headerlinks/headerArtLinks'
import { headerInfosLinks } from '../headerlinks/headerInfosLinks'
import { usePathname } from 'next/navigation'
import { useDarkMode } from '@/hooks/useDarkmode'

import { ContactModal } from '@/layouts/contact/modals/ContactModal'
import { useContactModal } from '@/layouts/contact/hooks/useContactModal'

export const Sidebar: React.FC = (): JSX.Element | null => {
  const pathname = usePathname()

  const [menuclick, setClick] = useState<boolean>(false)
  const handleClick = (): void => setClick(!menuclick)
  const closeMenu = (): void => setClick(false)

  const contactModal = useContactModal()
  const handleContactClick = (): void => {
    contactModal.onOpen()
  }
  function ContactClick(): void {
    handleContactClick()
    closeMenu()
  }

  const { theme, mounted } = useDarkMode()

  if (!mounted) return null

  const DynamicClass =
    theme === 'light'
      ? `${menuclick ? mstyles.toggle2 : mstyles.toggle}`
      : `${menuclick ? mstyles.toggledark2 : mstyles.toggledark}`
  const navMenuStyles = {
    background: theme !== 'light' ? '#1c1c1c' : 'white',
  }
  const hoverClass = theme === 'light' ? 'hover:text-blue-300' : 'hover:text-purple-300'

  return (
    <>
      <div className={`${DynamicClass} `} onClick={handleClick}>
        <div></div>
      </div>
      <div className={menuclick ? mstyles.navmenuactive : mstyles.navmenu} style={navMenuStyles}>
        <div className="overflow-y-auto lg:mx-auto">
          <Link
            className={`mb-2 ml-2 mt-2 flex flex-row items-center text-2xl lg:hidden ${hoverClass}`}
            href="/"
            onClick={closeMenu}
          >
            <HomeIcon />
            Home
          </Link>
          <div className="lg:flex lg:flex-row">
            <Accordion allowZeroExpanded className="lg:hidden">
              <Mobilesection
                title="Shop"
                links={headerShopLinks}
                icon={<ShopIcon />}
                closeMenu={closeMenu}
                theme={theme}
              />
              <Mobilesection
                title="Commissions"
                links={headerCommissionsLinks}
                icon={<NotepadIcon />}
                closeMenu={closeMenu}
                theme={theme}
              />
              <Mobilesection
                title="Gallery"
                links={headerArtLinks}
                icon={<PaletteIcon />}
                closeMenu={closeMenu}
                theme={theme}
              />
              <Mobilesection
                title="Music"
                links={headerMusicLinks}
                icon={<MusicIcon />}
                closeMenu={closeMenu}
                theme={theme}
              />
              <Mobilesection
                title="Blog"
                links={headerBlogLinks}
                icon={<BlogIcon />}
                closeMenu={closeMenu}
                theme={theme}
              />
            </Accordion>
            <div className="hidden lg:grid lg:grid-cols-5 lg:justify-center lg:gap-4">
              <Regularsection
                title="Shop"
                links={headerShopLinks}
                icon={<ShopIcon />}
                closeMenu={closeMenu}
              />
              <Regularsection
                title="Commissions"
                links={headerCommissionsLinks}
                icon={<NotepadIcon />}
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
            <div className="mt-4 lg:mt-6">
              {headerInfosLinks.map((link) => {
                const isSelected = pathname.includes(link.href)
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={closeMenu}
                    className={`ml-4 flex cursor-pointer flex-col text-sm underline  ${
                      isSelected ? 'text-blue-300' : 'text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    {link.title}
                  </Link>
                )
              })}
              <div
                className={
                  theme === 'light'
                    ? `ml-4 mt-2 flex cursor-pointer flex-col text-sm underline hover:text-blue-300 hover:underline`
                    : `ml-4 mt-2 flex cursor-pointer flex-col text-sm underline hover:text-purple-300`
                }
                onClick={ContactClick}
              >
                Contact
              </div>
            </div>
          </div>
          <div className="lg:hidden"></div>
        </div>
      </div>
      <ContactModal />
    </>
  )
}
