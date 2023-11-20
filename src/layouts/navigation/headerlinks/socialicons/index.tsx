import Link from 'next/link'
import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Twitter from './twitter.svg'
import Instagram from './instagram.svg'
import Deviantart from './deviantart.svg'
import Tiktok from './tiktok.svg'

type SocialIconProps = {
  kind:
    | 'facebook'
    | 'deviantart'
    | 'instagram'
    | 'twitter'
    | 'tiktok'
    | 'youtube'
    | 'mail'
    | 'github'
  href?: string
  onClick?: () => void
  size?: number
}

const components: { [key in SocialIconProps['kind']]: any } = {
  facebook: Facebook,
  deviantart: Deviantart,
  instagram: Instagram,
  twitter: Twitter,
  tiktok: Tiktok,
  youtube: Youtube,
  mail: Mail,
  github: Github,
}

export const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps): JSX.Element | null => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <Link
      className="z-20 hover:scale-110 transition duration-500"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`h-${size} w-${size}`} />
    </Link>
  )
}
