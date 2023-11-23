'use client'

import Link from 'next/link'

import config from '@/config/config.json'
import menu from '@/config/menu.json'
import social from '@/config/social.json'

import Logo from '../blog/Logo'
import Social from '../blog/Social'

import { markdownify } from '@/lib/utils/textConverter'

const Footer = () => {
  const { copyright, credits } = config.params

  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
      <div className="container">
        <div className="mb-8 justify-center pt-8 text-center">
          <Social source={social.main} className="social-icons" />
        </div>
        <div className="mb-8 justify-center text-center">
          <Logo />
        </div>
        <div className="mb-8 justify-center text-center">
          <ul>
            {menu.footer.map((menu) => (
              <li className="hover:text-highlighted m-3 inline-block underline" key={menu.name}>
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
