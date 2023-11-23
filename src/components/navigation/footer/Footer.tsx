import siteMetadata from '@/declaration/data/siteMetadata'
import { Facebook, Deviantart, Instagram, Twitter, Youtube, Tiktok } from '../icons'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export const Footer: React.FC = (): JSX.Element => {
  const { t } = useTranslation()

  const socialMediaLinks = [
    { href: 'https://www.facebook.com/PxlSyl', label: 'facebook', icon: <Facebook /> },
    { href: 'https://www.deviantart.com/pxlsyl', label: 'deviantart', icon: <Deviantart /> },
    { href: 'https://www.instagram.com/pxlsyl/', label: 'instagram', icon: <Instagram /> },
    { href: 'https://twitter.com/PxlSyl', label: 'twitter', icon: <Twitter /> },
    { href: 'https://www.youtube.com/@pxlsyl4644/videos', label: 'youtube', icon: <Youtube /> },
    { href: 'https://www.tiktok.com/@pxlsyl', label: 'tiktok', icon: <Tiktok /> },
  ]

  return (
    <div className="mt-16 flex flex-col items-center z-20">
      <div className="mb-3 flex space-x-8">
        {socialMediaLinks.map((link, index) => (
          <Link key={index} href={link.href} aria-label={link.label} target="_blank">
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="mb-2 flex space-x-2 text-sm">
        <div>{siteMetadata.author}</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div className="row">
          <Link className="border-b px-1 hover:text-blue-300" href="/legalnotice">
            {t('footer:legal')}
          </Link>
          <div className="px-1">{` • `}</div>
          <Link className="border-b hover:text-blue-300" href="/terms">
            {t('footer:terms')}
          </Link>
        </div>
      </div>
    </div>
  )
}
