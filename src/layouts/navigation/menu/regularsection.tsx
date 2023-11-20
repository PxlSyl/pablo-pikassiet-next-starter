'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UrlObject } from 'url'

interface SectionProps {
  icon: React.ReactNode
  title: string
  links: { title: string; href?: string | UrlObject; onClick?: () => void }[]
  closeMenu: () => void
}

export const Regularsection: React.FC<SectionProps> = ({
  icon,
  title,
  links,
  closeMenu,
}): JSX.Element => {
  const pathname = usePathname()
  return (
    <div className="rounded-md border pb-2">
      <div className="mx-2 mb-1 flex flex-row items-center border-b border-gray-500 text-xl">
        {icon}
        {title}
      </div>
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
    </div>
  )
}
