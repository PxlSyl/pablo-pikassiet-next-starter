import Link from 'next/link'
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import useTranslation from 'next-translate/useTranslation'
import { UrlObject } from 'url'

interface SectionProps {
  icon: React.ReactNode
  title: string
  links: { title: string; href?: string | UrlObject; onClick?: () => void }[]
  closeMenu: () => void
  activePath: string
  theme: string
  translationKey: string
}

export const Accordionsection: React.FC<SectionProps> = ({
  icon,
  title,
  links,
  closeMenu,
  activePath,
  theme,
  translationKey,
}): JSX.Element => {
  const { t } = useTranslation(translationKey)

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton
          className={
            theme === 'light'
              ? `flex flex-row items-center text-2xl ml-4 mb-1 border-b border-t border-gray-500 hover:text-blue-300`
              : `flex flex-row items-center text-2xl ml-4 mb-1 border-b border-t border-gray-500 hover:text-purple-300`
          }
        >
          {icon}
          {t(title)}
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
                ? `flex flex-col font-medium hover:text-blue-300 ml-8 ${
                    activePath === link.href ? 'text-blue-500' : ''
                  }`
                : `flex flex-col font-medium hover:text-purple-300 ml-8 ${
                    activePath === link.href ? 'text-purple-500' : ''
                  }`
            }
          >
            {t(`${translationKey}:${link.title.toLowerCase()}`)}
          </Link>
        ))}
      </AccordionItemPanel>
    </AccordionItem>
  )
}
