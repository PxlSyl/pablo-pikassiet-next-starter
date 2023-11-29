import { humanize } from '@/lib/utils/textConverter'
import Link from 'next/link'

export const TagLink = ({
  tag,
  count,
  className,
}: {
  tag: string
  count: number
  className?: string
}) => (
  <li className={className} key={tag}>
    <Link
      className="m-1 block rounded bg-white px-3 py-1 hover:bg-highlighted hover:text-white dark:bg-darkmode-body dark:hover:bg-darkmode-highlighted"
      href={`/tags/${tag}`}
    >
      {` ${humanize(tag)} (${count})`}
    </Link>
  </li>
)
