import Link from 'next/link'
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

export const Regularsection: React.FC<SectionProps> = ({
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
    <div className="border rounded-md pb-2">
      <div className="flex flex-row items-center text-xl mx-2 mb-1 border-b border-gray-500">
        {icon}
        {t(title)}
      </div>
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
    </div>
  )
}
