'use client'

import Link from 'next/link'

import config from '@/config/config.json'
import menu from '@/config/menu.json'
import social from '@/config/social.json'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from '../blog/NewsletterForm'
import Social from '../blog/Social'

import { markdownify } from '@/lib/utils/textConverter'

const Footer = () => {
  const { copyright, credits } = config.params

  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
      <div className="container">
        {siteMetadata.newsletter?.provider && (
          <div className="mb-8 flex items-center justify-center text-center">
            <NewsletterForm />
          </div>
        )}
        <div className="mb-8 justify-center text-center">
          <Social source={social.main} className="social-icons" />
        </div>
        <div className="mb-2 flex flex-row justify-center space-x-2 text-center text-sm">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-8 justify-center text-center">
          <ul>
            {menu.footer.map((menu) => (
              <li
                className="m-3 inline-block text-sm underline hover:text-highlighted"
                key={menu.name}
              >
                <Link href={menu.url}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-light dark:text-darkmode-light">
          <p dangerouslySetInnerHTML={markdownify(copyright)} />
          <p dangerouslySetInnerHTML={markdownify(credits)} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
