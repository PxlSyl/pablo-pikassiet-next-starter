import { humanize } from '@/lib/utils/textConverter'
import Link from 'next/link'
import { sortData } from '@/lib/utils/sortData'

import categoryData from '@/config/data/category-data.json'

export const CategoryLink = ({
  liclassName,
  ulclassName,
}: {
  liclassName?: string
  ulclassName?: string
}) => {
  const categoryCounts = categoryData as Record<string, number>
  const sortedCategories = sortData(categoryCounts)
  return (
    <ul className={ulclassName}>
      {sortedCategories.map((category: string) => (
        <li className={liclassName} key={category}>
          <Link
            className="flex justify-between px-3 py-1 hover:text-highlighted dark:hover:text-darkmode-highlighted"
            href={`/categories/${category}`}
          >
            {`${humanize(category)} (${categoryCounts[category]})`}
          </Link>
        </li>
      ))}
    </ul>
  )
}
