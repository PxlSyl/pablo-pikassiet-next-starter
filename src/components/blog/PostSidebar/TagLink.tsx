import Link from 'next/link'
import { humanize } from '@/lib/utils/textConverter'
import { sortData } from '@/lib/utils/sortData'
import tagData from '@/config/data/tag-data.json'

export const TagLink = ({
  liclassName,
  ulclassName,
}: {
  liclassName?: string
  ulclassName?: string
}) => {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = sortData(tagCounts)
  return (
    <ul className={ulclassName}>
      {sortedTags.map((tag: string) => (
        <li className={liclassName} key={tag}>
          <Link
            className="m-1 block rounded bg-white px-3 py-1 hover:bg-highlighted hover:text-white dark:bg-darkmode-body dark:hover:bg-darkmode-highlighted"
            href={`/tags/${tag}`}
          >
            {`${humanize(tag)} (${tagCounts[tag]})`}
          </Link>
        </li>
      ))}
    </ul>
  )
}
