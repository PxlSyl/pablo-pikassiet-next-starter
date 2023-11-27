import Link from 'next/link'
import { humanize } from '@/lib/utils/textConverter'

import tagData from '@/app/tag-data.json'
import categoryData from '@/app/category-data.json'

const sortData = (data: Record<string, number>) => {
  const keys = Object.keys(data)
  return keys.sort((a, b) => data[b] - data[a])
}

const CategoryLink = ({ category, count }: { category: string; count: number }) => (
  <li key={category}>
    <Link
      className="flex justify-between hover:text-highlighted dark:hover:text-darkmode-highlighted"
      href={`/categories/${category}`}
    >
      {` ${humanize(category)} (${count})`}
    </Link>
  </li>
)

const TagLink = ({ tag, count }: { tag: string; count: number }) => (
  <li className="inline-block" key={tag}>
    <Link
      className="m-1 block rounded bg-white px-3 py-1 hover:bg-highlighted hover:text-white dark:bg-darkmode-body dark:hover:bg-darkmode-highlighted"
      href={`/tags/${tag}`}
    >
      {` ${humanize(tag)} (${count})`}
    </Link>
  </li>
)

const PostSidebar = () => {
  const categoryCounts = categoryData as Record<string, number>
  const sortedCategories = sortData(categoryCounts)

  const tagCounts = tagData as Record<string, number>
  const sortedTags = sortData(tagCounts)

  return (
    <div className="lg:col-4">
      {/* <!-- categories --> */}
      <div className="mb-8">
        <h5 className="mb-6 text-highlighted dark:text-darkmode-highlighted">Categories</h5>
        <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
          <ul className="space-y-4">
            {sortedCategories.map((category: string) => (
              <CategoryLink key={category} category={category} count={categoryCounts[category]} />
            ))}
          </ul>
        </div>
      </div>
      {/* <!-- tags --> */}
      <div className="mb-8">
        <h5 className="mb-6 text-highlighted dark:text-darkmode-highlighted">Tags</h5>
        <div className="rounded bg-theme-light p-6 dark:bg-darkmode-theme-light">
          <ul>
            {sortedTags.map((tag: string) => (
              <TagLink key={tag} tag={tag} count={tagCounts[tag]} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostSidebar
