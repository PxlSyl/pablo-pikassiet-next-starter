'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { selectedClass, hoverClass } from './menutheme'

interface SectionProps {
  icon: React.ReactNode
  title: string
  links: { title: string; href?: string }[]
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
    <div className="rounded-md border pb-2 xl:mx-2 xl:px-4">
      <div className="mx-2 mb-1 flex flex-row items-center border-b border-gray-500 text-xl">
        {icon}
        <p className="ml-1">{title}</p>
      </div>
      {links.map((link) => {
        if (link.href) {
          const isSelected = pathname.endsWith(link.href)
          return (
            <Link
              key={link.title}
              href={link.href}
              onClick={closeMenu}
              className={`ml-4 flex flex-col font-medium ${hoverClass}
               ${isSelected ? selectedClass : ''}`}
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
