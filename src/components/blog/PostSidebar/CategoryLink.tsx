import { humanize } from '@/lib/utils/textConverter'
import Link from 'next/link'

export const CategoryLink = ({
  category,
  count,
  className,
}: {
  category: string
  count: number
  className?: string
}) => (
  <li className={className} key={category}>
    <Link
      className="flex justify-between hover:text-highlighted dark:hover:text-darkmode-highlighted"
      href={`/categories/${category}`}
    >
      {` ${humanize(category)} (${count})`}
    </Link>
  </li>
)
