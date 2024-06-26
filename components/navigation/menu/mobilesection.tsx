'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { selectedClass, hoverClass } from './menutheme'

interface SectionProps {
  icon: React.ReactNode
  title: string
  links: { title: string; href?: string }[]
  closeMenu: () => void
}

export const Mobilesection: React.FC<SectionProps> = ({
  icon,
  title,
  links,
  closeMenu,
}): JSX.Element => {
  const pathname = usePathname()
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton
          className={`mb-1 ml-4 flex flex-row items-center border-b border-t border-gray-500 text-2xl hover:text-blue-300 ${hoverClass}`}
        >
          {icon}
          <p className="ml-1">{title}</p>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {links.map((link) => {
          if (link.href) {
            const isSelected = pathname.endsWith(link.href)
            return (
              <Link
                key={link.title}
                href={link.href}
                onClick={closeMenu}
                className={`ml-8 flex flex-col font-medium ${hoverClass}
                 ${isSelected ? selectedClass : ''}`}
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
