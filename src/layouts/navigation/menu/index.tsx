import { useState } from 'react'
import Link from 'next/link'
import mstyles from './sidebar.module.css'
import { Accordion } from 'react-accessible-accordion'
import { Accordionsection } from './accordionsection'
import { Regularsection } from './regularsection'
import 'react-accessible-accordion/dist/fancy-example.css'
import { HomeIcon, NotepadIcon, ShopIcon, PaletteIcon, MusicIcon, BlogIcon } from '../icons'
import { headerBlogLinks } from '@/data/headers/headerBlogLinks'
import { headerMusicLinks } from '@/data/headers/headerMusicLinks'
import { headerShopLinks } from '@/data/headers/HeaderShopLinks'
import { headerCommissionsLinks } from '@/data/headers/headerCommissionsLinks'
import { headerArtLinks } from '@/data/headers/headerArtLinks'
import { headerInfosLinks } from '@/data/headers/headerInfosLinks'
import { useRouter } from 'next/router'
import { useDarkMode } from '@/components/hooks/useDarkmode'
import useTranslation from 'next-translate/useTranslation'
import { Social } from './Social'
import { ContactModal } from '@/components/contact/modals/ContactModal'
import { useContactModal } from '@/components/contact/hooks/useContactModal'

export const Sidebar: React.FC = (): JSX.Element | null => {
  const { t } = useTranslation()
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
        <div className="lg:mx-auto overflow-y-auto">
          <Link
            className={`flex flex-row ml-2 mb-2 items-center lg:hidden text-2xl ml-1 mb-2 mt-2 ${hoverClass}`}
            href="/"
            onClick={closeMenu}
          >
            <HomeIcon />
            {t('common:home')}
          </Link>
          <div className="lg:flex lg:flex-row">
            <Accordion allowZeroExpanded className="lg:hidden">
              <Accordionsection
                title={t('common:shop')}
                links={headerShopLinks}
                icon={<ShopIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
                translationKey="headerShopLinks"
              />
              <Accordionsection
                title={t('common:commissions')}
                links={headerCommissionsLinks}
                icon={<NotepadIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
                translationKey="headerCommissionsLinks"
              />
              <Accordionsection
                title={t('common:Nav2')}
                links={headerArtLinks}
                icon={<PaletteIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
                translationKey="headerArtLinks"
              />
              <Accordionsection
                title={t('common:Nav3')}
                links={headerMusicLinks}
                icon={<MusicIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
                translationKey="headerMusicLinks"
              />
              <Accordionsection
                title="Blog"
                links={headerBlogLinks}
                icon={<BlogIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
                translationKey="headerNavLinks"
              />
            </Accordion>
            <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4 lg:justify-center">
              <Regularsection
                title={t('common:shop')}
                links={headerShopLinks}
                icon={<ShopIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
                translationKey="headerShopLinks"
              />
              <Regularsection
                title={t('common:commissions')}
                links={headerCommissionsLinks}
                icon={<NotepadIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
                translationKey="headerCommissionsLinks"
              />
              <Regularsection
                title={t('common:Nav2')}
                links={headerArtLinks}
                icon={<PaletteIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
                translationKey="headerArtLinks"
              />
              <Regularsection
                title={t('common:Nav3')}
                links={headerMusicLinks}
                icon={<MusicIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
                translationKey="headerMusicLinks"
              />
              <Regularsection
                title="Blog"
                links={headerBlogLinks}
                icon={<BlogIcon />}
                closeMenu={closeMenu}
                activePath={router.asPath}
                theme={theme}
                translationKey="headerNavLinks"
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
                      ? `flex flex-col text-sm underline hover:underline hover:text-blue-300 ml-4 cursor-pointer ${
                          router.asPath === link.href ? 'text-blue-500' : ''
                        }`
                      : `flex flex-col text-sm underline hover:text-purple-300 ml-4 cursor-pointer ${
                          router.asPath === link.href ? 'text-purple-500' : ''
                        }`
                  }
                >
                  {t(`headerInfosLinks:${link.title.toLowerCase()}`)}
                </Link>
              ))}
              <div
                className={
                  theme === 'light'
                    ? `flex flex-col text-sm underline hover:underline hover:text-blue-300 ml-4 cursor-pointer mt-2`
                    : `flex flex-col text-sm underline hover:text-purple-300 ml-4 cursor-pointer mt-2`
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
