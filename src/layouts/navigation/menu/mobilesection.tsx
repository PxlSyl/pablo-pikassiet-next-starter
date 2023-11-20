'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { UrlObject } from 'url'

interface SectionProps {
  icon: React.ReactNode
  title: string
  links: { title: string; href?: string | UrlObject; onClick?: () => void }[]
  closeMenu: () => void
  theme: string
}

export const Mobilesection: React.FC<SectionProps> = ({
  icon,
  title,
  links,
  closeMenu,
  theme,
}): JSX.Element => {
  const pathname = usePathname()
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton
          className={
            theme === 'light'
              ? `mb-1 ml-4 flex flex-row items-center border-b border-t border-gray-500 text-2xl hover:text-blue-300`
              : `mb-1 ml-4 flex flex-row items-center border-b border-t border-gray-500 text-2xl hover:text-purple-300`
          }
        >
          {icon}
          {title}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {links.map((link) => {
          if (link.href) {
            const isSelected = pathname.includes(link.href as string)
            return (
              <Link
                key={link.title}
                href={link.href as string | UrlObject}
                onClick={closeMenu}
                className={`ml-8 flex flex-col font-medium ${
                  isSelected ? 'text-blue-300' : 'text-gray-900 dark:text-gray-100'
                }`}
              >
                {link.title}
              </Link>
            )
          }
          return null
        })}
      </AccordionItemPanel>
    </AccordionItem>
  )
}
