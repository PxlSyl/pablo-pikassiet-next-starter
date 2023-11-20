'use client'
import { useState } from 'react'
import Link from 'next/link'
import mstyles from './sidebar.module.css'
import { Accordion } from 'react-accessible-accordion'
import { Accordionsection } from './accordionsection'
import { Regularsection } from './regularsection'
import 'react-accessible-accordion/dist/fancy-example.css'
import { HomeIcon, NotepadIcon, ShopIcon, PaletteIcon, MusicIcon, BlogIcon } from '../icons'
import { headerBlogLinks } from '../headerlinks/headerBlogLinks'
import { headerMusicLinks } from '../headerlinks/headerMusicLinks'
import { headerShopLinks } from '../headerlinks/HeaderShopLinks'
import { headerCommissionsLinks } from '../headerlinks/headerCommissionsLinks'
import { headerArtLinks } from '../headerlinks/headerArtLinks'
import { headerInfosLinks } from '../headerlinks/headerInfosLinks'
import { useRouter } from 'next/router'
import { useDarkMode } from '@/hooks/useDarkmode'
import { Social } from './Social'
import { ContactModal } from '@/layouts/contact/modals/ContactModal'
import { useContactModal } from '@/layouts/contact/hooks/useContactModal'

export const Sidebar: React.FC = (): JSX.Element | null => {
  const router = useRouter()
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

  const navMenuStyles = {
    background:
      theme !== 'light'
        ? 'linear-gradient(90deg, rgb(0, 0, 0,1) 0%, rgb(31, 84, 148,1) 100%)'
        : 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(101,9,121,1) 100%, rgba(0,212,255,1) 100%)',
  }
  const hoverClass = theme === 'light' ? 'hover:text-blue-300' : 'hover:text-purple-300'

  return (
    <>
      <div className={menuclick ? mstyles.toggle2 : mstyles.toggle} onClick={handleClick}>
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
              <Accordionsection
                title="Shop"
                links={headerShopLinks}
                icon={<ShopIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
              />
              <Accordionsection
                title="Commissions"
                links={headerCommissionsLinks}
                icon={<NotepadIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
              />
              <Accordionsection
                title="Gallery"
                links={headerArtLinks}
                icon={<PaletteIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
              />
              <Accordionsection
                title="Music"
                links={headerMusicLinks}
                icon={<MusicIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
              />
              <Accordionsection
                title="Blog"
                links={headerBlogLinks}
                icon={<BlogIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
              />
            </Accordion>
            <div className="hidden lg:grid lg:grid-cols-5 lg:justify-center lg:gap-4">
              <Regularsection
                title="Shop"
                links={headerShopLinks}
                icon={<ShopIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
              />
              <Regularsection
                title="Commissions"
                links={headerCommissionsLinks}
                icon={<NotepadIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
              />
              <Regularsection
                title="Gallery"
                links={headerArtLinks}
                icon={<PaletteIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
              />
              <Regularsection
                title="Music"
                links={headerMusicLinks}
                icon={<MusicIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
              />
              <Regularsection
                title="Blog"
                links={headerBlogLinks}
                icon={<BlogIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
              />
            </div>
            <div className="mt-4 lg:mt-6">
              {headerInfosLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={closeMenu}
                  className={
                    theme === 'light'
                      ? `ml-4 flex cursor-pointer flex-col text-sm underline hover:text-blue-300 hover:underline ${
                          router.asPath === link.href ? 'text-blue-500' : ''
                        }`
                      : `ml-4 flex cursor-pointer flex-col text-sm underline hover:text-purple-300 ${
                          router.asPath === link.href ? 'text-purple-500' : ''
                        }`
                  }
                >
                  {link.title.toLowerCase()}
                </Link>
              ))}
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
          <div className="lg:hidden">
            <Social />
          </div>
        </div>
      </div>
      <ContactModal />
    </>
  )
}
