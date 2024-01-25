'use client'

import siteMetadata from '@/config/siteMetadata'
import { Facebook, Twitter, Pinterest, Linkedin, Whatsapp, Telegram } from '../navigation/icons'
import { usePathname } from 'next/navigation'

type ShareProps = { title: string; description?: string; slug: string; className?: string }

const Share = ({ title, description, slug, className }: ShareProps) => {
  const pathname = usePathname()
  // Extracting the second path
  const pathSegments = pathname.split('/')
  const secondPath = pathSegments.length >= 2 ? pathSegments[1] : ''

  return (
    <div className="m-4 mt-8 flex items-center justify-center">
      <h5 className="mr-3 text-highlighted dark:text-darkmode-highlighted">Share:</h5>
      <ul className={className}>
        <li className="inline-block">
          <a
            aria-label="facebook share button"
            href={`https://facebook.com/sharer/sharer.php?u=${siteMetadata.siteUrl}/${secondPath}/${slug}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Facebook />
          </a>
        </li>
        <li className="inline-block">
          <a
            aria-label="twitter share button"
            href={`https://twitter.com/intent/tweet/?url=${siteMetadata.siteUrl}/${secondPath}/${slug}&text=${title}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Twitter />
          </a>
        </li>
        <li className="inline-block">
          <a
            aria-label="linkedin share button"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteMetadata.siteUrl}/${secondPath}/${slug}&title=${title}&summary=${description}&source=${siteMetadata.siteUrl}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Linkedin />
          </a>
        </li>
        <li className="inline-block">
          <a
            aria-label="pinterest share button"
            href={`https://pinterest.com/pin/create/button/?url=${siteMetadata.siteUrl}/${secondPath}/${slug}&media=&description=${description}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Pinterest />
          </a>
        </li>
        <li className="inline-block">
          <a
            aria-label="whatsapp share button"
            href={`https://wa.me/?text=${siteMetadata.siteUrl}/${secondPath}/${slug}&text=${title}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Whatsapp />
          </a>
        </li>
        <li className="inline-block">
          <a
            aria-label="telegram share button"
            href={`https://telegram.me/share/url?url=${siteMetadata.siteUrl}/${secondPath}/${slug}&text=${title}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Telegram />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Share
