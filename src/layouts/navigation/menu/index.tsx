'use client'

import 'react-accessible-accordion/dist/fancy-example.css'
import mstyles from './menu.module.css'

import { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useDarkMode } from '@/hooks/useDarkmode'
import { useOuterClick } from '@/hooks/useOuterclick'
import { useContactModal } from '@/layouts/contact/hook/useContactModal'
import { ContactModal } from '@/layouts/contact'

import Link from 'next/link'
import { Accordion } from 'react-accessible-accordion'
import { Mobilesection } from './mobilesection'
import { Regularsection } from './regularsection'
import { FaHome } from 'react-icons/fa'
import { FaShop, FaRegNoteSticky, FaPalette, FaMusic, FaBlogger } from 'react-icons/fa6'
import { headerBlogLinks } from '../headerlinks/headerBlogLinks'
import { headerMusicLinks } from '../headerlinks/headerMusicLinks'
import { headerShopLinks } from '../headerlinks/HeaderShopLinks'
import { headerCommissionsLinks } from '../headerlinks/headerCommissionsLinks'
import { headerArtLinks } from '../headerlinks/headerArtLinks'
import { headerInfosLinks } from '../headerlinks/headerInfosLinks'

export const Menubar: React.FC = (): JSX.Element | null => {
  const pathname = usePathname()

  const [menuclick, setClick] = useState<boolean>(false)
  const handleClick = (): void => setClick(!menuclick)
  const closeMenu = (): void => setClick(false)
  const menubarRef = useRef<HTMLDivElement>(null)

  // Close sidebar when clicking outside of it
  useOuterClick(menubarRef, closeMenu)
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

  const hoverClass = theme === 'light' ? 'hover:text-blue-300' : 'hover:text-purple-300'

  return (
    <>
      <div className={`${DynamicClass}`} onClick={handleClick}>
        <div></div>
      </div>
      <div
        ref={menubarRef}
        className={`${menuclick ? mstyles.navmenuactive : mstyles.navmenu} bg-gradient`}
      >
        <div className="overflow-y-auto lg:mx-auto">
          <Link
            className={`mb-2 ml-2 mt-2 flex flex-row items-center text-2xl lg:hidden ${hoverClass}`}
            href="/"
            onClick={closeMenu}
          >
            <FaHome />
            <p className="ml-1">Home</p>
          </Link>
          <div className="lg:flex lg:flex-row">
            <Accordion allowZeroExpanded className="lg:hidden">
              <Mobilesection
                title="Shop"
                links={headerShopLinks}
                icon={<FaShop />}
                closeMenu={closeMenu}
                theme={theme}
              />
              <Mobilesection
                title="Commissions"
                links={headerCommissionsLinks}
                icon={<FaRegNoteSticky />}
                closeMenu={closeMenu}
                theme={theme}
              />
              <Mobilesection
                title="Gallery"
                links={headerArtLinks}
                icon={<FaPalette />}
                closeMenu={closeMenu}
                theme={theme}
              />
              <Mobilesection
                title="Music"
                links={headerMusicLinks}
                icon={<FaMusic />}
                closeMenu={closeMenu}
                theme={theme}
              />
              <Mobilesection
                title="Blog"
                links={headerBlogLinks}
                icon={<FaBlogger />}
                closeMenu={closeMenu}
                theme={theme}
              />
            </Accordion>
            <div className="hidden lg:grid lg:grid-cols-5 lg:justify-center lg:gap-4">
              <Regularsection
                title="Shop"
                links={headerShopLinks}
                icon={<FaShop />}
                closeMenu={closeMenu}
              />
              <Regularsection
                title="Commissions"
                links={headerCommissionsLinks}
                icon={<FaRegNoteSticky />}
                closeMenu={closeMenu}
              />
              <Regularsection
                title="Gallery"
                links={headerArtLinks}
                icon={<FaPalette />}
                closeMenu={closeMenu}
              />
              <Regularsection
                title="Music"
                links={headerMusicLinks}
                icon={<FaMusic />}
                closeMenu={closeMenu}
              />
              <Regularsection
                title="Blog"
                links={headerBlogLinks}
                icon={<FaBlogger />}
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
