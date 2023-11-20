import Link from 'next/link'
import { UrlObject } from 'url'

interface SectionProps {
  icon: React.ReactNode
  title: string
  links: { title: string; href?: string | UrlObject; onClick?: () => void }[]
  closeMenu: () => void
  activePath: string
  theme: string
}

export const Regularsection: React.FC<SectionProps> = ({
  icon,
  title,
  links,
  closeMenu,
  activePath,
  theme,
}): JSX.Element => {
  return (
    <div className="rounded-md border pb-2">
      <div className="mx-2 mb-1 flex flex-row items-center border-b border-gray-500 text-xl">
        {icon}
        {title}
      </div>
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
    </div>
  )
}
