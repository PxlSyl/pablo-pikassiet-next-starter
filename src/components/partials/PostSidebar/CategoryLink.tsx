import { humanize } from '@/lib/utils/textConverter'
import Link from 'next/link'

export const CategoryLink = ({ category, count }: { category: string; count: number }) => (
  <li key={category}>
    <Link
      className="flex justify-between hover:text-highlighted dark:hover:text-darkmode-highlighted"
      href={`/categories/${category}`}
    >
      {` ${humanize(category)} (${count})`}
    </Link>
  </li>
)
