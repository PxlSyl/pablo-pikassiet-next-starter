import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import { Facebook, Deviantart, Instagram, Twitter, Youtube, Tiktok } from '../icons'

const socialMediaLinks = [
  { href: siteMetadata.facebook, label: 'facebook', icon: <Facebook /> },
  { href: siteMetadata.deviantart, label: 'deviantart', icon: <Deviantart /> },
  { href: siteMetadata.instagram, label: 'instagram', icon: <Instagram /> },
  { href: siteMetadata.twitter, label: 'twitter', icon: <Twitter /> },
  { href: siteMetadata.youtube, label: 'youtube', icon: <Youtube /> },
  { href: siteMetadata.tiktok, label: 'tiktok', icon: <Tiktok /> },
]

export const Social: React.FC = (): JSX.Element => {
  return (
    <div className="ml-6 mt-10 flex flex-wrap">
      {socialMediaLinks.map((link, index) => (
        <div className="w-1/3 p-2" key={index}>
          <Link href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </Link>
        </div>
      ))}
    </div>
  )
}
