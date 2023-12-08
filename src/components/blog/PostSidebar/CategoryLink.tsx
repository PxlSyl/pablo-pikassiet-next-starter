'use client'

import Link from 'next/link'
import categoryData from '@/config/data/category-data.json'
import { usePathname } from 'next/navigation'
import { humanize } from '@/lib/utils/textConverter'
import { sortData } from '@/lib/utils/sortData'

export const CategoryLink = ({
  liclassName,
  ulclassName,
}: {
  liclassName?: string
  ulclassName?: string
}) => {
  const pathname = usePathname()
  const categoryCounts = categoryData as Record<string, number>
  const sortedCategories = sortData(categoryCounts)
  return (
    <ul className={ulclassName}>
      {sortedCategories.map((category: string) => (
        <li className={liclassName} key={category}>
          <Link
            className={`${
              pathname.includes(category) ? 'text-highlighted' : ''
            } flex justify-between px-3 py-1 hover:text-highlighted dark:hover:text-darkmode-highlighted`}
            href={`/categories/${category}`}
          >
            {`${humanize(category)} (${categoryCounts[category]})`}
          </Link>
        </li>
      ))}
    </ul>
  )
}
