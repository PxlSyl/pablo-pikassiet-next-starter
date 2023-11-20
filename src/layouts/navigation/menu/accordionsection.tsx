import Link from 'next/link'
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
  activePath: string
  theme: string
}

export const Accordionsection: React.FC<SectionProps> = ({
  icon,
  title,
  links,
  closeMenu,
  activePath,
  theme,
}): JSX.Element => {
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
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href as string | UrlObject}
            onClick={closeMenu}
            className={
              theme === 'light'
                ? `ml-8 flex flex-col font-medium hover:text-blue-300 ${
                    activePath === link.href ? 'text-blue-500' : ''
                  }`
                : `ml-8 flex flex-col font-medium hover:text-purple-300 ${
                    activePath === link.href ? 'text-purple-500' : ''
                  }`
            }
          >
            {link.title.toLowerCase()}
          </Link>
        ))}
      </AccordionItemPanel>
    </AccordionItem>
  )
}
